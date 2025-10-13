# Galactic Defender - AAA Space Combat Simulator

A professional-grade 3D space combat simulator built with Three.js featuring advanced graphics, physics, AI, and audio systems.

## 🚀 Features

### Graphics & Rendering
- **Advanced 3D Engine**: Built on Three.js with custom post-processing pipeline
- **Professional Effects**: Bloom, HDR, motion blur, lens flares, SSAO
- **High-Poly Models**: Detailed procedurally generated spacecraft and effects
- **Dynamic Lighting**: Multiple light sources with real-time shadows
- **Particle Systems**: Explosions, debris, and weapon effects
- **Quality Settings**: Low/Medium/High/Ultra presets with individual controls

### Physics Engine
- **Advanced Physics**: Momentum, inertia, and realistic collision dynamics
- **Spatial Optimization**: Efficient collision detection with spatial grid
- **Rigid Body Dynamics**: Full 6DOF movement and rotation
- **Force & Impulse System**: Realistic ship handling and weapon impacts

### AI System
- **Formation Flying**: Multiple formation types (V, line, column, diamond, wall)
- **Advanced Behaviors**: Aggressive, defensive, flanking, evasive, boss patterns
- **Multi-Phase AI**: Dynamic behavior based on health and situation
- **Smart Targeting**: Line-of-sight and range-based engagement

### Weapon Systems
- **Multiple Weapon Types**: 
  - Laser Cannons (rapid fire)
  - Homing Missiles (lock-on targeting)
  - Railgun (high damage, piercing)
  - Plasma Cannon (area of effect)
- **Lock-On System**: Advanced target acquisition and tracking
- **Heat Management**: Overheat and cooldown mechanics
- **Ammo System**: Limited ammunition for balanced gameplay

### Audio System
- **Spatial 3D Audio**: Position-based sound with distance attenuation
- **Category System**: Separate controls for music, SFX, ambient, and engine sounds
- **Dynamic Music**: Context-aware soundtrack (menu, combat, boss, victory)
- **Volume Controls**: Individual sliders for all audio categories

### Campaign Mode
- **5 Story Missions**: Progressive difficulty with unique objectives
- **Multiple Objectives**: Elimination, survival, destruction, navigation, boss battles
- **Cinematic System**: Mission briefings with letterbox effects
- **Progressive Difficulty**: Adaptive enemy waves and challenges

### Ship Customization
- **Multiple Ship Types**: Fighter, Interceptor, Bomber with different stats
- **Color Customization**: 8+ color schemes for personalization
- **Stat Variations**: Speed, armor, and handling differences
- **Weapon Loadouts**: Customizable primary, secondary, and special weapons

### UI/HUD System
- **Professional HUD**: Crosshair, health, shield, weapon status, radar
- **Target Information**: Lock-on display with enemy health and distance
- **Real-time Radar**: 360° enemy detection system
- **Combo System**: Score multipliers for consecutive kills
- **Menu System**: Main menu, pause, settings, campaign, customization

## 📁 File Structure

```
DovJNash.github.io/
├── index.html              # Main entry point
├── css/
│   └── style.css          # All styles
├── js/
│   ├── threejs-setup.js   # 3D scene and rendering
│   ├── audio.js           # Complete audio system
│   ├── physics.js         # Advanced physics engine
│   ├── models.js          # 3D model generation
│   ├── ai.js              # Enemy AI behaviors
│   ├── weapons.js         # Weapon systems
│   ├── ui.js              # UI/HUD system
│   └── game.js            # Core game logic
├── assets/
│   ├── audio/             # Sound files (see assets/audio/README.md)
│   ├── textures/          # Texture files (optional)
│   └── models/            # 3D model files (optional)
└── README.md

## 🎮 Controls

### Keyboard
- **W/S**: Forward/Backward
- **A/D**: Strafe Left/Right
- **Q/E**: Up/Down
- **Space**: Fire Weapon
- **Tab**: Switch Weapon
- **Escape**: Pause Menu

### Mouse
- **Left Click**: Fire Weapon
- **Mouse Movement**: (Future: Look around)

## 🛠️ Setup & Installation

1. Clone this repository
2. Open `index.html` in a modern web browser
3. (Optional) Add audio files to `assets/audio/` for full audio experience
4. (Optional) Add 3D models to `assets/models/` for custom ships

### Requirements
- Modern web browser with WebGL support
- JavaScript enabled
- Recommended: Chrome, Firefox, or Edge (latest versions)

## 🎯 Game Modes

### Campaign Mode
Play through 5 story missions with progressive difficulty:
1. **First Contact**: Destroy 10 enemy fighters
2. **Defend the Fleet**: Protect allied ships for 5 minutes
3. **Strike Force**: Destroy 3 enemy stations
4. **The Gauntlet**: Navigate through enemy blockade
5. **Final Assault**: Defeat the enemy flagship

### Quick Battle
Jump straight into action with endless waves of enemies. Survive as long as possible and achieve the highest score!

## ⚙️ Graphics Settings

### Quality Presets
- **Low**: Optimized for older hardware (reduced effects, lower resolution)
- **Medium**: Balanced quality and performance
- **High**: Enhanced visuals with full effects (recommended)
- **Ultra**: Maximum quality for high-end systems

### Individual Settings
- Bloom Effect
- Motion Blur
- Shadows
- Anti-Aliasing

## 🔊 Audio System

The game features a complete spatial audio system with:
- Master volume control
- Individual category volumes (Music, SFX, Ambient)
- 3D positional audio for immersive combat
- Dynamic music system

Audio files are optional - the game will work without them using silent buffers.

## 🏗️ Technical Architecture

### Modular Design
Each system is self-contained in its own module:
- **ThreeJSSetup**: Manages 3D rendering and post-processing
- **PhysicsEngine**: Handles all physics calculations
- **AudioSystem**: Complete 3D audio management
- **ModelFactory**: Procedural 3D model generation
- **AIController**: Enemy behavior and formations
- **WeaponSystem**: Weapon mechanics and projectiles
- **UISystem**: All interface and HUD elements
- **SpaceCombatGame**: Main game orchestration

### Performance Optimizations
- Object pooling for projectiles and particles
- Spatial grid for efficient collision detection
- LOD system for distant objects (future)
- Optimized rendering pipeline

## 🎨 Customization

### Ship Types
- **Fighter**: Balanced speed and armor (★★★★☆ / ★★☆☆☆)
- **Interceptor**: Maximum speed, minimal armor (★★★★★ / ★☆☆☆☆)
- **Bomber**: Heavy armor, slower speed (★★☆☆☆ / ★★★★☆)

### Color Schemes
Choose from 8 different color schemes to personalize your ship.

## 🐛 Troubleshooting

### Game won't load
- Check browser console for errors
- Ensure JavaScript is enabled
- Try a different browser
- Check that Three.js CDN is accessible

### Performance issues
- Lower graphics quality settings
- Close other browser tabs
- Update graphics drivers
- Try disabling motion blur and shadows

### No audio
- Check browser audio permissions
- Verify volume settings in-game
- Audio files are optional - game works without them

## 🚧 Future Enhancements

- Multiplayer support
- More ship types and customization options
- Additional weapon systems
- More campaign missions
- Achievements system
- Leaderboards
- VR support
- Mobile controls

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Add audio assets
- Create 3D models

## 🎮 Credits

Built with:
- Three.js for 3D graphics
- Web Audio API for sound
- Pure JavaScript for game logic

---

**Enjoy the game! 🚀✨**