/* ============================================
   COMPLETE AUDIO SYSTEM
   Spatial 3D Sound with Volume Controls
   ============================================ */

class AudioSystem {
    constructor() {
        this.context = null;
        this.listener = null;
        this.masterGain = null;
        
        // Volume controls
        this.volumes = {
            master: 1.0,
            music: 0.7,
            sfx: 0.8,
            ambient: 0.5,
            engine: 0.6
        };
        
        // Gain nodes for each category
        this.gainNodes = {
            music: null,
            sfx: null,
            ambient: null,
            engine: null
        };
        
        // Audio buffers
        this.buffers = {};
        
        // Currently playing sounds
        this.activeSounds = new Map();
        
        // Music tracks
        this.currentMusic = null;
        this.musicTracks = {
            menu: 'assets/audio/menu_theme.mp3',
            combat: 'assets/audio/combat_theme.mp3',
            boss: 'assets/audio/boss_theme.mp3',
            victory: 'assets/audio/victory_theme.mp3',
            defeat: 'assets/audio/defeat_theme.mp3'
        };
        
        // Sound effects
        this.sfxLibrary = {
            // Weapons
            laserShot: 'assets/audio/laser_shot.mp3',
            missileShot: 'assets/audio/missile_launch.mp3',
            railgun: 'assets/audio/railgun.mp3',
            plasmaShot: 'assets/audio/plasma_shot.mp3',
            
            // Explosions
            explosionSmall: 'assets/audio/explosion_small.mp3',
            explosionMedium: 'assets/audio/explosion_medium.mp3',
            explosionLarge: 'assets/audio/explosion_large.mp3',
            
            // Ship sounds
            engineLoop: 'assets/audio/engine_loop.mp3',
            boost: 'assets/audio/boost.mp3',
            damage: 'assets/audio/ship_damage.mp3',
            shieldHit: 'assets/audio/shield_hit.mp3',
            shieldDown: 'assets/audio/shield_down.mp3',
            
            // UI sounds
            buttonClick: 'assets/audio/ui_click.mp3',
            buttonHover: 'assets/audio/ui_hover.mp3',
            warning: 'assets/audio/warning.mp3',
            alarm: 'assets/audio/alarm.mp3',
            targetLock: 'assets/audio/target_lock.mp3',
            
            // Power-ups
            powerUp: 'assets/audio/powerup_collect.mp3',
            healthRestore: 'assets/audio/health_restore.mp3',
            
            // Special
            warpJump: 'assets/audio/warp_jump.mp3',
            shockwave: 'assets/audio/shockwave.mp3'
        };
        
        // Ambient loops
        this.ambientLoops = {
            space: 'assets/audio/ambient_space.mp3',
            battle: 'assets/audio/ambient_battle.mp3'
        };
        
        this.initialized = false;
    }
    
    async init() {
        try {
            // Create audio context
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create listener for 3D audio
            this.listener = this.context.listener;
            if (this.listener.positionX) {
                this.listener.positionX.value = 0;
                this.listener.positionY.value = 0;
                this.listener.positionZ.value = 0;
            } else {
                this.listener.setPosition(0, 0, 0);
            }
            
            // Create master gain node
            this.masterGain = this.context.createGain();
            this.masterGain.gain.value = this.volumes.master;
            this.masterGain.connect(this.context.destination);
            
            // Create category gain nodes
            for (let category in this.gainNodes) {
                this.gainNodes[category] = this.context.createGain();
                this.gainNodes[category].gain.value = this.volumes[category];
                this.gainNodes[category].connect(this.masterGain);
            }
            
            // Load all audio files
            await this.loadAllAudio();
            
            this.initialized = true;
            console.log('Audio system initialized successfully');
            
            return true;
        } catch (error) {
            console.error('Failed to initialize audio system:', error);
            return false;
        }
    }
    
    async loadAllAudio() {
        const loadPromises = [];
        
        // Load music tracks
        for (let key in this.musicTracks) {
            loadPromises.push(this.loadAudio(this.musicTracks[key], key));
        }
        
        // Load sound effects
        for (let key in this.sfxLibrary) {
            loadPromises.push(this.loadAudio(this.sfxLibrary[key], key));
        }
        
        // Load ambient loops
        for (let key in this.ambientLoops) {
            loadPromises.push(this.loadAudio(this.ambientLoops[key], key));
        }
        
        await Promise.allSettled(loadPromises);
    }
    
    async loadAudio(url, key) {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
            this.buffers[key] = audioBuffer;
            return audioBuffer;
        } catch (error) {
            // Create a silent buffer as fallback
            console.warn(`Failed to load audio: ${url}`, error);
            const silentBuffer = this.context.createBuffer(1, 1, this.context.sampleRate);
            this.buffers[key] = silentBuffer;
            return silentBuffer;
        }
    }
    
    playSound(soundName, options = {}) {
        if (!this.initialized || !this.buffers[soundName]) {
            return null;
        }
        
        const {
            volume = 1.0,
            loop = false,
            position = null,
            category = 'sfx',
            playbackRate = 1.0,
            fadeIn = 0,
            fadeOut = 0
        } = options;
        
        try {
            // Create source
            const source = this.context.createBufferSource();
            source.buffer = this.buffers[soundName];
            source.loop = loop;
            source.playbackRate.value = playbackRate;
            
            // Create gain node for this sound
            const gainNode = this.context.createGain();
            gainNode.gain.value = fadeIn > 0 ? 0 : volume;
            
            // Apply fade in
            if (fadeIn > 0) {
                gainNode.gain.linearRampToValueAtTime(
                    volume,
                    this.context.currentTime + fadeIn
                );
            }
            
            // Connect nodes
            if (position) {
                // 3D spatial audio
                const panner = this.context.createPanner();
                panner.panningModel = 'HRTF';
                panner.distanceModel = 'inverse';
                panner.refDistance = 1;
                panner.maxDistance = 1000;
                panner.rolloffFactor = 1;
                panner.coneInnerAngle = 360;
                panner.coneOuterAngle = 0;
                panner.coneOuterGain = 0;
                
                if (panner.positionX) {
                    panner.positionX.value = position.x;
                    panner.positionY.value = position.y;
                    panner.positionZ.value = position.z;
                } else {
                    panner.setPosition(position.x, position.y, position.z);
                }
                
                source.connect(gainNode);
                gainNode.connect(panner);
                panner.connect(this.gainNodes[category] || this.masterGain);
                
                // Store panner for position updates
                source.panner = panner;
            } else {
                // Regular 2D audio
                source.connect(gainNode);
                gainNode.connect(this.gainNodes[category] || this.masterGain);
            }
            
            // Store reference
            const soundId = `${soundName}_${Date.now()}_${Math.random()}`;
            this.activeSounds.set(soundId, {
                source,
                gainNode,
                category
            });
            
            // Handle sound end
            source.onended = () => {
                this.activeSounds.delete(soundId);
            };
            
            // Start playback
            source.start(0);
            
            // Apply fade out if specified
            if (fadeOut > 0 && !loop) {
                const duration = source.buffer.duration;
                const fadeOutTime = Math.max(0, duration - fadeOut);
                gainNode.gain.setValueAtTime(volume, this.context.currentTime + fadeOutTime);
                gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + duration);
            }
            
            return {
                id: soundId,
                source,
                gainNode,
                stop: (fadeTime = 0) => this.stopSound(soundId, fadeTime),
                setVolume: (vol) => gainNode.gain.value = vol,
                setPosition: (pos) => {
                    if (source.panner) {
                        if (source.panner.positionX) {
                            source.panner.positionX.value = pos.x;
                            source.panner.positionY.value = pos.y;
                            source.panner.positionZ.value = pos.z;
                        } else {
                            source.panner.setPosition(pos.x, pos.y, pos.z);
                        }
                    }
                }
            };
        } catch (error) {
            console.error('Failed to play sound:', soundName, error);
            return null;
        }
    }
    
    stopSound(soundId, fadeTime = 0) {
        const sound = this.activeSounds.get(soundId);
        if (!sound) return;
        
        if (fadeTime > 0) {
            const currentGain = sound.gainNode.gain.value;
            sound.gainNode.gain.setValueAtTime(currentGain, this.context.currentTime);
            sound.gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + fadeTime);
            
            setTimeout(() => {
                try {
                    sound.source.stop();
                } catch (e) {}
                this.activeSounds.delete(soundId);
            }, fadeTime * 1000);
        } else {
            try {
                sound.source.stop();
            } catch (e) {}
            this.activeSounds.delete(soundId);
        }
    }
    
    playMusic(trackName, fadeTime = 2) {
        if (this.currentMusic) {
            this.stopMusic(fadeTime);
        }
        
        const sound = this.playSound(trackName, {
            loop: true,
            category: 'music',
            volume: this.volumes.music,
            fadeIn: fadeTime
        });
        
        if (sound) {
            this.currentMusic = sound;
        }
        
        return sound;
    }
    
    stopMusic(fadeTime = 2) {
        if (this.currentMusic) {
            this.currentMusic.stop(fadeTime);
            this.currentMusic = null;
        }
    }
    
    playAmbient(ambientName) {
        return this.playSound(ambientName, {
            loop: true,
            category: 'ambient',
            volume: this.volumes.ambient,
            fadeIn: 1
        });
    }
    
    setMasterVolume(volume) {
        this.volumes.master = Math.max(0, Math.min(1, volume));
        this.masterGain.gain.value = this.volumes.master;
    }
    
    setCategoryVolume(category, volume) {
        if (!this.gainNodes[category]) return;
        
        this.volumes[category] = Math.max(0, Math.min(1, volume));
        this.gainNodes[category].gain.value = this.volumes[category];
    }
    
    updateListenerPosition(position, forward, up) {
        if (!this.listener) return;
        
        if (this.listener.positionX) {
            this.listener.positionX.value = position.x;
            this.listener.positionY.value = position.y;
            this.listener.positionZ.value = position.z;
            
            if (forward && up) {
                this.listener.forwardX.value = forward.x;
                this.listener.forwardY.value = forward.y;
                this.listener.forwardZ.value = forward.z;
                this.listener.upX.value = up.x;
                this.listener.upY.value = up.y;
                this.listener.upZ.value = up.z;
            }
        } else {
            this.listener.setPosition(position.x, position.y, position.z);
            if (forward && up) {
                this.listener.setOrientation(
                    forward.x, forward.y, forward.z,
                    up.x, up.y, up.z
                );
            }
        }
    }
    
    stopAllSounds(category = null, fadeTime = 0) {
        this.activeSounds.forEach((sound, id) => {
            if (!category || sound.category === category) {
                this.stopSound(id, fadeTime);
            }
        });
    }
    
    muteCategory(category, muted) {
        if (this.gainNodes[category]) {
            this.gainNodes[category].gain.value = muted ? 0 : this.volumes[category];
        }
    }
    
    resume() {
        if (this.context && this.context.state === 'suspended') {
            this.context.resume();
        }
    }
    
    suspend() {
        if (this.context && this.context.state === 'running') {
            this.context.suspend();
        }
    }
    
    getVolume(category = 'master') {
        return this.volumes[category] || 0;
    }
    
    isPlaying(soundId) {
        return this.activeSounds.has(soundId);
    }
    
    getActiveCount(category = null) {
        if (!category) {
            return this.activeSounds.size;
        }
        
        let count = 0;
        this.activeSounds.forEach(sound => {
            if (sound.category === category) {
                count++;
            }
        });
        return count;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioSystem;
}
