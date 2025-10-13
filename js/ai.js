/* ============================================
   ADVANCED AI SYSTEM
   Formation Flying, Evasive Maneuvers, Flanking
   ============================================ */

class AIController {
    constructor(physics, audioSystem) {
        this.physics = physics;
        this.audioSystem = audioSystem;
        this.enemies = [];
        this.formations = new Map();
        this.behaviors = {
            aggressive: this.aggressiveBehavior.bind(this),
            defensive: this.defensiveBehavior.bind(this),
            flanking: this.flankingBehavior.bind(this),
            evasive: this.evasiveBehavior.bind(this),
            formation: this.formationBehavior.bind(this),
            boss: this.bossBehavior.bind(this)
        };
    }
    
    createEnemy(mesh, options = {}) {
        const {
            type = 'basic',
            health = 100,
            damage = 10,
            speed = 5,
            behavior = 'aggressive',
            formationId = null,
            isLeader = false
        } = options;
        
        const rigidBody = this.physics.createRigidBody(mesh, {
            mass: 10,
            collisionGroup: 'enemy',
            collisionMask: ['player', 'playerProjectile']
        });
        
        const enemy = {
            mesh: mesh,
            rigidBody: rigidBody,
            type: type,
            health: health,
            maxHealth: health,
            damage: damage,
            speed: speed,
            behavior: behavior,
            formationId: formationId,
            isLeader: isLeader,
            
            // AI state
            target: null,
            lastShotTime: 0,
            shotCooldown: 1000 + Math.random() * 1000,
            evasionCooldown: 0,
            flankDirection: Math.random() > 0.5 ? 1 : -1,
            flankAngle: 0,
            
            // Formation data
            formationPosition: new THREE.Vector3(),
            formationOffset: new THREE.Vector3(),
            
            // Behavior state
            behaviorState: 'idle',
            behaviorTimer: 0,
            targetPosition: new THREE.Vector3(),
            
            // Stats
            kills: 0,
            damageDealt: 0,
            
            update: (deltaTime, player) => this.updateEnemy(enemy, deltaTime, player)
        };
        
        this.enemies.push(enemy);
        
        // Add to formation if specified
        if (formationId) {
            this.addToFormation(enemy, formationId);
        }
        
        return enemy;
    }
    
    updateEnemy(enemy, deltaTime, player) {
        if (!player || !enemy.mesh) return;
        
        enemy.target = player;
        
        // Execute behavior
        const behaviorFunc = this.behaviors[enemy.behavior];
        if (behaviorFunc) {
            behaviorFunc(enemy, deltaTime, player);
        }
        
        // Update timers
        enemy.behaviorTimer -= deltaTime;
        if (enemy.evasionCooldown > 0) {
            enemy.evasionCooldown -= deltaTime;
        }
    }
    
    aggressiveBehavior(enemy, deltaTime, player) {
        const direction = new THREE.Vector3()
            .subVectors(player.mesh.position, enemy.mesh.position)
            .normalize();
        
        // Move towards player
        const force = direction.multiplyScalar(enemy.speed * 10);
        this.physics.applyForce(enemy.rigidBody, force);
        
        // Face player
        enemy.mesh.lookAt(player.mesh.position);
        
        // Shoot at player
        this.tryShoot(enemy, player);
    }
    
    defensiveBehavior(enemy, deltaTime, player) {
        const distanceToPlayer = enemy.mesh.position.distanceTo(player.mesh.position);
        const optimalDistance = 50;
        
        const direction = new THREE.Vector3()
            .subVectors(player.mesh.position, enemy.mesh.position)
            .normalize();
        
        if (distanceToPlayer < optimalDistance) {
            // Move away
            const force = direction.multiplyScalar(-enemy.speed * 5);
            this.physics.applyForce(enemy.rigidBody, force);
        } else if (distanceToPlayer > optimalDistance * 1.5) {
            // Move closer
            const force = direction.multiplyScalar(enemy.speed * 5);
            this.physics.applyForce(enemy.rigidBody, force);
        } else {
            // Strafe
            const strafeDirection = new THREE.Vector3(-direction.z, 0, direction.x);
            const force = strafeDirection.multiplyScalar(enemy.speed * 3);
            this.physics.applyForce(enemy.rigidBody, force);
        }
        
        // Face player
        enemy.mesh.lookAt(player.mesh.position);
        
        // Shoot at player
        this.tryShoot(enemy, player);
    }
    
    flankingBehavior(enemy, deltaTime, player) {
        const toPlayer = new THREE.Vector3()
            .subVectors(player.mesh.position, enemy.mesh.position);
        const distance = toPlayer.length();
        toPlayer.normalize();
        
        // Calculate flanking position
        const flankRadius = 40;
        enemy.flankAngle += deltaTime * 0.5 * enemy.flankDirection;
        
        const flankOffset = new THREE.Vector3(
            Math.cos(enemy.flankAngle) * flankRadius,
            Math.sin(enemy.flankAngle * 0.5) * flankRadius * 0.5,
            Math.sin(enemy.flankAngle) * flankRadius
        );
        
        const targetPos = player.mesh.position.clone().add(flankOffset);
        const toTarget = new THREE.Vector3()
            .subVectors(targetPos, enemy.mesh.position)
            .normalize();
        
        // Move to flanking position
        const force = toTarget.multiplyScalar(enemy.speed * 8);
        this.physics.applyForce(enemy.rigidBody, force);
        
        // Face player while flanking
        enemy.mesh.lookAt(player.mesh.position);
        
        // Shoot at player
        this.tryShoot(enemy, player);
        
        // Change direction occasionally
        if (Math.random() < 0.001) {
            enemy.flankDirection *= -1;
        }
    }
    
    evasiveBehavior(enemy, deltaTime, player) {
        // Check for incoming projectiles
        const projectiles = this.getIncomingProjectiles(enemy);
        
        if (projectiles.length > 0 && enemy.evasionCooldown <= 0) {
            // Evade
            const evasionDirection = this.calculateEvasionDirection(enemy, projectiles);
            const force = evasionDirection.multiplyScalar(enemy.speed * 15);
            this.physics.applyForce(enemy.rigidBody, force);
            
            // Apply barrel roll
            const rollAxis = new THREE.Vector3(0, 0, 1);
            const rollTorque = rollAxis.multiplyScalar(5);
            enemy.rigidBody.torque.add(rollTorque);
            
            enemy.evasionCooldown = 2;
        } else {
            // Default aggressive behavior
            this.aggressiveBehavior(enemy, deltaTime, player);
        }
    }
    
    formationBehavior(enemy, deltaTime, player) {
        const formation = this.formations.get(enemy.formationId);
        if (!formation) {
            this.aggressiveBehavior(enemy, deltaTime, player);
            return;
        }
        
        // Calculate formation position
        const formationCenter = formation.leader ? 
            formation.leader.mesh.position : 
            formation.center;
        
        const targetPos = formationCenter.clone().add(enemy.formationOffset);
        
        // Move to formation position
        const toTarget = new THREE.Vector3()
            .subVectors(targetPos, enemy.mesh.position);
        const distance = toTarget.length();
        
        if (distance > 5) {
            toTarget.normalize();
            const force = toTarget.multiplyScalar(enemy.speed * 10);
            this.physics.applyForce(enemy.rigidBody, force);
        }
        
        // If leader, move formation towards player
        if (enemy.isLeader) {
            const toPlayer = new THREE.Vector3()
                .subVectors(player.mesh.position, enemy.mesh.position)
                .normalize();
            const force = toPlayer.multiplyScalar(enemy.speed * 5);
            this.physics.applyForce(enemy.rigidBody, force);
        }
        
        // Face player
        enemy.mesh.lookAt(player.mesh.position);
        
        // Shoot at player
        this.tryShoot(enemy, player);
    }
    
    bossBehavior(enemy, deltaTime, player) {
        // Multi-phase boss behavior
        const healthPercent = enemy.health / enemy.maxHealth;
        
        if (enemy.behaviorTimer <= 0) {
            // Choose new behavior phase
            if (healthPercent > 0.66) {
                enemy.behaviorState = 'approach';
                enemy.behaviorTimer = 5;
            } else if (healthPercent > 0.33) {
                enemy.behaviorState = 'circle';
                enemy.behaviorTimer = 8;
            } else {
                enemy.behaviorState = 'berserk';
                enemy.behaviorTimer = 3;
            }
        }
        
        switch (enemy.behaviorState) {
            case 'approach':
                this.aggressiveBehavior(enemy, deltaTime, player);
                break;
            case 'circle':
                this.flankingBehavior(enemy, deltaTime, player);
                break;
            case 'berserk':
                // Rapid aggressive attacks
                this.aggressiveBehavior(enemy, deltaTime, player);
                enemy.shotCooldown = 300; // Faster shooting
                
                // Dash attacks
                if (Math.random() < 0.01) {
                    const dashDirection = new THREE.Vector3()
                        .subVectors(player.mesh.position, enemy.mesh.position)
                        .normalize();
                    const dashForce = dashDirection.multiplyScalar(enemy.speed * 50);
                    this.physics.applyImpulse(enemy.rigidBody, dashForce);
                }
                break;
        }
        
        // Boss special attacks
        if (Math.random() < 0.005) {
            this.bossSpecialAttack(enemy, player);
        }
    }
    
    tryShoot(enemy, player) {
        const now = Date.now();
        if (now - enemy.lastShotTime < enemy.shotCooldown) return;
        
        // Check line of sight
        const direction = new THREE.Vector3()
            .subVectors(player.mesh.position, enemy.mesh.position)
            .normalize();
        
        const distance = enemy.mesh.position.distanceTo(player.mesh.position);
        if (distance > 100) return; // Too far
        
        // Shoot
        enemy.lastShotTime = now;
        
        // Call shot callback if it exists
        if (enemy.onShoot) {
            enemy.onShoot(enemy, direction);
        }
        
        return true;
    }
    
    bossSpecialAttack(enemy, player) {
        // Implement special attack logic
        if (enemy.onSpecialAttack) {
            enemy.onSpecialAttack(enemy, player);
        }
    }
    
    getIncomingProjectiles(enemy) {
        // This should be implemented with access to projectile list
        // For now, return empty array
        return [];
    }
    
    calculateEvasionDirection(enemy, projectiles) {
        // Calculate average threat direction
        const threatDirection = new THREE.Vector3();
        
        projectiles.forEach(proj => {
            const dir = new THREE.Vector3()
                .subVectors(enemy.mesh.position, proj.position)
                .normalize();
            threatDirection.add(dir);
        });
        
        threatDirection.normalize();
        
        // Add some randomness
        threatDirection.x += (Math.random() - 0.5) * 0.5;
        threatDirection.y += (Math.random() - 0.5) * 0.5;
        threatDirection.z += (Math.random() - 0.5) * 0.5;
        threatDirection.normalize();
        
        return threatDirection;
    }
    
    createFormation(id, type = 'vee', spacing = 10) {
        const formation = {
            id: id,
            type: type,
            spacing: spacing,
            members: [],
            leader: null,
            center: new THREE.Vector3()
        };
        
        this.formations.set(id, formation);
        return formation;
    }
    
    addToFormation(enemy, formationId) {
        const formation = this.formations.get(formationId);
        if (!formation) return;
        
        formation.members.push(enemy);
        
        if (enemy.isLeader) {
            formation.leader = enemy;
        }
        
        // Calculate formation offset
        const index = formation.members.length - 1;
        enemy.formationOffset = this.calculateFormationOffset(
            formation.type,
            index,
            formation.spacing
        );
    }
    
    calculateFormationOffset(type, index, spacing) {
        const offset = new THREE.Vector3();
        
        switch (type) {
            case 'vee':
                // V formation
                if (index === 0) {
                    offset.set(0, 0, 0);
                } else {
                    const side = index % 2 === 0 ? 1 : -1;
                    const row = Math.floor(index / 2);
                    offset.set(side * row * spacing, 0, -row * spacing);
                }
                break;
                
            case 'line':
                // Line abreast
                offset.set(index * spacing - (formation.members.length * spacing / 2), 0, 0);
                break;
                
            case 'column':
                // Line astern
                offset.set(0, 0, -index * spacing);
                break;
                
            case 'diamond':
                // Diamond formation
                if (index === 0) {
                    offset.set(0, 0, 0);
                } else if (index === 1) {
                    offset.set(-spacing, 0, -spacing);
                } else if (index === 2) {
                    offset.set(spacing, 0, -spacing);
                } else if (index === 3) {
                    offset.set(0, 0, -spacing * 2);
                }
                break;
                
            case 'wall':
                // Wall formation
                const cols = 5;
                const row = Math.floor(index / cols);
                const col = index % cols;
                offset.set(
                    (col - cols / 2) * spacing,
                    0,
                    -row * spacing
                );
                break;
        }
        
        return offset;
    }
    
    breakFormation(formationId) {
        const formation = this.formations.get(formationId);
        if (!formation) return;
        
        formation.members.forEach(enemy => {
            enemy.behavior = 'aggressive';
            enemy.formationId = null;
        });
        
        this.formations.delete(formationId);
    }
    
    damageEnemy(enemy, damage) {
        enemy.health -= damage;
        
        if (enemy.health <= 0) {
            return this.destroyEnemy(enemy);
        }
        
        return false;
    }
    
    destroyEnemy(enemy) {
        // Remove from formations
        if (enemy.formationId) {
            const formation = this.formations.get(enemy.formationId);
            if (formation) {
                const index = formation.members.indexOf(enemy);
                if (index > -1) {
                    formation.members.splice(index, 1);
                }
                
                // If leader destroyed, break formation
                if (enemy.isLeader) {
                    this.breakFormation(enemy.formationId);
                }
            }
        }
        
        // Remove from enemies list
        const index = this.enemies.indexOf(enemy);
        if (index > -1) {
            this.enemies.splice(index, 1);
        }
        
        // Remove physics body
        this.physics.removeRigidBody(enemy.rigidBody);
        
        return true;
    }
    
    update(deltaTime, player) {
        // Update all enemies
        this.enemies.forEach(enemy => {
            enemy.update(deltaTime, player);
        });
        
        // Update formations
        this.formations.forEach(formation => {
            if (formation.leader) {
                formation.center.copy(formation.leader.mesh.position);
            }
        });
    }
    
    clear() {
        this.enemies.forEach(enemy => {
            this.physics.removeRigidBody(enemy.rigidBody);
        });
        this.enemies = [];
        this.formations.clear();
    }
    
    getEnemyCount() {
        return this.enemies.length;
    }
    
    getFormationCount() {
        return this.formations.size;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIController;
}
