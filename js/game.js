/* ============================================
   CORE GAME LOGIC
   AAA Space Combat Simulator - Main Orchestration
   ============================================ */

class SpaceCombatGame {
    constructor() {
        this.state = 'loading';
        this.clock = new THREE.Clock();
        this.deltaTime = 0;
        
        // Core systems
        this.threeJS = null;
        this.physics = null;
        this.audio = null;
        this.models = null;
        this.ai = null;
        this.weapons = null;
        this.ui = null;
        
        // Game objects
        this.player = null;
        this.playerShip = null;
        this.enemies = [];
        this.powerUps = [];
        this.explosions = [];
        
        // Game state
        this.score = 0;
        this.combo = 0;
        this.comboTimer = 0;
        this.kills = 0;
        this.mission = null;
        this.wave = 1;
        
        // Player stats
        this.playerHealth = 100;
        this.maxPlayerHealth = 100;
        this.playerShield = 100;
        this.maxPlayerShield = 100;
        
        // Customization
        this.playerShipType = 'fighter';
        this.playerShipColor = '#2a52be';
        
        // Settings
        this.settings = {
            graphicsQuality: 'high',
            bloom: true,
            motionBlur: true,
            shadows: true,
            antiAliasing: true,
            masterVolume: 1.0,
            musicVolume: 0.7,
            sfxVolume: 0.8
        };
    }
    
    async init() {
        console.log('Initializing AAA Space Combat Simulator...');
        
        // Show loading screen
        this.ui = new UISystem();
        this.ui.init();
        this.ui.showLoading('Initializing systems...');
        
        try {
            // Initialize Three.js
            this.ui.updateLoadingProgress(10, 'Setting up 3D engine...');
            const container = document.getElementById('gameContainer');
            this.threeJS = new ThreeJSSetup();
            await this.threeJS.init(container);
            
            // Initialize physics
            this.ui.updateLoadingProgress(20, 'Loading physics engine...');
            this.physics = new PhysicsEngine();
            
            // Initialize audio
            this.ui.updateLoadingProgress(30, 'Loading audio system...');
            this.audio = new AudioSystem();
            await this.audio.init();
            
            // Initialize model factory
            this.ui.updateLoadingProgress(50, 'Creating 3D models...');
            this.models = new ModelFactory();
            
            // Initialize AI
            this.ui.updateLoadingProgress(70, 'Loading AI systems...');
            this.ai = new AIController(this.physics, this.audio);
            
            // Initialize weapons
            this.ui.updateLoadingProgress(80, 'Loading weapon systems...');
            this.weapons = new WeaponSystem(this.physics, this.models, this.audio);
            
            // Setup UI callbacks
            this.setupUICallbacks();
            
            // Create player
            this.ui.updateLoadingProgress(90, 'Preparing spacecraft...');
            this.createPlayer();
            
            // Start game loop
            this.ui.updateLoadingProgress(100, 'Ready!');
            
            setTimeout(() => {
                this.ui.hideLoading();
                this.ui.showMenu('mainMenu');
                this.state = 'menu';
                this.startGameLoop();
            }, 500);
            
            console.log('Game initialized successfully!');
            
        } catch (error) {
            console.error('Failed to initialize game:', error);
            alert('Failed to initialize game. Please refresh the page.');
        }
    }
    
    setupUICallbacks() {
        this.ui.onMenuAction = (action) => this.handleMenuAction(action);
        this.ui.onMissionSelect = (mission) => this.startMission(mission);
        this.ui.onQualityChange = (quality) => this.setGraphicsQuality(quality);
        this.ui.onShipSelect = (ship) => this.setPlayerShipType(ship);
        this.ui.onColorSelect = (color) => this.setPlayerShipColor(color);
        this.ui.onVolumeChange = (id, value) => this.setVolume(id, value);
        this.ui.onSettingToggle = (id, value) => this.toggleSetting(id, value);
    }
    
    handleMenuAction(action) {
        this.audio.playSound('buttonClick', { volume: 0.3 });
        
        switch (action) {
            case 'startCampaign':
                this.ui.showMenu('campaignMenu');
                break;
            case 'quickBattle':
                this.startQuickBattle();
                break;
            case 'customization':
                this.ui.showMenu('customizationMenu');
                break;
            case 'settings':
                this.ui.showMenu('settingsMenu');
                break;
            case 'resume':
                this.resumeGame();
                break;
            case 'restart':
                this.restartMission();
                break;
            case 'mainMenu':
                this.returnToMainMenu();
                break;
            case 'back':
                this.ui.showMenu('mainMenu');
                break;
        }
    }
    
    createPlayer() {
        // Create player ship mesh
        this.playerShip = this.models.createPlayerShip(this.playerShipType);
        this.playerShip.position.set(0, 0, 50);
        this.threeJS.scene.add(this.playerShip);
        
        // Create physics body
        const rigidBody = this.physics.createRigidBody(this.playerShip, {
            mass: 10,
            collisionGroup: 'player',
            collisionMask: ['enemy', 'enemyProjectile']
        });
        
        // Setup player object
        this.player = {
            mesh: this.playerShip,
            rigidBody: rigidBody,
            health: this.playerHealth,
            maxHealth: this.maxPlayerHealth,
            shield: this.playerShield,
            maxShield: this.maxPlayerShield,
            
            // Movement
            velocity: new THREE.Vector3(),
            acceleration: 10,
            maxSpeed: 50,
            rotationSpeed: 2,
            
            // Weapon loadout
            loadout: this.weapons.createLoadout('laser', 'missile', 'railgun'),
            
            // Controls
            input: {
                forward: false,
                backward: false,
                left: false,
                right: false,
                up: false,
                down: false,
                fire: false,
                switchWeapon: false
            }
        };
        
        // Setup controls
        this.setupControls();
    }
    
    setupControls() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (this.state !== 'playing') return;
            
            switch (e.key.toLowerCase()) {
                case 'w': this.player.input.forward = true; break;
                case 's': this.player.input.backward = true; break;
                case 'a': this.player.input.left = true; break;
                case 'd': this.player.input.right = true; break;
                case 'q': this.player.input.up = true; break;
                case 'e': this.player.input.down = true; break;
                case ' ': 
                    e.preventDefault();
                    this.player.input.fire = true;
                    break;
                case 'tab':
                    e.preventDefault();
                    this.switchWeapon();
                    break;
                case 'escape':
                    this.pauseGame();
                    break;
            }
        });
        
        document.addEventListener('keyup', (e) => {
            switch (e.key.toLowerCase()) {
                case 'w': this.player.input.forward = false; break;
                case 's': this.player.input.backward = false; break;
                case 'a': this.player.input.left = false; break;
                case 'd': this.player.input.right = false; break;
                case 'q': this.player.input.up = false; break;
                case 'e': this.player.input.down = false; break;
                case ' ': this.player.input.fire = false; break;
            }
        });
        
        // Mouse controls
        document.addEventListener('mousedown', (e) => {
            if (this.state !== 'playing') return;
            if (e.button === 0) {
                this.player.input.fire = true;
            }
        });
        
        document.addEventListener('mouseup', (e) => {
            if (e.button === 0) {
                this.player.input.fire = false;
            }
        });
    }
    
    startQuickBattle() {
        this.state = 'playing';
        this.ui.hideAllMenus();
        this.audio.playMusic('combat');
        
        // Reset game state
        this.score = 0;
        this.combo = 0;
        this.kills = 0;
        this.wave = 1;
        this.playerHealth = this.maxPlayerHealth;
        this.playerShield = this.maxPlayerShield;
        
        // Spawn initial enemies
        this.spawnWave(1);
        
        this.ui.showNotification('MISSION START', 'success', 3000);
    }
    
    startMission(missionId) {
        this.state = 'playing';
        this.ui.hideAllMenus();
        
        // Load mission data
        this.mission = {
            id: missionId,
            objectives: this.getMissionObjectives(missionId),
            completed: false
        };
        
        this.audio.playMusic('combat');
        
        // Reset
        this.score = 0;
        this.combo = 0;
        this.kills = 0;
        this.wave = 1;
        this.playerHealth = this.maxPlayerHealth;
        this.playerShield = this.maxPlayerShield;
        
        // Play mission briefing
        this.playMissionBriefing(missionId);
    }
    
    getMissionObjectives(missionId) {
        const missions = {
            1: { kills: 10, type: 'elimination' },
            2: { time: 300, type: 'survival' },
            3: { targets: 3, type: 'destroy' },
            4: { waypoint: new THREE.Vector3(0, 0, -500), type: 'navigate' },
            5: { boss: true, type: 'boss' }
        };
        return missions[missionId] || missions[1];
    }
    
    playMissionBriefing(missionId) {
        const briefings = {
            1: 'Eliminate all enemy scouts in the sector.',
            2: 'Defend the position for 5 minutes.',
            3: 'Destroy enemy installations.',
            4: 'Navigate through the blockade.',
            5: 'Destroy the enemy flagship.'
        };
        
        this.ui.enterCinematicMode(briefings[missionId]);
        
        setTimeout(() => {
            this.ui.exitCinematicMode();
            this.spawnWave(1);
        }, 4000);
    }
    
    spawnWave(waveNumber) {
        const enemyCount = 5 + waveNumber * 3;
        
        this.ui.showNotification(`WAVE ${waveNumber}`, 'warning', 2000);
        
        // Spawn formation
        const formation = this.ai.createFormation(`wave_${waveNumber}`, 'vee', 15);
        
        for (let i = 0; i < enemyCount; i++) {
            const enemyType = this.getEnemyTypeForWave(waveNumber, i);
            const enemyMesh = this.models.createEnemyShip(enemyType);
            
            // Random spawn position
            const angle = (Math.PI * 2 / enemyCount) * i;
            const radius = 200;
            enemyMesh.position.set(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.3,
                -300 + Math.random() * 100
            );
            
            this.threeJS.scene.add(enemyMesh);
            
            const enemy = this.ai.createEnemy(enemyMesh, {
                type: enemyType,
                health: 50 + waveNumber * 10,
                damage: 10 + waveNumber * 2,
                speed: 5 + waveNumber * 0.5,
                behavior: i === 0 ? 'formation' : 'formation',
                formationId: `wave_${waveNumber}`,
                isLeader: i === 0
            });
            
            // Setup shoot callback
            enemy.onShoot = (enemy, direction) => {
                this.enemyShoot(enemy, direction);
            };
            
            this.enemies.push(enemy);
        }
    }
    
    getEnemyTypeForWave(wave, index) {
        if (wave < 3) return 'basic';
        if (wave < 6) return index % 3 === 0 ? 'heavy' : 'basic';
        if (wave < 10) {
            const types = ['basic', 'heavy', 'scout'];
            return types[index % 3];
        }
        if (wave === 10) return index === 0 ? 'boss' : 'heavy';
        return 'heavy';
    }
    
    enemyShoot(enemy, direction) {
        const weapon = this.weapons.createWeapon('laser');
        const projectile = this.weapons.fireWeapon(
            weapon,
            enemy.mesh.position,
            direction,
            null
        );
        
        if (projectile) {
            projectile.rigidBody.collisionGroup = 'enemyProjectile';
            projectile.rigidBody.collisionMask = ['player'];
        }
    }
    
    update() {
        if (this.state !== 'playing') {
            if (this.state === 'menu') {
                // Update menu animations
                this.threeJS.update(this.deltaTime);
                this.threeJS.render();
            }
            return;
        }
        
        this.deltaTime = this.clock.getDelta();
        
        // Update player
        this.updatePlayer(this.deltaTime);
        
        // Update physics
        this.physics.update(this.deltaTime);
        
        // Update AI
        this.ai.update(this.deltaTime, this.player);
        
        // Update weapons
        this.weapons.update(this.deltaTime);
        this.player.loadout.update(this.deltaTime);
        
        // Check collisions
        this.checkCollisions();
        
        // Update explosions
        this.updateExplosions(this.deltaTime);
        
        // Update Three.js
        this.threeJS.update(this.deltaTime);
        
        // Update audio listener
        this.audio.updateListenerPosition(
            this.player.mesh.position,
            new THREE.Vector3(0, 0, -1).applyQuaternion(this.player.mesh.quaternion),
            new THREE.Vector3(0, 1, 0).applyQuaternion(this.player.mesh.quaternion)
        );
        
        // Update UI
        this.updateUI();
        
        // Update camera
        this.updateCamera();
        
        // Render
        this.threeJS.render();
        
        // Check win/lose conditions
        this.checkGameConditions();
    }
    
    updatePlayer(deltaTime) {
        const input = this.player.input;
        const ship = this.player.mesh;
        const body = this.player.rigidBody;
        
        // Movement forces
        const moveForce = new THREE.Vector3();
        
        if (input.forward) moveForce.z -= 1;
        if (input.backward) moveForce.z += 1;
        if (input.left) moveForce.x -= 1;
        if (input.right) moveForce.x += 1;
        if (input.up) moveForce.y += 1;
        if (input.down) moveForce.y -= 1;
        
        if (moveForce.lengthSq() > 0) {
            moveForce.normalize();
            moveForce.applyQuaternion(ship.quaternion);
            moveForce.multiplyScalar(this.player.acceleration * 100);
            this.physics.applyForce(body, moveForce);
        }
        
        // Rotation
        if (input.left) ship.rotation.z += this.player.rotationSpeed * deltaTime;
        if (input.right) ship.rotation.z -= this.player.rotationSpeed * deltaTime;
        
        // Clamp velocity
        if (body.velocity.lengthSq() > this.player.maxSpeed * this.player.maxSpeed) {
            body.velocity.normalize().multiplyScalar(this.player.maxSpeed);
        }
        
        // Fire weapon
        if (input.fire) {
            const weapon = this.player.loadout.getCurrentWeapon();
            if (weapon.canFire()) {
                const direction = new THREE.Vector3(0, 0, -1)
                    .applyQuaternion(ship.quaternion);
                
                this.weapons.fireWeapon(
                    weapon,
                    ship.position.clone().add(direction.multiplyScalar(3)),
                    direction,
                    this.getCurrentTarget()
                );
            }
        }
        
        // Shield regeneration
        if (this.player.shield < this.player.maxShield) {
            this.player.shield += 5 * deltaTime;
            this.player.shield = Math.min(this.player.shield, this.player.maxShield);
        }
        
        // Update combo timer
        if (this.comboTimer > 0) {
            this.comboTimer -= deltaTime;
            if (this.comboTimer <= 0) {
                this.combo = 0;
            }
        }
    }
    
    getCurrentTarget() {
        return this.weapons.acquireTarget(
            this.player.mesh,
            this.enemies,
            500,
            30
        );
    }
    
    switchWeapon() {
        const loadout = this.player.loadout;
        const weapons = ['primary', 'secondary', 'special'];
        const current = weapons.indexOf(loadout.currentWeapon);
        const next = weapons[(current + 1) % weapons.length];
        
        if (loadout.switchWeapon(next)) {
            this.ui.showNotification(`WEAPON: ${loadout[next].name}`, 'normal', 1000);
        }
    }
    
    checkCollisions() {
        // Player projectiles vs enemies
        const hits = this.weapons.checkProjectileCollisions(this.enemies);
        
        hits.forEach(hit => {
            this.damageEnemy(hit.enemy, hit.projectile.damage);
            this.createExplosion(hit.position, 0.5);
            this.threeJS.addCameraShake(0.3);
        });
        
        // Enemy collisions with player (handled by physics callbacks)
        this.enemies.forEach(enemy => {
            if (!enemy.mesh) return;
            
            const distance = enemy.mesh.position.distanceTo(this.player.mesh.position);
            if (distance < 3) {
                this.damagePlayer(enemy.damage);
                this.damageEnemy(enemy, enemy.maxHealth);
            }
        });
    }
    
    damageEnemy(enemy, damage) {
        const destroyed = this.ai.damageEnemy(enemy, damage);
        
        if (destroyed) {
            // Enemy destroyed
            this.createExplosion(enemy.mesh.position.clone(), 1.5);
            this.threeJS.addCameraShake(0.5);
            
            // Remove from scene
            this.threeJS.scene.remove(enemy.mesh);
            
            // Update score
            this.score += 100;
            this.kills++;
            this.combo++;
            this.comboTimer = 3;
            
            // Play sound
            this.audio.playSound('explosionMedium', {
                position: enemy.mesh.position,
                volume: 0.8
            });
            
            this.ui.showNotification('+100', 'success', 1000);
            
            // Remove from list
            const index = this.enemies.indexOf(enemy);
            if (index > -1) {
                this.enemies.splice(index, 1);
            }
            
            // Check if wave complete
            if (this.enemies.length === 0) {
                this.wave++;
                setTimeout(() => this.spawnWave(this.wave), 3000);
                this.ui.showNotification('WAVE COMPLETE', 'success', 2000);
            }
        }
    }
    
    damagePlayer(damage) {
        // Check shield first
        if (this.player.shield > 0) {
            this.player.shield -= damage;
            if (this.player.shield < 0) {
                this.player.health += this.player.shield;
                this.player.shield = 0;
            }
        } else {
            this.player.health -= damage;
        }
        
        this.player.health = Math.max(0, this.player.health);
        
        this.threeJS.addCameraShake(0.8);
        this.audio.playSound('damage', { volume: 0.6 });
        
        if (this.player.health <= 0) {
            this.gameOver();
        }
    }
    
    createExplosion(position, size) {
        const explosion = this.models.createExplosion(size);
        explosion.position.copy(position);
        this.threeJS.scene.add(explosion);
        
        explosion.userData.creationTime = Date.now();
        explosion.userData.lifetime = 1000;
        
        this.explosions.push(explosion);
    }
    
    updateExplosions(deltaTime) {
        const now = Date.now();
        
        for (let i = this.explosions.length - 1; i >= 0; i--) {
            const explosion = this.explosions[i];
            const age = now - explosion.userData.creationTime;
            
            if (age > explosion.userData.lifetime) {
                this.threeJS.scene.remove(explosion);
                this.explosions.splice(i, 1);
                continue;
            }
            
            // Animate particles
            explosion.children.forEach(particle => {
                if (particle.userData.velocity) {
                    particle.position.add(
                        particle.userData.velocity.clone().multiplyScalar(deltaTime)
                    );
                    particle.userData.life -= particle.userData.decay;
                    if (particle.material.opacity !== undefined) {
                        particle.material.opacity = Math.max(0, particle.userData.life);
                    }
                }
            });
        }
    }
    
    updateCamera() {
        // Follow player
        const cameraOffset = new THREE.Vector3(0, 10, 30);
        const targetPos = this.player.mesh.position.clone().add(
            cameraOffset.applyQuaternion(this.player.mesh.quaternion)
        );
        
        this.threeJS.camera.position.lerp(targetPos, 0.1);
        this.threeJS.camera.lookAt(this.player.mesh.position);
    }
    
    updateUI() {
        this.ui.updateHealth(this.player.health, this.player.maxHealth);
        this.ui.updateShield(this.player.shield, this.player.maxShield);
        this.ui.updateWeaponStatus(this.player.loadout);
        this.ui.updateRadar(this.player.mesh, this.enemies);
        this.ui.updateScore(this.score);
        this.ui.updateCombo(this.combo);
        this.ui.updateSpeed(this.player.rigidBody.velocity.length());
        
        const target = this.getCurrentTarget();
        if (target) {
            target.distance = target.mesh.position.distanceTo(this.player.mesh.position);
            this.ui.updateTargetInfo(target);
        } else {
            this.ui.updateTargetInfo(null);
        }
    }
    
    checkGameConditions() {
        // Check mission objectives
        if (this.mission) {
            const obj = this.mission.objectives;
            
            switch (obj.type) {
                case 'elimination':
                    if (this.kills >= obj.kills) {
                        this.missionComplete();
                    }
                    break;
                case 'boss':
                    if (this.enemies.length === 0 && this.wave > 5) {
                        this.missionComplete();
                    }
                    break;
            }
        }
    }
    
    missionComplete() {
        this.state = 'victory';
        this.ui.showNotification('MISSION COMPLETE!', 'success', 5000);
        this.audio.playMusic('victory');
        
        setTimeout(() => {
            this.returnToMainMenu();
        }, 5000);
    }
    
    gameOver() {
        this.state = 'gameover';
        this.ui.showNotification('MISSION FAILED', 'warning', 5000);
        this.audio.playMusic('defeat');
        
        setTimeout(() => {
            this.returnToMainMenu();
        }, 5000);
    }
    
    pauseGame() {
        if (this.state === 'playing') {
            this.state = 'paused';
            this.ui.showMenu('pauseMenu');
            this.audio.suspend();
        }
    }
    
    resumeGame() {
        if (this.state === 'paused') {
            this.state = 'playing';
            this.ui.hideAllMenus();
            this.audio.resume();
        }
    }
    
    restartMission() {
        this.clearGame();
        if (this.mission) {
            this.startMission(this.mission.id);
        } else {
            this.startQuickBattle();
        }
    }
    
    returnToMainMenu() {
        this.clearGame();
        this.state = 'menu';
        this.ui.showMenu('mainMenu');
        this.audio.stopMusic();
        this.audio.playMusic('menu');
    }
    
    clearGame() {
        // Clear enemies
        this.enemies.forEach(enemy => {
            this.threeJS.scene.remove(enemy.mesh);
        });
        this.enemies = [];
        
        // Clear projectiles
        this.weapons.clear();
        
        // Clear explosions
        this.explosions.forEach(exp => {
            this.threeJS.scene.remove(exp);
        });
        this.explosions = [];
        
        // Clear AI
        this.ai.clear();
        
        // Reset player position
        this.player.mesh.position.set(0, 0, 50);
        this.player.mesh.rotation.set(0, 0, 0);
        this.player.rigidBody.velocity.set(0, 0, 0);
        this.player.rigidBody.angularVelocity.set(0, 0, 0);
    }
    
    setGraphicsQuality(quality) {
        this.settings.graphicsQuality = quality;
        this.threeJS.setRenderQuality(quality);
        this.ui.showNotification(`Graphics: ${quality.toUpperCase()}`, 'normal', 2000);
    }
    
    setPlayerShipType(type) {
        this.playerShipType = type;
        // Rebuild player ship
        this.threeJS.scene.remove(this.playerShip);
        this.createPlayer();
        this.ui.showNotification(`Ship: ${type.toUpperCase()}`, 'normal', 2000);
    }
    
    setPlayerShipColor(color) {
        this.playerShipColor = color;
        // Update ship color
        this.playerShip.traverse(child => {
            if (child.isMesh && child.material) {
                child.material.color.setStyle(color);
            }
        });
    }
    
    setVolume(id, value) {
        switch (id) {
            case 'masterVolume':
                this.audio.setMasterVolume(value);
                break;
            case 'musicVolume':
                this.audio.setCategoryVolume('music', value);
                break;
            case 'sfxVolume':
                this.audio.setCategoryVolume('sfx', value);
                break;
        }
    }
    
    toggleSetting(id, value) {
        switch (id) {
            case 'bloomToggle':
                this.settings.bloom = value;
                if (this.threeJS.unrealBloomPass) {
                    this.threeJS.unrealBloomPass.enabled = value;
                }
                break;
            case 'motionBlurToggle':
                this.settings.motionBlur = value;
                break;
            case 'shadowsToggle':
                this.settings.shadows = value;
                this.threeJS.renderer.shadowMap.enabled = value;
                break;
            case 'aaToggle':
                this.settings.antiAliasing = value;
                break;
        }
    }
    
    startGameLoop() {
        const animate = () => {
            requestAnimationFrame(animate);
            this.update();
        };
        animate();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpaceCombatGame;
}
