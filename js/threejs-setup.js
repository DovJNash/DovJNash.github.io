/* ============================================
   THREE.JS SETUP & RENDERING SYSTEM
   AAA 3D Space Combat Simulator
   ============================================ */

class ThreeJSSetup {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.composer = null;
        this.controls = null;
        
        // Post-processing passes
        this.bloomPass = null;
        this.filmPass = null;
        this.ssaoPass = null;
        this.unrealBloomPass = null;
        
        // Environment
        this.starField = null;
        this.nebula = null;
        this.planets = [];
        
        // Lighting
        this.lights = {
            ambient: null,
            directional: [],
            point: []
        };
        
        // Performance
        this.renderQuality = 'high';
        this.pixelRatio = window.devicePixelRatio;
        
        // Camera shake
        this.cameraShake = {
            intensity: 0,
            decay: 0.9
        };
    }
    
    init(container) {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00025);
        
        // Setup camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            10000
        );
        this.camera.position.set(0, 5, 20);
        this.camera.lookAt(0, 0, 0);
        
        // Create renderer with advanced settings
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        
        container.appendChild(this.renderer.domElement);
        
        // Setup post-processing
        this.setupPostProcessing();
        
        // Setup lighting
        this.setupLighting();
        
        // Create star field
        this.createStarField();
        
        // Create space environment
        this.createSpaceEnvironment();
        
        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
        
        return this;
    }
    
    setupPostProcessing() {
        // Create composer for post-processing
        this.composer = new THREE.EffectComposer(this.renderer);
        
        // Render pass
        const renderPass = new THREE.RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
        
        // Unreal Bloom Pass for glowing effects
        this.unrealBloomPass = new THREE.UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5,  // strength
            0.4,  // radius
            0.85  // threshold
        );
        this.composer.addPass(this.unrealBloomPass);
        
        // SSAO Pass for ambient occlusion
        this.ssaoPass = new THREE.SSAOPass(
            this.scene,
            this.camera,
            window.innerWidth,
            window.innerHeight
        );
        this.ssaoPass.kernelRadius = 16;
        this.composer.addPass(this.ssaoPass);
        
        // Film grain and vignette
        this.filmPass = new THREE.FilmPass(0.35, 0.025, 648, false);
        this.composer.addPass(this.filmPass);
        
        // Motion blur
        const motionBlurPass = new THREE.ShaderPass({
            uniforms: {
                tDiffuse: { value: null },
                velocityFactor: { value: 0.5 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float velocityFactor;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    vec4 blur = vec4(0.0);
                    for(int i = 0; i < 5; i++) {
                        float offset = float(i) * 0.02;
                        blur += texture2D(tDiffuse, vUv + vec2(offset * velocityFactor, 0.0));
                        blur += texture2D(tDiffuse, vUv - vec2(offset * velocityFactor, 0.0));
                    }
                    gl_FragColor = mix(color, blur / 10.0, 0.3);
                }
            `
        });
        this.composer.addPass(motionBlurPass);
        
        // Lens flare effect
        const lensFlarePass = new THREE.ShaderPass({
            uniforms: {
                tDiffuse: { value: null },
                intensity: { value: 0.5 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float intensity;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    vec2 center = vec2(0.5, 0.5);
                    float dist = length(vUv - center);
                    float flare = pow(1.0 - dist, 3.0) * intensity;
                    vec3 flareColor = vec3(0.5, 0.7, 1.0) * flare;
                    gl_FragColor = vec4(color.rgb + flareColor, color.a);
                }
            `
        });
        this.composer.addPass(lensFlarePass);
        
        // HDR tone mapping
        const hdrPass = new THREE.ShaderPass({
            uniforms: {
                tDiffuse: { value: null },
                exposure: { value: 1.0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float exposure;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    vec3 hdr = vec3(1.0) - exp(-color.rgb * exposure);
                    gl_FragColor = vec4(hdr, color.a);
                }
            `
        });
        this.composer.addPass(hdrPass);
        
        // Output pass
        const outputPass = new THREE.OutputPass();
        this.composer.addPass(outputPass);
    }
    
    setupLighting() {
        // Ambient light
        this.lights.ambient = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(this.lights.ambient);
        
        // Main directional light (sun)
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
        sunLight.position.set(100, 100, 50);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 500;
        this.lights.directional.push(sunLight);
        this.scene.add(sunLight);
        
        // Secondary directional light (rim light)
        const rimLight = new THREE.DirectionalLight(0x4444ff, 0.5);
        rimLight.position.set(-50, 50, -50);
        this.lights.directional.push(rimLight);
        this.scene.add(rimLight);
        
        // Point lights for dynamic lighting
        for (let i = 0; i < 3; i++) {
            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
                Math.random() * 200 - 100
            );
            this.lights.point.push(pointLight);
            this.scene.add(pointLight);
        }
    }
    
    createStarField() {
        const starCount = 10000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);
        
        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            
            // Random position in a large sphere
            const radius = 1000 + Math.random() * 4000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
            
            // Random color (mostly white, some colored)
            const colorType = Math.random();
            if (colorType < 0.7) {
                // White stars
                colors[i3] = colors[i3 + 1] = colors[i3 + 2] = 1;
            } else if (colorType < 0.85) {
                // Blue stars
                colors[i3] = 0.7;
                colors[i3 + 1] = 0.8;
                colors[i3 + 2] = 1;
            } else {
                // Red/orange stars
                colors[i3] = 1;
                colors[i3 + 1] = 0.6;
                colors[i3 + 2] = 0.4;
            }
            
            // Random size
            sizes[i] = Math.random() * 2 + 0.5;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const material = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });
        
        this.starField = new THREE.Points(geometry, material);
        this.scene.add(this.starField);
    }
    
    createSpaceEnvironment() {
        // Create nebula effect
        const nebulaGeometry = new THREE.PlaneGeometry(5000, 5000);
        const nebulaMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color1: { value: new THREE.Color(0x0a0a2e) },
                color2: { value: new THREE.Color(0x4a0a4e) }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color1;
                uniform vec3 color2;
                varying vec2 vUv;
                
                float noise(vec2 p) {
                    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
                }
                
                void main() {
                    vec2 uv = vUv * 3.0;
                    float n = noise(uv + time * 0.0001);
                    vec3 color = mix(color1, color2, n);
                    gl_FragColor = vec4(color, 0.3);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        
        this.nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
        this.nebula.position.z = -1000;
        this.scene.add(this.nebula);
        
        // Create distant planets
        this.createPlanets();
    }
    
    createPlanets() {
        const planetData = [
            { radius: 50, color: 0xff6347, distance: 800, speed: 0.001 },
            { radius: 70, color: 0x4169e1, distance: 1200, speed: 0.0007 },
            { radius: 40, color: 0x32cd32, distance: 600, speed: 0.0015 }
        ];
        
        planetData.forEach(data => {
            const geometry = new THREE.SphereGeometry(data.radius, 64, 64);
            const material = new THREE.MeshPhongMaterial({
                color: data.color,
                emissive: data.color,
                emissiveIntensity: 0.2,
                shininess: 30
            });
            
            const planet = new THREE.Mesh(geometry, material);
            planet.position.set(
                Math.random() * data.distance - data.distance / 2,
                Math.random() * data.distance - data.distance / 2,
                -data.distance
            );
            planet.userData = { speed: data.speed };
            
            this.planets.push(planet);
            this.scene.add(planet);
        });
    }
    
    update(deltaTime) {
        // Rotate star field slowly
        if (this.starField) {
            this.starField.rotation.y += 0.00005;
        }
        
        // Animate planets
        this.planets.forEach(planet => {
            planet.rotation.y += planet.userData.speed;
        });
        
        // Update nebula animation
        if (this.nebula && this.nebula.material.uniforms) {
            this.nebula.material.uniforms.time.value += deltaTime;
        }
        
        // Apply camera shake
        if (this.cameraShake.intensity > 0.01) {
            const shakeX = (Math.random() - 0.5) * this.cameraShake.intensity;
            const shakeY = (Math.random() - 0.5) * this.cameraShake.intensity;
            const shakeZ = (Math.random() - 0.5) * this.cameraShake.intensity;
            
            this.camera.position.x += shakeX;
            this.camera.position.y += shakeY;
            this.camera.position.z += shakeZ;
            
            this.cameraShake.intensity *= this.cameraShake.decay;
        }
    }
    
    render() {
        if (this.composer) {
            this.composer.render();
        } else {
            this.renderer.render(this.scene, this.camera);
        }
    }
    
    addCameraShake(intensity) {
        this.cameraShake.intensity = Math.max(this.cameraShake.intensity, intensity);
    }
    
    setRenderQuality(quality) {
        this.renderQuality = quality;
        
        const settings = {
            low: { pixelRatio: 0.5, shadows: false, bloom: false, ssao: false },
            medium: { pixelRatio: 1, shadows: true, bloom: false, ssao: false },
            high: { pixelRatio: 1.5, shadows: true, bloom: true, ssao: true },
            ultra: { pixelRatio: 2, shadows: true, bloom: true, ssao: true }
        };
        
        const config = settings[quality] || settings.high;
        
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, config.pixelRatio));
        this.renderer.shadowMap.enabled = config.shadows;
        
        if (this.unrealBloomPass) {
            this.unrealBloomPass.enabled = config.bloom;
        }
        if (this.ssaoPass) {
            this.ssaoPass.enabled = config.ssao;
        }
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        if (this.composer) {
            this.composer.setSize(window.innerWidth, window.innerHeight);
        }
    }
    
    dispose() {
        // Clean up resources
        this.scene.traverse(object => {
            if (object.geometry) {
                object.geometry.dispose();
            }
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(material => material.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
        
        this.renderer.dispose();
        if (this.composer) {
            this.composer.dispose();
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThreeJSSetup;
}
