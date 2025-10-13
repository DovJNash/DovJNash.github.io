/* ============================================
   UI/HUD SYSTEM
   Professional interface management
   ============================================ */

class UISystem {
    constructor() {
        this.elements = {};
        this.notifications = [];
        this.cinematicMode = false;
    }
    
    init() {
        this.createHUD();
        this.createMenus();
        this.createNotificationSystem();
        this.setupEventListeners();
    }
    
    createHUD() {
        // Create HUD container
        const hud = document.createElement('div');
        hud.id = 'hud';
        hud.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100;';
        document.body.appendChild(hud);
        
        // Crosshair
        this.elements.crosshair = this.createCrosshair();
        hud.appendChild(this.elements.crosshair);
        
        // Health bar
        this.elements.healthBar = this.createHealthBar();
        hud.appendChild(this.elements.healthBar);
        
        // Shield bar
        this.elements.shieldBar = this.createShieldBar();
        hud.appendChild(this.elements.shieldBar);
        
        // Weapon status
        this.elements.weaponStatus = this.createWeaponStatus();
        hud.appendChild(this.elements.weaponStatus);
        
        // Radar
        this.elements.radar = this.createRadar();
        hud.appendChild(this.elements.radar);
        
        // Target info
        this.elements.targetInfo = this.createTargetInfo();
        hud.appendChild(this.elements.targetInfo);
        
        // Score display
        this.elements.scoreDisplay = this.createScoreDisplay();
        hud.appendChild(this.elements.scoreDisplay);
        
        // Combo display
        this.elements.comboDisplay = this.createComboDisplay();
        hud.appendChild(this.elements.comboDisplay);
        
        // Speedometer
        this.elements.speedometer = this.createSpeedometer();
        hud.appendChild(this.elements.speedometer);
    }
    
    createCrosshair() {
        const crosshair = document.createElement('div');
        crosshair.id = 'crosshair';
        crosshair.innerHTML = `
            <div class="crosshair-line crosshair-horizontal"></div>
            <div class="crosshair-line crosshair-vertical"></div>
            <div class="crosshair-corner crosshair-tl"></div>
            <div class="crosshair-corner crosshair-tr"></div>
            <div class="crosshair-corner crosshair-bl"></div>
            <div class="crosshair-corner crosshair-br"></div>
        `;
        return crosshair;
    }
    
    createHealthBar() {
        const container = document.createElement('div');
        container.id = 'healthBar';
        container.innerHTML = '<div id="healthFill"></div>';
        return container;
    }
    
    createShieldBar() {
        const container = document.createElement('div');
        container.id = 'shieldBar';
        container.innerHTML = '<div id="shieldFill"></div>';
        return container;
    }
    
    createWeaponStatus() {
        const container = document.createElement('div');
        container.id = 'weaponStatus';
        return container;
    }
    
    createRadar() {
        const radar = document.createElement('canvas');
        radar.id = 'radarDisplay';
        radar.width = 200;
        radar.height = 200;
        this.radarCtx = radar.getContext('2d');
        return radar;
    }
    
    createTargetInfo() {
        const container = document.createElement('div');
        container.id = 'targetInfo';
        container.style.display = 'none';
        return container;
    }
    
    createScoreDisplay() {
        const score = document.createElement('div');
        score.id = 'scoreDisplay';
        score.textContent = 'SCORE: 0';
        return score;
    }
    
    createComboDisplay() {
        const combo = document.createElement('div');
        combo.id = 'comboDisplay';
        combo.style.display = 'none';
        return combo;
    }
    
    createSpeedometer() {
        const speed = document.createElement('div');
        speed.id = 'speedometer';
        speed.textContent = '0 m/s';
        return speed;
    }
    
    createMenus() {
        // Main menu
        this.elements.mainMenu = this.createMainMenu();
        document.body.appendChild(this.elements.mainMenu);
        
        // Pause menu
        this.elements.pauseMenu = this.createPauseMenu();
        document.body.appendChild(this.elements.pauseMenu);
        
        // Settings menu
        this.elements.settingsMenu = this.createSettingsMenu();
        document.body.appendChild(this.elements.settingsMenu);
        
        // Campaign menu
        this.elements.campaignMenu = this.createCampaignMenu();
        document.body.appendChild(this.elements.campaignMenu);
        
        // Customization menu
        this.elements.customizationMenu = this.createCustomizationMenu();
        document.body.appendChild(this.elements.customizationMenu);
    }
    
    createMainMenu() {
        const menu = document.createElement('div');
        menu.className = 'menu';
        menu.id = 'mainMenu';
        menu.innerHTML = `
            <h1 class="menu-title">GALACTIC DEFENDER</h1>
            <div class="menu-container">
                <button class="menu-button" data-action="startCampaign">CAMPAIGN</button>
                <button class="menu-button" data-action="quickBattle">QUICK BATTLE</button>
                <button class="menu-button" data-action="customization">CUSTOMIZE SHIP</button>
                <button class="menu-button" data-action="settings">SETTINGS</button>
                <button class="menu-button" data-action="credits">CREDITS</button>
            </div>
        `;
        return menu;
    }
    
    createPauseMenu() {
        const menu = document.createElement('div');
        menu.className = 'menu';
        menu.id = 'pauseMenu';
        menu.style.display = 'none';
        menu.innerHTML = `
            <h1 class="menu-title">PAUSED</h1>
            <div class="menu-container">
                <button class="menu-button" data-action="resume">RESUME</button>
                <button class="menu-button" data-action="settings">SETTINGS</button>
                <button class="menu-button" data-action="restart">RESTART MISSION</button>
                <button class="menu-button" data-action="mainMenu">MAIN MENU</button>
            </div>
        `;
        return menu;
    }
    
    createSettingsMenu() {
        const menu = document.createElement('div');
        menu.className = 'menu';
        menu.id = 'settingsMenu';
        menu.style.display = 'none';
        menu.innerHTML = `
            <h1 class="menu-title">SETTINGS</h1>
            <div class="menu-container">
                <div class="settings-section">
                    <h3>Graphics Quality</h3>
                    <div class="setting-control">
                        <button class="quality-preset" data-quality="low">Low</button>
                        <button class="quality-preset" data-quality="medium">Medium</button>
                        <button class="quality-preset active" data-quality="high">High</button>
                        <button class="quality-preset" data-quality="ultra">Ultra</button>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>Graphics Options</h3>
                    <div class="setting-item">
                        <span class="setting-label">Bloom Effect</span>
                        <div class="setting-control">
                            <input type="checkbox" id="bloomToggle" checked>
                        </div>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">Motion Blur</span>
                        <div class="setting-control">
                            <input type="checkbox" id="motionBlurToggle" checked>
                        </div>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">Shadows</span>
                        <div class="setting-control">
                            <input type="checkbox" id="shadowsToggle" checked>
                        </div>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">Anti-Aliasing</span>
                        <div class="setting-control">
                            <input type="checkbox" id="aaToggle" checked>
                        </div>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>Audio</h3>
                    <div class="setting-item">
                        <span class="setting-label">Master Volume</span>
                        <div class="setting-control">
                            <input type="range" class="setting-slider" id="masterVolume" min="0" max="100" value="100">
                            <span class="setting-value">100%</span>
                        </div>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">Music Volume</span>
                        <div class="setting-control">
                            <input type="range" class="setting-slider" id="musicVolume" min="0" max="100" value="70">
                            <span class="setting-value">70%</span>
                        </div>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">SFX Volume</span>
                        <div class="setting-control">
                            <input type="range" class="setting-slider" id="sfxVolume" min="0" max="100" value="80">
                            <span class="setting-value">80%</span>
                        </div>
                    </div>
                </div>
                
                <button class="menu-button" data-action="back">BACK</button>
            </div>
        `;
        return menu;
    }
    
    createCampaignMenu() {
        const menu = document.createElement('div');
        menu.className = 'menu';
        menu.id = 'campaignMenu';
        menu.style.display = 'none';
        menu.innerHTML = `
            <h1 class="menu-title">CAMPAIGN</h1>
            <div class="menu-container">
                <div class="mission-list">
                    <div class="mission-item" data-mission="1">
                        <div class="mission-name">Mission 1: First Contact</div>
                        <div class="mission-description">Your first mission in space. Eliminate enemy scouts.</div>
                        <div class="mission-objectives">• Destroy 10 enemy fighters</div>
                    </div>
                    <div class="mission-item" data-mission="2">
                        <div class="mission-name">Mission 2: Defend the Fleet</div>
                        <div class="mission-description">Protect allied capital ships from enemy bombers.</div>
                        <div class="mission-objectives">• Protect 3 capital ships • Survive for 5 minutes</div>
                    </div>
                    <div class="mission-item" data-mission="3">
                        <div class="mission-name">Mission 3: Strike Force</div>
                        <div class="mission-description">Lead a squadron to destroy enemy installations.</div>
                        <div class="mission-objectives">• Destroy 3 enemy stations • Lead your squadron</div>
                    </div>
                    <div class="mission-item" data-mission="4">
                        <div class="mission-name">Mission 4: The Gauntlet</div>
                        <div class="mission-description">Navigate through an enemy blockade.</div>
                        <div class="mission-objectives">• Reach the waypoint • Minimize casualties</div>
                    </div>
                    <div class="mission-item" data-mission="5">
                        <div class="mission-name">Mission 5: Final Assault</div>
                        <div class="mission-description">Face the enemy flagship in an epic battle.</div>
                        <div class="mission-objectives">• Destroy the flagship • Survive</div>
                    </div>
                </div>
                <button class="menu-button" data-action="back">BACK</button>
            </div>
        `;
        return menu;
    }
    
    createCustomizationMenu() {
        const menu = document.createElement('div');
        menu.className = 'menu';
        menu.id = 'customizationMenu';
        menu.style.display = 'none';
        menu.innerHTML = `
            <h1 class="menu-title">CUSTOMIZE SHIP</h1>
            <div class="menu-container">
                <div class="settings-section">
                    <h3>Ship Model</h3>
                    <div class="customization-grid">
                        <div class="ship-option" data-ship="fighter">
                            <div class="ship-preview"></div>
                            <div class="ship-name">Fighter</div>
                            <div class="ship-stats">Speed: ★★★★☆ | Armor: ★★☆☆☆</div>
                        </div>
                        <div class="ship-option" data-ship="interceptor">
                            <div class="ship-preview"></div>
                            <div class="ship-name">Interceptor</div>
                            <div class="ship-stats">Speed: ★★★★★ | Armor: ★☆☆☆☆</div>
                        </div>
                        <div class="ship-option" data-ship="bomber">
                            <div class="ship-preview"></div>
                            <div class="ship-name">Bomber</div>
                            <div class="ship-stats">Speed: ★★☆☆☆ | Armor: ★★★★☆</div>
                        </div>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>Primary Color</h3>
                    <div class="color-picker">
                        <div class="color-swatch" style="background:#2a52be" data-color="#2a52be"></div>
                        <div class="color-swatch" style="background:#ff6600" data-color="#ff6600"></div>
                        <div class="color-swatch" style="background:#00ff00" data-color="#00ff00"></div>
                        <div class="color-swatch" style="background:#ff00ff" data-color="#ff00ff"></div>
                        <div class="color-swatch" style="background:#ffff00" data-color="#ffff00"></div>
                        <div class="color-swatch" style="background:#00ffff" data-color="#00ffff"></div>
                        <div class="color-swatch" style="background:#ffffff" data-color="#ffffff"></div>
                        <div class="color-swatch" style="background:#000000" data-color="#000000"></div>
                    </div>
                </div>
                
                <button class="menu-button" data-action="back">BACK</button>
            </div>
        `;
        return menu;
    }
    
    createNotificationSystem() {
        const container = document.createElement('div');
        container.id = 'notifications';
        document.body.appendChild(container);
        this.elements.notifications = container;
    }
    
    setupEventListeners() {
        // Menu button clicks
        document.addEventListener('click', (e) => {
            const button = e.target.closest('.menu-button, .quality-preset, .mission-item, .ship-option, .color-swatch');
            if (!button) return;
            
            const action = button.dataset.action;
            const mission = button.dataset.mission;
            const quality = button.dataset.quality;
            const ship = button.dataset.ship;
            const color = button.dataset.color;
            
            if (action && this.onMenuAction) {
                this.onMenuAction(action);
            }
            if (mission && this.onMissionSelect) {
                this.onMissionSelect(parseInt(mission));
            }
            if (quality && this.onQualityChange) {
                this.onQualityChange(quality);
                // Update active state
                document.querySelectorAll('.quality-preset').forEach(b => b.classList.remove('active'));
                button.classList.add('active');
            }
            if (ship && this.onShipSelect) {
                this.onShipSelect(ship);
            }
            if (color && this.onColorSelect) {
                this.onColorSelect(color);
            }
        });
        
        // Volume sliders
        document.addEventListener('input', (e) => {
            if (e.target.classList.contains('setting-slider')) {
                const value = e.target.value;
                const label = e.target.nextElementSibling;
                if (label) {
                    label.textContent = value + '%';
                }
                
                if (this.onVolumeChange) {
                    this.onVolumeChange(e.target.id, value / 100);
                }
            }
        });
        
        // Checkbox toggles
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && this.onSettingToggle) {
                this.onSettingToggle(e.target.id, e.target.checked);
            }
        });
    }
    
    // HUD updates
    updateHealth(current, max) {
        const percent = (current / max) * 100;
        const fill = document.getElementById('healthFill');
        if (fill) {
            fill.style.width = percent + '%';
        }
    }
    
    updateShield(current, max) {
        const percent = (current / max) * 100;
        const fill = document.getElementById('shieldFill');
        if (fill) {
            fill.style.width = percent + '%';
        }
    }
    
    updateWeaponStatus(loadout) {
        if (!this.elements.weaponStatus) return;
        
        const weapons = [
            { name: 'Primary', weapon: loadout.primary },
            { name: 'Secondary', weapon: loadout.secondary }
        ];
        
        if (loadout.special) {
            weapons.push({ name: 'Special', weapon: loadout.special });
        }
        
        let html = '';
        weapons.forEach(({ name, weapon }) => {
            const heatPercent = (weapon.heat / weapon.maxHeat) * 100;
            const ammoText = weapon.ammo === Infinity ? '∞' : weapon.ammo;
            const active = loadout.currentWeapon === name.toLowerCase() ? ' (ACTIVE)' : '';
            
            html += `
                <div class="weapon-item">
                    <div class="weapon-name">${weapon.name}${active}</div>
                    <div class="weapon-ammo">Ammo: ${ammoText}</div>
                    <div class="weapon-heat-bar">
                        <div class="weapon-heat-fill" style="width:${heatPercent}%"></div>
                    </div>
                </div>
            `;
        });
        
        this.elements.weaponStatus.innerHTML = html;
    }
    
    updateRadar(player, enemies, radius = 100) {
        if (!this.radarCtx) return;
        
        const ctx = this.radarCtx;
        const size = 200;
        const center = size / 2;
        
        // Clear
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, size, size);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(center, center, center * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(center, 0);
        ctx.lineTo(center, size);
        ctx.moveTo(0, center);
        ctx.lineTo(size, center);
        ctx.stroke();
        
        // Draw player
        ctx.fillStyle = '#00FF00';
        ctx.beginPath();
        ctx.arc(center, center, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw enemies
        ctx.fillStyle = '#FF0000';
        enemies.forEach(enemy => {
            if (!enemy.mesh) return;
            
            const dx = enemy.mesh.position.x - player.position.x;
            const dz = enemy.mesh.position.z - player.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < radius) {
                const scale = (center - 5) / radius;
                const x = center + dx * scale;
                const y = center + dz * scale;
                
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }
    
    updateTargetInfo(target) {
        if (!target) {
            this.elements.targetInfo.style.display = 'none';
            return;
        }
        
        this.elements.targetInfo.style.display = 'block';
        const healthPercent = (target.health / target.maxHealth) * 100;
        
        this.elements.targetInfo.innerHTML = `
            <div class="target-name">${target.type} - LOCKED</div>
            <div class="target-health-bar">
                <div class="target-health-fill" style="width:${healthPercent}%"></div>
            </div>
            <div class="target-distance">Distance: ${Math.floor(target.distance)}m</div>
        `;
    }
    
    updateScore(score) {
        if (this.elements.scoreDisplay) {
            this.elements.scoreDisplay.textContent = `SCORE: ${score}`;
        }
    }
    
    updateCombo(combo) {
        if (!this.elements.comboDisplay) return;
        
        if (combo > 1) {
            this.elements.comboDisplay.style.display = 'block';
            this.elements.comboDisplay.textContent = `COMBO x${combo}!`;
        } else {
            this.elements.comboDisplay.style.display = 'none';
        }
    }
    
    updateSpeed(speed) {
        if (this.elements.speedometer) {
            this.elements.speedometer.textContent = `${Math.floor(speed)} m/s`;
        }
    }
    
    // Notifications
    showNotification(text, type = 'normal', duration = 2000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = text;
        
        this.elements.notifications.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, duration);
    }
    
    // Cinematic mode
    enterCinematicMode(text = '') {
        this.cinematicMode = true;
        
        const overlay = document.createElement('div');
        overlay.id = 'cinematicOverlay';
        overlay.innerHTML = `
            <div class="cinematic-bars cinematic-top"></div>
            <div class="cinematic-bars cinematic-bottom"></div>
            <div class="cinematic-text">${text}</div>
        `;
        overlay.style.display = 'block';
        
        document.body.appendChild(overlay);
        
        // Hide HUD
        if (this.elements.hud) {
            this.elements.hud.style.display = 'none';
        }
    }
    
    exitCinematicMode() {
        this.cinematicMode = false;
        
        const overlay = document.getElementById('cinematicOverlay');
        if (overlay) {
            overlay.remove();
        }
        
        // Show HUD
        if (this.elements.hud) {
            this.elements.hud.style.display = 'block';
        }
    }
    
    // Menu management
    showMenu(menuId) {
        // Hide all menus
        this.hideAllMenus();
        
        // Show requested menu
        const menu = document.getElementById(menuId);
        if (menu) {
            menu.style.display = 'flex';
        }
    }
    
    hideAllMenus() {
        const menus = document.querySelectorAll('.menu');
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
    
    showLoading(text = 'Loading...') {
        let loading = document.getElementById('loadingScreen');
        if (!loading) {
            loading = document.createElement('div');
            loading.id = 'loadingScreen';
            loading.innerHTML = `
                <h1>GALACTIC DEFENDER</h1>
                <div id="loadingBar">
                    <div id="loadingProgress"></div>
                </div>
                <div id="loadingText">${text}</div>
            `;
            document.body.appendChild(loading);
        }
        loading.style.display = 'flex';
    }
    
    updateLoadingProgress(percent, text = '') {
        const progress = document.getElementById('loadingProgress');
        if (progress) {
            progress.style.width = percent + '%';
        }
        
        if (text) {
            const loadingText = document.getElementById('loadingText');
            if (loadingText) {
                loadingText.textContent = text;
            }
        }
    }
    
    hideLoading() {
        const loading = document.getElementById('loadingScreen');
        if (loading) {
            loading.style.display = 'none';
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UISystem;
}
