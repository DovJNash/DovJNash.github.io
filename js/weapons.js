/* ============================================
   WEAPON SYSTEMS
   Lock-on Targeting, Homing Missiles, Overheat, Ammo
   ============================================ */

class WeaponSystem {
    constructor(physics, modelFactory, audioSystem) {
        this.physics = physics;
        this.modelFactory = modelFactory;
        this.audioSystem = audioSystem;
        
        this.projectiles = [];
        this.targetLocks = new Map();
        
        // Weapon definitions
        this.weaponTypes = {
            laser: {
                name: 'Laser Cannon',
                damage: 25,
                fireRate: 10,
                speed: 100,
                range: 500,
                overheatRate: 5,
                cooldownRate: 3,
                ammo: Infinity,
                projectileType: 'laser',
                sound: 'laserShot',
                homingCapable: false
            },
            missile: {
                name: 'Homing Missile',
                damage: 75,
                fireRate: 2,
                speed: 50,
                range: 800,
                overheatRate: 0,
                cooldownRate: 0,
                ammo: 20,
                maxAmmo: 20,
                projectileType: 'missile',
                sound: 'missileShot',
                homingCapable: true,
                lockTime: 1.5,
                turnRate: 3
            },
            railgun: {
                name: 'Railgun',
                damage: 150,
                fireRate: 1,
                speed: 200,
                range: 1000,
                overheatRate: 25,
                cooldownRate: 2,
                ammo: 50,
                maxAmmo: 50,
                projectileType: 'laser',
                sound: 'railgun',
                homingCapable: false,
                piercing: true
            },
            plasma: {
                name: 'Plasma Cannon',
                damage: 50,
                fireRate: 5,
                speed: 70,
                range: 600,
                overheatRate: 8,
                cooldownRate: 4,
                ammo: 100,
                maxAmmo: 100,
                projectileType: 'plasma',
                sound: 'plasmaShot',
                homingCapable: false,
                areaOfEffect: 5
            }
        };
    }
    
    createWeapon(type = 'laser') {
        const template = this.weaponTypes[type];
        if (!template) return null;
        
        return {
            type: type,
            name: template.name,
            damage: template.damage,
            fireRate: template.fireRate,
            speed: template.speed,
            range: template.range,
            overheatRate: template.overheatRate,
            cooldownRate: template.cooldownRate,
            ammo: template.ammo,
            maxAmmo: template.maxAmmo || Infinity,
            projectileType: template.projectileType,
            sound: template.sound,
            homingCapable: template.homingCapable,
            lockTime: template.lockTime || 0,
            turnRate: template.turnRate || 0,
            piercing: template.piercing || false,
            areaOfEffect: template.areaOfEffect || 0,
            
            // State
            heat: 0,
            maxHeat: 100,
            lastFireTime: 0,
            currentTarget: null,
            lockProgress: 0,
            
            fire: function(position, direction, options = {}) {
                const now = Date.now();
                const timeSinceLastShot = (now - this.lastFireTime) / 1000;
                
                // Check fire rate
                if (timeSinceLastShot < 1 / this.fireRate) {
                    return null;
                }
                
                // Check overheat
                if (this.heat >= this.maxHeat) {
                    return null;
                }
                
                // Check ammo
                if (this.ammo <= 0) {
                    return null;
                }
                
                // Fire projectile
                this.lastFireTime = now;
                this.heat += this.overheatRate;
                if (this.ammo !== Infinity) {
                    this.ammo--;
                }
                
                return {
                    position: position.clone(),
                    direction: direction.clone(),
                    target: this.currentTarget,
                    ...options
                };
            },
            
            update: function(deltaTime) {
                // Cool down heat
                if (this.heat > 0) {
                    this.heat -= this.cooldownRate * deltaTime;
                    this.heat = Math.max(0, this.heat);
                }
            },
            
            reload: function() {
                this.ammo = this.maxAmmo;
            },
            
            isOverheated: function() {
                return this.heat >= this.maxHeat;
            },
            
            canFire: function() {
                const now = Date.now();
                const timeSinceLastShot = (now - this.lastFireTime) / 1000;
                return timeSinceLastShot >= 1 / this.fireRate && 
                       !this.isOverheated() && 
                       this.ammo > 0;
            }
        };
    }
    
    fireWeapon(weapon, position, direction, target = null) {
        const projectileData = weapon.fire(position, direction, { target });
        if (!projectileData) return null;
        
        // Create projectile mesh
        const projectileMesh = this.modelFactory.createProjectile(weapon.projectileType);
        projectileMesh.position.copy(projectileData.position);
        
        // Create physics body
        const rigidBody = this.physics.createRigidBody(projectileMesh, {
            mass: 0.1,
            collisionGroup: 'playerProjectile',
            collisionMask: ['enemy'],
            useGravity: false
        });
        
        // Set initial velocity
        const velocity = projectileData.direction.clone().multiplyScalar(weapon.speed);
        rigidBody.velocity.copy(velocity);
        
        // Orient projectile
        const up = new THREE.Vector3(0, 1, 0);
        projectileMesh.quaternion.setFromUnitVectors(up, projectileData.direction);
        
        const projectile = {
            mesh: projectileMesh,
            rigidBody: rigidBody,
            weapon: weapon,
            damage: weapon.damage,
            speed: weapon.speed,
            range: weapon.range,
            distanceTraveled: 0,
            target: projectileData.target,
            homing: weapon.homingCapable && projectileData.target !== null,
            turnRate: weapon.turnRate,
            piercing: weapon.piercing,
            areaOfEffect: weapon.areaOfEffect,
            hitTargets: new Set(),
            alive: true
        };
        
        this.projectiles.push(projectile);
        
        // Play sound
        if (this.audioSystem && weapon.sound) {
            this.audioSystem.playSound(weapon.sound, {
                position: position,
                volume: 0.5
            });
        }
        
        return projectile;
    }
    
    update(deltaTime) {
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            
            if (!projectile.alive) {
                this.destroyProjectile(projectile);
                this.projectiles.splice(i, 1);
                continue;
            }
            
            // Update distance traveled
            const velocity = projectile.rigidBody.velocity.length();
            projectile.distanceTraveled += velocity * deltaTime;
            
            // Check range
            if (projectile.distanceTraveled > projectile.range) {
                this.destroyProjectile(projectile);
                this.projectiles.splice(i, 1);
                continue;
            }
            
            // Homing behavior
            if (projectile.homing && projectile.target && projectile.target.mesh) {
                this.updateHomingProjectile(projectile, deltaTime);
            }
            
            // Update projectile orientation based on velocity
            if (projectile.rigidBody.velocity.lengthSq() > 0.01) {
                const direction = projectile.rigidBody.velocity.clone().normalize();
                const up = new THREE.Vector3(0, 1, 0);
                projectile.mesh.quaternion.setFromUnitVectors(up, direction);
            }
        }
    }
    
    updateHomingProjectile(projectile, deltaTime) {
        if (!projectile.target || !projectile.target.mesh) {
            projectile.homing = false;
            return;
        }
        
        // Calculate direction to target
        const toTarget = new THREE.Vector3()
            .subVectors(projectile.target.mesh.position, projectile.mesh.position)
            .normalize();
        
        // Get current direction
        const currentDirection = projectile.rigidBody.velocity.clone().normalize();
        
        // Interpolate towards target
        const turnAmount = projectile.turnRate * deltaTime;
        const newDirection = new THREE.Vector3()
            .lerpVectors(currentDirection, toTarget, turnAmount)
            .normalize();
        
        // Update velocity
        projectile.rigidBody.velocity.copy(
            newDirection.multiplyScalar(projectile.speed)
        );
        
        // Add slight acceleration towards target for better homing
        const homingForce = toTarget.multiplyScalar(projectile.speed * 2);
        this.physics.applyForce(projectile.rigidBody, homingForce);
    }
    
    destroyProjectile(projectile) {
        if (!projectile.alive) return;
        
        projectile.alive = false;
        
        // Remove physics body
        this.physics.removeRigidBody(projectile.rigidBody);
        
        // Remove mesh from scene
        if (projectile.mesh.parent) {
            projectile.mesh.parent.remove(projectile.mesh);
        }
        
        // Area of effect damage
        if (projectile.areaOfEffect > 0) {
            this.applyAreaDamage(
                projectile.mesh.position,
                projectile.areaOfEffect,
                projectile.damage * 0.5
            );
        }
    }
    
    applyAreaDamage(position, radius, damage) {
        // This should be implemented with access to enemy list
        // Callback to game logic
        if (this.onAreaDamage) {
            this.onAreaDamage(position, radius, damage);
        }
    }
    
    // Target locking system
    acquireTarget(source, targets, maxRange = 500, lockAngle = 30) {
        if (!targets || targets.length === 0) return null;
        
        const sourcePos = source.position;
        const sourceDir = new THREE.Vector3(0, 0, -1)
            .applyQuaternion(source.quaternion);
        
        let bestTarget = null;
        let bestScore = -1;
        
        targets.forEach(target => {
            if (!target.mesh) return;
            
            const targetPos = target.mesh.position;
            const distance = sourcePos.distanceTo(targetPos);
            
            // Check range
            if (distance > maxRange) return;
            
            // Check angle
            const toTarget = new THREE.Vector3()
                .subVectors(targetPos, sourcePos)
                .normalize();
            const angle = Math.acos(sourceDir.dot(toTarget)) * (180 / Math.PI);
            
            if (angle > lockAngle) return;
            
            // Score based on distance and angle (closer and more centered is better)
            const score = (1 - distance / maxRange) * (1 - angle / lockAngle);
            
            if (score > bestScore) {
                bestScore = score;
                bestTarget = target;
            }
        });
        
        return bestTarget;
    }
    
    updateTargetLock(weapon, target, deltaTime) {
        if (!weapon.homingCapable) return false;
        
        if (!target) {
            weapon.currentTarget = null;
            weapon.lockProgress = 0;
            return false;
        }
        
        if (weapon.currentTarget === target) {
            // Continue locking
            weapon.lockProgress += deltaTime;
            
            if (weapon.lockProgress >= weapon.lockTime) {
                // Lock acquired
                return true;
            }
        } else {
            // New target, start lock
            weapon.currentTarget = target;
            weapon.lockProgress = 0;
        }
        
        return false;
    }
    
    isTargetLocked(weapon) {
        return weapon.currentTarget !== null && 
               weapon.lockProgress >= weapon.lockTime;
    }
    
    clearTargetLock(weapon) {
        weapon.currentTarget = null;
        weapon.lockProgress = 0;
    }
    
    // Weapon loadout management
    createLoadout(primary, secondary, special = null) {
        return {
            primary: this.createWeapon(primary),
            secondary: this.createWeapon(secondary),
            special: special ? this.createWeapon(special) : null,
            currentWeapon: 'primary',
            
            switchWeapon: function(slot) {
                if (slot === 'primary' || slot === 'secondary' || 
                    (slot === 'special' && this.special)) {
                    this.currentWeapon = slot;
                    return true;
                }
                return false;
            },
            
            getCurrentWeapon: function() {
                return this[this.currentWeapon];
            },
            
            update: function(deltaTime) {
                if (this.primary) this.primary.update(deltaTime);
                if (this.secondary) this.secondary.update(deltaTime);
                if (this.special) this.special.update(deltaTime);
            }
        };
    }
    
    // Projectile collision detection
    checkProjectileCollisions(enemies) {
        const hits = [];
        
        this.projectiles.forEach(projectile => {
            if (!projectile.alive) return;
            
            enemies.forEach(enemy => {
                if (!enemy.mesh) return;
                
                // Skip if already hit and not piercing
                if (projectile.hitTargets.has(enemy) && !projectile.piercing) {
                    return;
                }
                
                const distance = projectile.mesh.position.distanceTo(enemy.mesh.position);
                const hitRadius = 2; // Collision radius
                
                if (distance < hitRadius) {
                    hits.push({
                        projectile: projectile,
                        enemy: enemy,
                        position: projectile.mesh.position.clone()
                    });
                    
                    projectile.hitTargets.add(enemy);
                    
                    // Destroy projectile if not piercing
                    if (!projectile.piercing) {
                        projectile.alive = false;
                    }
                }
            });
        });
        
        return hits;
    }
    
    clear() {
        this.projectiles.forEach(projectile => {
            this.destroyProjectile(projectile);
        });
        this.projectiles = [];
        this.targetLocks.clear();
    }
    
    getProjectileCount() {
        return this.projectiles.length;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WeaponSystem;
}
