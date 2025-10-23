# TicTacToe 3D

A feature-rich, production-quality TicTacToe game with multiple game modes, AI opponents, and optional 3D rendering.

## Features

### Game Modes
- **Classic 3x3**: Traditional TicTacToe
- **Ultimate 9x9**: Extended board for longer games (simplified implementation)
- **Connect Four**: 6x7 gravity-based game with Connect-4 rules
- **3D Mode (4x4x4)**: Full 3D TicTacToe cube (requires OpenGL)

### Graphics & Effects
- **2D Rendering**: Clean, modern 2D graphics using pygame
- **3D Rendering**: Optional OpenGL-based 3D visualization (when available)
- **Particle System**: Object-pooled particle effects (500 particle pool)
- **Animations**: Smooth placement and win animations
- **Quality Settings**: Low/Medium/High/Ultra presets

### Audio
- **16-bit PCM Stereo**: High-quality sound generation
- **NumPy Integration**: Advanced waveform synthesis with harmonics
- **Fallback Mode**: Works without NumPy using basic sine waves
- **Multiple Sounds**: Place, win, tie, click, and hover sounds
- **Volume Controls**: Master, sound, and music volume sliders

### AI System
- **Three Difficulty Levels**:
  - **Easy**: Random moves with occasional smart plays (30% strategic)
  - **Medium**: Strategic play with minimax (70% optimal, depth 3)
  - **Hard**: Full minimax with alpha-beta pruning (depth 5)
- **Smart Algorithms**: Implements proper minimax with optimizations
- **Board Evaluation**: Win detection, blocking, and optimal move selection

### UI System
- **Proper Initialization**: All UI containers (menu_ui, settings_ui, etc.) properly initialized
- **Menu System**: Main menu, settings, game UI, and game-over screens
- **Interactive Elements**: Buttons, sliders, labels, and panels
- **Settings Menu**: Configure audio, difficulty, animation speed
- **FPS Display**: Real-time performance monitoring

### Performance
- **Object Pooling**: Pre-allocated 500-particle pool
- **Quality-Based Limits**: Particle limits based on graphics settings
- **Efficient Rendering**: Optimized draw calls and updates
- **Delta-Time Physics**: Frame-rate independent updates
- **FPS Smoothing**: 60-frame moving average

## Installation

### Requirements
- Python 3.8+
- pygame (required)
- numpy (recommended for better sound)
- PyOpenGL (optional for 3D mode)

### Quick Install
```bash
pip install -r requirements.txt
```

### Manual Install
```bash
pip install pygame>=2.5.0
pip install numpy>=1.24.0  # Optional but recommended
pip install PyOpenGL>=3.1.0 PyOpenGL-accelerate>=3.1.0  # Optional for 3D mode
```

### Running Without Dependencies
The game will work with just pygame:
- NumPy: Falls back to basic sound generation
- OpenGL: 3D mode disabled, 2D works fine

## Running the Game

```bash
python main.py
```

or

```bash
chmod +x main.py
./main.py
```

## Controls

### Mouse
- **Move**: Mouse cursor
- **Click**: Place piece (when playing as X)
- **Hover**: Highlights cells

### Keyboard
- **Arrow Keys**: Rotate camera in 3D mode
- **ESC**: Return to menu
- **Mouse**: All UI interactions

## Game Rules

### Classic 3x3
- Get 3 in a row (horizontal, vertical, or diagonal)
- X goes first
- Play against AI or another player

### Ultimate 9x9
- Simplified 9x9 board
- Get 3 in a row anywhere on the board
- More complex strategy

### Connect Four 6x7
- Pieces fall with gravity
- Get 4 in a row (horizontal, vertical, or diagonal)
- Classic Connect Four rules

### 3D Mode 4x4x4
- 3D cube of cells
- Get 4 in a row in any direction (including diagonals through space)
- Requires OpenGL

## Architecture

### Code Organization
The code is structured into clear sections:

1. **Imports and Initialization** (Lines 1-75)
2. **Constants and Configuration** (Lines 77-120)
3. **Enumerations** (Lines 122-155)
4. **Data Classes** (Lines 157-230)
5. **Board Class** (Lines 232-440)
6. **AI System** (Lines 442-650)
7. **Sound System** (Lines 652-800)
8. **Resource Manager** (Lines 802-850)
9. **UI Components** (Lines 852-1050)
10. **Particle System** (Lines 1052-1180)
11. **Animation System** (Lines 1182-1260)
12. **3D Rendering** (Lines 1262-1480)
13. **Main Game Class** (Lines 1482-1950)
14. **Main Entry Point** (Lines 1952-1970)

### Key Features Implementation

#### UI Initialization Fix
All UI containers are initialized in proper order:
1. Create all top-level panels first
2. Add child panels and elements
3. Wire up callbacks
4. Ensure no undefined references

#### 16-bit Stereo Sound
- Uses numpy for high-quality waveform generation
- Creates int16 stereo buffers
- Applies harmonic composition and envelopes
- Graceful fallback without numpy

#### AI with Minimax
- Recursive minimax with alpha-beta pruning
- Depth-limited for performance
- Handles 2D and 3D boards
- Smart move ordering

#### Particle Pooling
- Pre-allocates 500 particles
- Activates/deactivates instead of creating/destroying
- Quality-based limits (100-1000 particles)
- Efficient update and render

#### OpenGL Fallback
- Detects OpenGL availability at startup
- Catches import and initialization errors
- Disables 3D mode if unavailable
- Shows user-friendly messages

## Troubleshooting

### OpenGL Issues
If 3D mode doesn't work:
1. Check that PyOpenGL is installed
2. Update graphics drivers
3. Try a different graphics quality setting
4. The game will automatically fall back to 2D

### Sound Issues
If sounds don't play:
1. Check volume settings in Settings menu
2. Ensure pygame.mixer is initialized
3. NumPy improves sound quality but isn't required

### Performance Issues
1. Lower graphics quality in Settings
2. Disable particles
3. Reduce animation speed
4. Close other applications

## Development

### Adding New Features
The modular structure makes it easy to add:
- New game modes (add to GameMode enum)
- New UI screens (create new Panel)
- New sounds (add to SoundManager)
- New AI strategies (extend AI class)

### Code Style
- PEP 8 compliant
- Type hints throughout
- Comprehensive docstrings
- Clear section comments

## Credits

Created as a comprehensive demonstration of:
- Game development with pygame
- AI implementation (minimax)
- Sound synthesis
- 3D rendering with OpenGL
- Performance optimization
- Production-quality code structure

## License

Educational/demonstration project.

## Notes

This implementation includes:
- ✅ Proper UI initialization with all containers
- ✅ 16-bit PCM stereo sound generation
- ✅ AI with three difficulty levels
- ✅ Multiple game modes (Classic, Ultimate, Connect, 3D)
- ✅ OpenGL 3D rendering with fallback
- ✅ Particle system with object pooling
- ✅ Smooth animations
- ✅ Performance optimizations
- ✅ Comprehensive error handling
- ✅ Clean, well-documented code

Future enhancements could include:
- True Ultimate TicTacToe meta-board implementation
- Online multiplayer
- Save/load game state
- More sophisticated 3D models
- Texture mapping
- Advanced post-processing effects

## Branch Information

This implementation is on branch: `copilot/fix-improve-mainpy-push3`

Pull Request Title: "Fix and improve TicTacToe 3D (main.py) — Push 3"

**Ready for Pull Requestecho ___BEGIN___COMMAND_OUTPUT_MARKER___ ; cd /home/runner/work/DovJNash.github.io/DovJNash.github.io && git branch --show-current && git diff origin/copilot/fix-ui-initialization-errors..HEAD --stat | head -20 ; EC=0 ; echo ___BEGIN___COMMAND_DONE_MARKER___0 ; }*
