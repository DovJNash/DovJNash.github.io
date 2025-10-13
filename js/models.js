/* ============================================
   3D MODEL GENERATION & LOADING
   High-poly procedural models
   ============================================ */

class ModelFactory {
    constructor() {
        this.cache = new Map();
        this.loader = new THREE.GLTFLoader();
        this.textureLoader = new THREE.TextureLoader();
    }
    
    // Player ship models
    createPlayerShip(type = 'fighter') {
        const cacheKey = `player_${type}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey).clone();
        }
        
        let ship;
        switch (type) {
            case 'fighter':
                ship = this.createFighterShip();
                break;
            case 'interceptor':
                ship = this.createInterceptorShip();
                break;
            case 'bomber':
                ship = this.createBomberShip();
                break;
            default:
                ship = this.createFighterShip();
        }
        
        this.cache.set(cacheKey, ship);
        return ship.clone();
    }
    
    createFighterShip() {
        const group = new THREE.Group();
        
        // Main body - high poly count
        const bodyGeometry = new THREE.CylinderGeometry(0.5, 1, 5, 32, 16);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x2a52be,
            emissive: 0x111133,
            shininess: 90,
            specular: 0x6688ff
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.x = Math.PI / 2;
        body.castShadow = true;
        body.receiveShadow = true;
        group.add(body);
        
        // Cockpit
        const cockpitGeometry = new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI);
        const cockpitMaterial = new THREE.MeshPhongMaterial({
            color: 0x88ccff,
            emissive: 0x224466,
            transparent: true,
            opacity: 0.8,
            shininess: 100
        });
        const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
        cockpit.position.z = 2;
        cockpit.rotation.x = -Math.PI / 2;
        cockpit.castShadow = true;
        group.add(cockpit);
        
        // Wings
        const wingGeometry = new THREE.BoxGeometry(8, 0.2, 3, 16, 1, 8);
        const wingMaterial = new THREE.MeshPhongMaterial({
            color: 0x1a3a7a,
            emissive: 0x0a0a2a,
            shininess: 80
        });
        const wings = new THREE.Mesh(wingGeometry, wingMaterial);
        wings.position.z = -0.5;
        wings.castShadow = true;
        group.add(wings);
        
        // Engine exhausts
        for (let i = 0; i < 2; i++) {
            const engineGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.5, 16);
            const engineMaterial = new THREE.MeshPhongMaterial({
                color: 0x444444,
                emissive: 0x222222,
                shininess: 50
            });
            const engine = new THREE.Mesh(engineGeometry, engineMaterial);
            engine.rotation.x = Math.PI / 2;
            engine.position.x = i === 0 ? -2.5 : 2.5;
            engine.position.z = -2;
            engine.castShadow = true;
            group.add(engine);
            
            // Engine glow
            const glowGeometry = new THREE.CylinderGeometry(0.25, 0.3, 0.5, 16);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0x00ffff,
                transparent: true,
                opacity: 0.8
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.rotation.x = Math.PI / 2;
            glow.position.z = -0.7;
            engine.add(glow);
            
            // Add point light for engine
            const engineLight = new THREE.PointLight(0x00ffff, 1, 10);
            engineLight.position.z = -0.5;
            engine.add(engineLight);
        }
        
        // Weapon hardpoints
        for (let i = 0; i < 4; i++) {
            const hardpointGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.8, 4, 4, 8);
            const hardpointMaterial = new THREE.MeshPhongMaterial({
                color: 0x666666,
                shininess: 60
            });
            const hardpoint = new THREE.Mesh(hardpointGeometry, hardpointMaterial);
            hardpoint.position.x = i < 2 ? -3 : 3;
            hardpoint.position.y = i % 2 === 0 ? 0.2 : -0.2;
            hardpoint.position.z = 0;
            hardpoint.castShadow = true;
            group.add(hardpoint);
        }
        
        // Details - sensor array
        const sensorGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const sensorMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            emissive: 0xff0000
        });
        const sensor = new THREE.Mesh(sensorGeometry, sensorMaterial);
        sensor.position.z = 2.5;
        group.add(sensor);
        
        return group;
    }
    
    createInterceptorShip() {
        const group = new THREE.Group();
        
        // Sleek, fast design
        const bodyGeometry = new THREE.ConeGeometry(0.8, 6, 16, 16);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0xff6600,
            emissive: 0x331100,
            shininess: 100,
            specular: 0xff8844
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.x = -Math.PI / 2;
        body.castShadow = true;
        group.add(body);
        
        // Narrow wings
        const wingGeometry = new THREE.BoxGeometry(6, 0.1, 2, 12, 1, 6);
        const wingMaterial = new THREE.MeshPhongMaterial({
            color: 0xcc5500,
            shininess: 90
        });
        const wings = new THREE.Mesh(wingGeometry, wingMaterial);
        wings.position.z = -1;
        wings.castShadow = true;
        group.add(wings);
        
        // Single large engine
        const engineGeometry = new THREE.CylinderGeometry(0.6, 0.8, 2, 20);
        const engineMaterial = new THREE.MeshPhongMaterial({
            color: 0x333333,
            emissive: 0x111111
        });
        const engine = new THREE.Mesh(engineGeometry, engineMaterial);
        engine.rotation.x = Math.PI / 2;
        engine.position.z = -2.5;
        engine.castShadow = true;
        group.add(engine);
        
        // Large engine glow
        const glowGeometry = new THREE.CylinderGeometry(0.5, 0.7, 1, 20);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff4400,
            transparent: true,
            opacity: 0.9
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.rotation.x = Math.PI / 2;
        glow.position.z = -1;
        engine.add(glow);
        
        return group;
    }
    
    createBomberShip() {
        const group = new THREE.Group();
        
        // Heavy, bulky design
        const bodyGeometry = new THREE.BoxGeometry(3, 2, 6, 16, 12, 24);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x4a4a4a,
            emissive: 0x111111,
            shininess: 60
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        group.add(body);
        
        // Large wings
        const wingGeometry = new THREE.BoxGeometry(12, 0.4, 4, 24, 2, 8);
        const wingMaterial = new THREE.MeshPhongMaterial({
            color: 0x3a3a3a,
            shininess: 50
        });
        const wings = new THREE.Mesh(wingGeometry, wingMaterial);
        wings.position.z = -0.5;
        wings.castShadow = true;
        group.add(wings);
        
        // Multiple engines
        for (let i = 0; i < 4; i++) {
            const engineGeometry = new THREE.CylinderGeometry(0.4, 0.5, 2, 16);
            const engineMaterial = new THREE.MeshPhongMaterial({
                color: 0x444444,
                emissive: 0x222222
            });
            const engine = new THREE.Mesh(engineGeometry, engineMaterial);
            engine.rotation.x = Math.PI / 2;
            engine.position.x = i < 2 ? -3 : 3;
            engine.position.y = i % 2 === 0 ? 0.5 : -0.5;
            engine.position.z = -3;
            engine.castShadow = true;
            group.add(engine);
            
            // Engine glow
            const glowGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.5, 16);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0x0088ff,
                transparent: true,
                opacity: 0.8
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.rotation.x = Math.PI / 2;
            glow.position.z = -1;
            engine.add(glow);
        }
        
        // Bomb bay
        const bayGeometry = new THREE.BoxGeometry(2, 1, 4, 8, 6, 12);
        const bayMaterial = new THREE.MeshPhongMaterial({
            color: 0x222222,
            emissive: 0x0a0a0a
        });
        const bay = new THREE.Mesh(bayGeometry, bayMaterial);
        bay.position.y = -1.5;
        bay.castShadow = true;
        group.add(bay);
        
        return group;
    }
    
    // Enemy ship models
    createEnemyShip(type = 'basic') {
        const cacheKey = `enemy_${type}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey).clone();
        }
        
        let ship;
        switch (type) {
            case 'basic':
                ship = this.createBasicEnemy();
                break;
            case 'heavy':
                ship = this.createHeavyEnemy();
                break;
            case 'scout':
                ship = this.createScoutEnemy();
                break;
            case 'boss':
                ship = this.createBossEnemy();
                break;
            default:
                ship = this.createBasicEnemy();
        }
        
        this.cache.set(cacheKey, ship);
        return ship.clone();
    }
    
    createBasicEnemy() {
        const group = new THREE.Group();
        
        // Angular, aggressive design
        const bodyGeometry = new THREE.TetrahedronGeometry(1.5, 2);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0xaa0000,
            emissive: 0x330000,
            shininess: 70,
            flatShading: true
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        group.add(body);
        
        // Wings
        for (let i = 0; i < 2; i++) {
            const wingGeometry = new THREE.BoxGeometry(4, 0.2, 1.5, 8, 1, 4);
            const wingMaterial = new THREE.MeshPhongMaterial({
                color: 0x880000,
                flatShading: true
            });
            const wing = new THREE.Mesh(wingGeometry, wingMaterial);
            wing.position.y = i === 0 ? 0.5 : -0.5;
            wing.position.z = -0.5;
            wing.castShadow = true;
            group.add(wing);
        }
        
        // Engine
        const engineGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1, 12);
        const engineMaterial = new THREE.MeshPhongMaterial({
            color: 0x333333
        });
        const engine = new THREE.Mesh(engineGeometry, engineMaterial);
        engine.rotation.x = Math.PI / 2;
        engine.position.z = -1.5;
        engine.castShadow = true;
        group.add(engine);
        
        // Red engine glow
        const glowGeometry = new THREE.CylinderGeometry(0.25, 0.35, 0.3, 12);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.9
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.rotation.x = Math.PI / 2;
        glow.position.z = -0.6;
        engine.add(glow);
        
        return group;
    }
    
    createHeavyEnemy() {
        const group = new THREE.Group();
        
        // Large, intimidating design
        const bodyGeometry = new THREE.DodecahedronGeometry(2, 1);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x660000,
            emissive: 0x220000,
            shininess: 60,
            flatShading: true
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        group.add(body);
        
        // Armor plates
        for (let i = 0; i < 4; i++) {
            const plateGeometry = new THREE.BoxGeometry(1.5, 2, 0.3, 6, 8, 1);
            const plateMaterial = new THREE.MeshPhongMaterial({
                color: 0x440000,
                metalness: 0.8
            });
            const plate = new THREE.Mesh(plateGeometry, plateMaterial);
            plate.rotation.y = (Math.PI / 2) * i;
            plate.position.z = 1;
            plate.castShadow = true;
            body.add(plate);
        }
        
        // Multiple engines
        for (let i = 0; i < 3; i++) {
            const angle = (Math.PI * 2 / 3) * i;
            const engineGeometry = new THREE.CylinderGeometry(0.4, 0.5, 1.5, 12);
            const engineMaterial = new THREE.MeshPhongMaterial({
                color: 0x333333
            });
            const engine = new THREE.Mesh(engineGeometry, engineMaterial);
            engine.rotation.x = Math.PI / 2;
            engine.position.x = Math.cos(angle) * 1.5;
            engine.position.y = Math.sin(angle) * 1.5;
            engine.position.z = -2;
            engine.castShadow = true;
            group.add(engine);
        }
        
        return group;
    }
    
    createScoutEnemy() {
        const group = new THREE.Group();
        
        // Small, fast design
        const bodyGeometry = new THREE.OctahedronGeometry(0.8, 2);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0xffaa00,
            emissive: 0x442200,
            shininess: 90
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.z = Math.PI / 4;
        body.castShadow = true;
        group.add(body);
        
        // Small wings
        const wingGeometry = new THREE.BoxGeometry(3, 0.1, 1, 6, 1, 2);
        const wingMaterial = new THREE.MeshPhongMaterial({
            color: 0xcc8800
        });
        const wings = new THREE.Mesh(wingGeometry, wingMaterial);
        wings.position.z = -0.3;
        wings.castShadow = true;
        group.add(wings);
        
        return group;
    }
    
    createBossEnemy() {
        const group = new THREE.Group();
        
        // Massive, complex design
        const bodyGeometry = new THREE.IcosahedronGeometry(4, 2);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x330033,
            emissive: 0x110011,
            shininess: 100,
            metalness: 0.9
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        group.add(body);
        
        // Rotating rings
        for (let i = 0; i < 3; i++) {
            const ringGeometry = new THREE.TorusGeometry(5 + i, 0.3, 16, 48);
            const ringMaterial = new THREE.MeshPhongMaterial({
                color: 0x660066,
                emissive: 0x220022,
                transparent: true,
                opacity: 0.7
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2;
            ring.userData.rotationSpeed = 0.001 * (i + 1);
            ring.castShadow = true;
            group.add(ring);
        }
        
        // Weapon turrets
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 / 6) * i;
            const turretGeometry = new THREE.CylinderGeometry(0.5, 0.7, 1.5, 12);
            const turretMaterial = new THREE.MeshPhongMaterial({
                color: 0x440044
            });
            const turret = new THREE.Mesh(turretGeometry, turretMaterial);
            turret.position.x = Math.cos(angle) * 4;
            turret.position.y = Math.sin(angle) * 4;
            turret.castShadow = true;
            group.add(turret);
        }
        
        // Central core with pulsing light
        const coreGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const coreMaterial = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.8
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        group.add(core);
        
        const coreLight = new THREE.PointLight(0xff00ff, 2, 50);
        group.add(coreLight);
        
        return group;
    }
    
    // Projectile models
    createProjectile(type = 'laser') {
        switch (type) {
            case 'laser':
                return this.createLaserBolt();
            case 'missile':
                return this.createMissile();
            case 'plasma':
                return this.createPlasma();
            default:
                return this.createLaserBolt();
        }
    }
    
    createLaserBolt() {
        const geometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.9
        });
        const bolt = new THREE.Mesh(geometry, material);
        bolt.rotation.x = Math.PI / 2;
        
        // Add glow
        const glowGeometry = new THREE.CylinderGeometry(0.15, 0.15, 2.5, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.4
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.rotation.x = Math.PI / 2;
        bolt.add(glow);
        
        // Add point light
        const light = new THREE.PointLight(0x00ffff, 1, 10);
        bolt.add(light);
        
        return bolt;
    }
    
    createMissile() {
        const group = new THREE.Group();
        
        const bodyGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 12);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x666666,
            shininess: 60
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.x = Math.PI / 2;
        group.add(body);
        
        // Fins
        for (let i = 0; i < 4; i++) {
            const finGeometry = new THREE.BoxGeometry(0.4, 0.05, 0.4, 2, 1, 2);
            const finMaterial = new THREE.MeshPhongMaterial({
                color: 0x444444
            });
            const fin = new THREE.Mesh(finGeometry, finMaterial);
            fin.rotation.y = (Math.PI / 2) * i;
            fin.position.z = -0.5;
            group.add(fin);
        }
        
        // Exhaust glow
        const exhaustGeometry = new THREE.CylinderGeometry(0.1, 0.15, 0.3, 8);
        const exhaustMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 0.9
        });
        const exhaust = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
        exhaust.rotation.x = Math.PI / 2;
        exhaust.position.z = -0.9;
        group.add(exhaust);
        
        return group;
    }
    
    createPlasma() {
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.8
        });
        const plasma = new THREE.Mesh(geometry, material);
        
        // Outer glow
        const glowGeometry = new THREE.SphereGeometry(0.4, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        plasma.add(glow);
        
        // Point light
        const light = new THREE.PointLight(0xff00ff, 1.5, 15);
        plasma.add(light);
        
        return plasma;
    }
    
    // Explosion effects
    createExplosion(size = 1) {
        const group = new THREE.Group();
        const particleCount = Math.floor(20 * size);
        
        for (let i = 0; i < particleCount; i++) {
            const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.2 * size, 8, 8);
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color(
                    1,
                    Math.random() * 0.5,
                    0
                ),
                transparent: true,
                opacity: 1
            });
            const particle = new THREE.Mesh(geometry, material);
            
            // Random direction
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const speed = 0.5 + Math.random() * 1.5;
            
            particle.userData.velocity = new THREE.Vector3(
                Math.sin(phi) * Math.cos(theta) * speed,
                Math.sin(phi) * Math.sin(theta) * speed,
                Math.cos(phi) * speed
            );
            particle.userData.life = 1;
            particle.userData.decay = 0.02;
            
            group.add(particle);
        }
        
        // Central flash
        const flashGeometry = new THREE.SphereGeometry(size, 16, 16);
        const flashMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00,
            transparent: true,
            opacity: 1
        });
        const flash = new THREE.Mesh(flashGeometry, flashMaterial);
        flash.userData.life = 1;
        flash.userData.decay = 0.05;
        group.add(flash);
        
        return group;
    }
    
    // Power-up models
    createPowerUp(type) {
        const group = new THREE.Group();
        
        const colors = {
            health: 0x00ff00,
            shield: 0x00ffff,
            weapon: 0xffff00,
            speed: 0xff00ff
        };
        
        const color = colors[type] || 0xffffff;
        
        // Main crystal
        const geometry = new THREE.OctahedronGeometry(0.5, 1);
        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.8,
            shininess: 100
        });
        const crystal = new THREE.Mesh(geometry, material);
        crystal.castShadow = true;
        group.add(crystal);
        
        // Rotating ring
        const ringGeometry = new THREE.TorusGeometry(0.7, 0.1, 16, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.6
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        group.add(ring);
        
        // Point light
        const light = new THREE.PointLight(color, 1, 20);
        group.add(light);
        
        group.userData.rotationSpeed = 0.02;
        
        return group;
    }
    
    // Debris
    createDebris() {
        const geometries = [
            new THREE.BoxGeometry(0.5, 0.5, 0.5, 2, 2, 2),
            new THREE.TetrahedronGeometry(0.3, 0),
            new THREE.OctahedronGeometry(0.3, 0)
        ];
        
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshPhongMaterial({
            color: 0x444444,
            flatShading: true
        });
        const debris = new THREE.Mesh(geometry, material);
        debris.castShadow = true;
        
        return debris;
    }
    
    clearCache() {
        this.cache.clear();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModelFactory;
}
