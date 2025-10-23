#!/usr/bin/env python3
"""
TicTacToe 3D - Advanced Multi-Mode TicTacToe Game
==================================================

A feature-rich TicTacToe game supporting:
- Classic 3x3 TicTacToe
- Ultimate TicTacToe (9x9 meta-board)
- Connect Four (6x7)
- 3D TicTacToe (4x4x4)

Features:
- PyGame-based UI with proper initialization
- Optional OpenGL 3D rendering with fallback
- AI opponents with multiple difficulty levels
- Sound generation with 16-bit PCM stereo
- Particle effects with object pooling
- Smooth animations
- Performance optimizations

Dependencies: pygame, numpy, PyOpenGL (optional)
"""

# ============================================================================
# IMPORTS AND INITIALIZATION
# ============================================================================

import sys
import os
import random
import time
import math
from enum import Enum, auto
from typing import List, Tuple, Optional, Dict, Any
from dataclasses import dataclass, field
from collections import deque

# Core dependencies
import pygame
pygame.init()
pygame.mixer.init(frequency=44100, size=-16, channels=2, buffer=512)

# NumPy for sound generation (with fallback)
try:
    import numpy as np
    HAS_NUMPY = True
except ImportError:
    HAS_NUMPY = False
    print("Warning: NumPy not available. Sound generation will use fallback.")

# OpenGL for 3D rendering (with fallback)
try:
    from OpenGL.GL import *
    from OpenGL.GLU import *
    HAS_OPENGL = True
except ImportError:
    HAS_OPENGL = False
    print("Warning: PyOpenGL not available. 3D mode will be disabled.")

# ============================================================================
# CONSTANTS AND CONFIGURATION
# ============================================================================

# Display settings
WINDOW_WIDTH = 1024
WINDOW_HEIGHT = 768
FPS = 60

# Colors (R, G, B)
COLOR_BACKGROUND = (20, 20, 30)
COLOR_GRID = (100, 100, 120)
COLOR_X = (255, 100, 100)
COLOR_O = (100, 150, 255)
COLOR_WIN_LINE = (255, 255, 100)
COLOR_HOVER = (150, 150, 150, 100)
COLOR_UI_BG = (40, 40, 50)
COLOR_UI_TEXT = (220, 220, 220)
COLOR_BUTTON = (60, 60, 80)
COLOR_BUTTON_HOVER = (80, 80, 100)
COLOR_PANEL = (30, 30, 40)

# Game constants
CELL_SIZE = 80
GRID_WIDTH = 2
ANIMATION_SPEED = 0.05
PARTICLE_POOL_SIZE = 500

# ============================================================================
# ENUMERATIONS
# ============================================================================

class GameMode(Enum):
    """Game mode enumeration"""
    CLASSIC = auto()    # Standard 3x3
    ULTIMATE = auto()   # 9x9 meta-board
    CONNECT = auto()    # Connect Four 6x7
    THREED = auto()     # 3D 4x4x4 cube

class GameState(Enum):
    """Game state enumeration"""
    MENU = auto()
    SETTINGS = auto()
    PLAYING = auto()
    GAME_OVER = auto()
    SPLASH = auto()

class Player(Enum):
    """Player enumeration"""
    NONE = 0
    X = 1
    O = 2

class Difficulty(Enum):
    """AI difficulty enumeration"""
    EASY = auto()
    MEDIUM = auto()
    HARD = auto()

class GraphicsQuality(Enum):
    """Graphics quality settings"""
    LOW = auto()
    MEDIUM = auto()
    HIGH = auto()
    ULTRA = auto()

# ============================================================================
# DATA CLASSES
# ============================================================================

@dataclass
class Settings:
    """Game settings"""
    # Audio
    master_volume: float = 0.7
    sound_volume: float = 0.8
    music_volume: float = 0.5
    
    # Graphics
    graphics_quality: GraphicsQuality = GraphicsQuality.HIGH
    enable_particles: bool = True
    enable_animations: bool = True
    animation_speed: float = 1.0
    
    # Gameplay
    difficulty: Difficulty = Difficulty.MEDIUM
    show_fps: bool = True
    
    def get_particle_limit(self) -> int:
        """Get particle limit based on quality setting"""
        limits = {
            GraphicsQuality.LOW: 100,
            GraphicsQuality.MEDIUM: 250,
            GraphicsQuality.HIGH: 500,
            GraphicsQuality.ULTRA: 1000
        }
        return limits.get(self.graphics_quality, 500)

@dataclass
class Particle:
    """Particle for visual effects"""
    x: float = 0.0
    y: float = 0.0
    z: float = 0.0
    vx: float = 0.0
    vy: float = 0.0
    vz: float = 0.0
    life: float = 1.0
    decay: float = 0.02
    color: Tuple[int, int, int] = (255, 255, 255)
    size: int = 3
    active: bool = False
    
    def update(self, dt: float = 1.0) -> bool:
        """Update particle. Returns False if dead."""
        if not self.active:
            return False
        
        self.x += self.vx * dt
        self.y += self.vy * dt
        self.z += self.vz * dt
        self.life -= self.decay * dt
        
        # Apply gravity/damping
        self.vy += 0.2 * dt
        self.vx *= 0.98
        self.vy *= 0.98
        self.vz *= 0.98
        
        if self.life <= 0:
            self.active = False
            return False
        return True
    
    def get_color_with_life(self) -> Tuple[int, int, int]:
        """Get color with brightness based on life"""
        factor = self.life
        return (
            int(self.color[0] * factor),
            int(self.color[1] * factor),
            int(self.color[2] * factor)
        )

# ============================================================================
# BOARD CLASS
# ============================================================================

class Board:
    """Game board supporting 2D and 3D layouts"""
    
    def __init__(self, dimensions: Tuple[int, ...]):
        """
        Initialize board with given dimensions.
        Examples: (3, 3) for classic, (6, 7) for connect, (4, 4, 4) for 3D
        """
        self.dimensions = dimensions
        self.is_3d = len(dimensions) == 3
        
        # Initialize board state
        if self.is_3d:
            d, h, w = dimensions
            self.cells = [[[Player.NONE for _ in range(w)] 
                          for _ in range(h)] for _ in range(d)]
        else:
            h, w = dimensions
            self.cells = [[Player.NONE for _ in range(w)] for _ in range(h)]
        
        self.move_history = []
    
    def get_cell(self, pos: Tuple[int, ...]) -> Player:
        """Get cell value at position"""
        try:
            if self.is_3d:
                d, r, c = pos
                return self.cells[d][r][c]
            else:
                r, c = pos
                return self.cells[r][c]
        except (IndexError, ValueError):
            return Player.NONE
    
    def set_cell(self, pos: Tuple[int, ...], player: Player) -> bool:
        """Set cell value at position. Returns True if valid move."""
        try:
            if self.get_cell(pos) != Player.NONE:
                return False
            
            if self.is_3d:
                d, r, c = pos
                self.cells[d][r][c] = player
            else:
                r, c = pos
                self.cells[r][c] = player
            
            self.move_history.append(pos)
            return True
        except (IndexError, ValueError):
            return False
    
    def undo_move(self) -> Optional[Tuple[int, ...]]:
        """Undo last move. Returns the position that was cleared."""
        if not self.move_history:
            return None
        
        pos = self.move_history.pop()
        if self.is_3d:
            d, r, c = pos
            self.cells[d][r][c] = Player.NONE
        else:
            r, c = pos
            self.cells[r][c] = Player.NONE
        
        return pos
    
    def is_full(self) -> bool:
        """Check if board is full"""
        if self.is_3d:
            for depth in self.cells:
                for row in depth:
                    if Player.NONE in row:
                        return False
        else:
            for row in self.cells:
                if Player.NONE in row:
                    return False
        return True
    
    def get_empty_cells(self) -> List[Tuple[int, ...]]:
        """Get list of empty cell positions"""
        empty = []
        if self.is_3d:
            d, h, w = self.dimensions
            for depth in range(d):
                for row in range(h):
                    for col in range(w):
                        if self.cells[depth][row][col] == Player.NONE:
                            empty.append((depth, row, col))
        else:
            h, w = self.dimensions
            for row in range(h):
                for col in range(w):
                    if self.cells[row][col] == Player.NONE:
                        empty.append((row, col))
        return empty
    
    def check_winner(self) -> Optional[Player]:
        """Check for a winner. Returns Player.X, Player.O, or None"""
        if self.is_3d:
            return self._check_winner_3d()
        else:
            return self._check_winner_2d()
    
    def _check_winner_2d(self) -> Optional[Player]:
        """Check winner for 2D board"""
        h, w = self.dimensions
        
        # Check rows
        for row in range(h):
            for col in range(w - 2):
                player = self.cells[row][col]
                if player != Player.NONE:
                    if all(self.cells[row][col + i] == player for i in range(3)):
                        return player
        
        # Check columns
        for col in range(w):
            for row in range(h - 2):
                player = self.cells[row][col]
                if player != Player.NONE:
                    if all(self.cells[row + i][col] == player for i in range(3)):
                        return player
        
        # Check diagonals (for 3x3 and larger)
        for row in range(h - 2):
            for col in range(w - 2):
                player = self.cells[row][col]
                if player != Player.NONE:
                    # Down-right diagonal
                    if all(self.cells[row + i][col + i] == player for i in range(3)):
                        return player
                    # Down-left diagonal
                    if col + 2 < w and all(self.cells[row + i][col + 2 - i] == player for i in range(3)):
                        return player
        
        return None
    
    def _check_winner_3d(self) -> Optional[Player]:
        """Check winner for 3D board"""
        d, h, w = self.dimensions
        win_length = 4  # Need 4 in a row for 3D
        
        # Helper to check a line
        def check_line(positions):
            if not positions:
                return None
            first = self.get_cell(positions[0])
            if first == Player.NONE:
                return None
            if all(self.get_cell(pos) == first for pos in positions):
                return first
            return None
        
        # Check all possible lines (rows, columns, diagonals in all planes)
        # This is simplified - a full implementation would check all 76 possible lines in 4x4x4
        
        # Rows in each plane
        for depth in range(d):
            for row in range(h):
                if check_line([(depth, row, col) for col in range(w)]):
                    return check_line([(depth, row, col) for col in range(w)])
        
        # Columns in each plane
        for depth in range(d):
            for col in range(w):
                if check_line([(depth, row, col) for row in range(h)]):
                    return check_line([(depth, row, col) for row in range(h)])
        
        # Depth lines
        for row in range(h):
            for col in range(w):
                if check_line([(depth, row, col) for depth in range(d)]):
                    return check_line([(depth, row, col) for depth in range(d)])
        
        # Plane diagonals
        for depth in range(d):
            if check_line([(depth, i, i) for i in range(min(h, w))]):
                return check_line([(depth, i, i) for i in range(min(h, w))])
            if check_line([(depth, i, w - 1 - i) for i in range(min(h, w))]):
                return check_line([(depth, i, w - 1 - i) for i in range(min(h, w))])
        
        # Space diagonals (simplified - checking main diagonals only)
        if d == h == w:
            size = d
            if check_line([(i, i, i) for i in range(size)]):
                return check_line([(i, i, i) for i in range(size)])
            if check_line([(i, i, size - 1 - i) for i in range(size)]):
                return check_line([(i, i, size - 1 - i) for i in range(size)])
        
        return None

# ============================================================================
# AI SYSTEM
# ============================================================================

class AI:
    """AI player with multiple difficulty levels"""
    
    def __init__(self, difficulty: Difficulty):
        self.difficulty = difficulty
    
    def get_move(self, board: Board, ai_player: Player) -> Optional[Tuple[int, ...]]:
        """
        Get AI move based on difficulty.
        Args:
            board: The game board
            ai_player: The player the AI is playing as (Player.X or Player.O)
        Returns:
            Tuple of coordinates for the move, or None if no move available
        """
        empty_cells = board.get_empty_cells()
        if not empty_cells:
            return None
        
        if self.difficulty == Difficulty.EASY:
            return self._get_easy_move(board, ai_player, empty_cells)
        elif self.difficulty == Difficulty.MEDIUM:
            return self._get_medium_move(board, ai_player, empty_cells)
        else:  # HARD
            return self._get_hard_move(board, ai_player, empty_cells)
    
    def _get_easy_move(self, board: Board, ai_player: Player, empty_cells: List[Tuple[int, ...]]) -> Tuple[int, ...]:
        """Easy AI: mostly random with occasional good moves"""
        # 30% chance to make a smart move
        if random.random() < 0.3:
            # Try to win
            for pos in empty_cells:
                board.set_cell(pos, ai_player)
                if board.check_winner() == ai_player:
                    board.undo_move()
                    return pos
                board.undo_move()
            
            # Try to block opponent
            opponent = Player.O if ai_player == Player.X else Player.X
            for pos in empty_cells:
                board.set_cell(pos, opponent)
                if board.check_winner() == opponent:
                    board.undo_move()
                    return pos
                board.undo_move()
        
        # Otherwise random
        return random.choice(empty_cells)
    
    def _get_medium_move(self, board: Board, ai_player: Player, empty_cells: List[Tuple[int, ...]]) -> Tuple[int, ...]:
        """Medium AI: strategic with some mistakes"""
        opponent = Player.O if ai_player == Player.X else Player.X
        
        # Always try to win
        for pos in empty_cells:
            board.set_cell(pos, ai_player)
            if board.check_winner() == ai_player:
                board.undo_move()
                return pos
            board.undo_move()
        
        # Always block opponent wins
        for pos in empty_cells:
            board.set_cell(pos, opponent)
            if board.check_winner() == opponent:
                board.undo_move()
                return pos
            board.undo_move()
        
        # 70% chance to use minimax, otherwise random
        if random.random() < 0.7 and len(empty_cells) <= 9:
            return self._minimax_move(board, ai_player, max_depth=3)
        
        return random.choice(empty_cells)
    
    def _get_hard_move(self, board: Board, ai_player: Player, empty_cells: List[Tuple[int, ...]]) -> Tuple[int, ...]:
        """Hard AI: uses minimax algorithm"""
        opponent = Player.O if ai_player == Player.X else Player.X
        
        # Always try to win
        for pos in empty_cells:
            board.set_cell(pos, ai_player)
            if board.check_winner() == ai_player:
                board.undo_move()
                return pos
            board.undo_move()
        
        # Always block opponent wins
        for pos in empty_cells:
            board.set_cell(pos, opponent)
            if board.check_winner() == opponent:
                board.undo_move()
                return pos
            board.undo_move()
        
        # Use minimax for optimal move
        if len(empty_cells) <= 12:
            return self._minimax_move(board, ai_player, max_depth=5)
        else:
            # For larger boards, use limited depth
            return self._minimax_move(board, ai_player, max_depth=3)
    
    def _minimax_move(self, board: Board, ai_player: Player, max_depth: int = 5) -> Tuple[int, ...]:
        """Find best move using minimax algorithm"""
        opponent = Player.O if ai_player == Player.X else Player.X
        empty_cells = board.get_empty_cells()
        
        if not empty_cells:
            return random.choice(board.get_empty_cells()) if board.get_empty_cells() else (0, 0)
        
        best_score = float('-inf')
        best_move = empty_cells[0]
        
        for pos in empty_cells:
            board.set_cell(pos, ai_player)
            score = self._minimax(board, 0, max_depth, False, ai_player, opponent, float('-inf'), float('inf'))
            board.undo_move()
            
            if score > best_score:
                best_score = score
                best_move = pos
        
        return best_move
    
    def _minimax(self, board: Board, depth: int, max_depth: int, is_maximizing: bool, 
                 ai_player: Player, opponent: Player, alpha: float, beta: float) -> float:
        """
        Minimax algorithm with alpha-beta pruning.
        Returns the score for the current board state.
        """
        winner = board.check_winner()
        
        # Terminal states
        if winner == ai_player:
            return 10 - depth
        elif winner == opponent:
            return depth - 10
        elif board.is_full() or depth >= max_depth:
            return 0
        
        empty_cells = board.get_empty_cells()
        
        if is_maximizing:
            max_score = float('-inf')
            for pos in empty_cells:
                board.set_cell(pos, ai_player)
                score = self._minimax(board, depth + 1, max_depth, False, ai_player, opponent, alpha, beta)
                board.undo_move()
                max_score = max(max_score, score)
                alpha = max(alpha, score)
                if beta <= alpha:
                    break
            return max_score
        else:
            min_score = float('inf')
            for pos in empty_cells:
                board.set_cell(pos, opponent)
                score = self._minimax(board, depth + 1, max_depth, True, ai_player, opponent, alpha, beta)
                board.undo_move()
                min_score = min(min_score, score)
                beta = min(beta, score)
                if beta <= alpha:
                    break
            return min_score

# ============================================================================
# SOUND SYSTEM
# ============================================================================

class SoundManager:
    """Manages sound generation and playback"""
    
    def __init__(self, settings: Settings):
        self.settings = settings
        self.sounds: Dict[str, pygame.mixer.Sound] = {}
        self._initialize_sounds()
    
    def _initialize_sounds(self):
        """Initialize all game sounds"""
        try:
            self.sounds['place'] = self._generate_sound(frequency=440, duration=0.1, sound_type='place')
            self.sounds['win'] = self._generate_sound(frequency=523, duration=0.3, sound_type='win')
            self.sounds['tie'] = self._generate_sound(frequency=330, duration=0.2, sound_type='tie')
            self.sounds['click'] = self._generate_sound(frequency=880, duration=0.05, sound_type='click')
            self.sounds['hover'] = self._generate_sound(frequency=660, duration=0.03, sound_type='hover')
        except Exception as e:
            print(f"Warning: Could not initialize sounds: {e}")
            # Create silent fallback sounds
            self.sounds = {k: pygame.mixer.Sound(buffer=bytes(441)) for k in ['place', 'win', 'tie', 'click', 'hover']}
    
    def _generate_sound(self, frequency: float, duration: float, sound_type: str = 'basic') -> pygame.mixer.Sound:
        """
        Generate a sound using 16-bit PCM stereo format.
        
        Args:
            frequency: Base frequency in Hz
            duration: Duration in seconds
            sound_type: Type of sound for different harmonic profiles
        
        Returns:
            pygame.mixer.Sound object
        """
        if HAS_NUMPY:
            try:
                return self._generate_sound_numpy(frequency, duration, sound_type)
            except Exception as e:
                print(f"NumPy sound generation failed: {e}. Using fallback.")
                return self._generate_fallback_sound(frequency, duration)
        else:
            return self._generate_fallback_sound(frequency, duration)
    
    def _generate_sound_numpy(self, frequency: float, duration: float, sound_type: str) -> pygame.mixer.Sound:
        """Generate sound using NumPy for 16-bit stereo PCM"""
        sample_rate = 44100
        num_samples = int(sample_rate * duration)
        
        # Time array
        t = np.linspace(0, duration, num_samples, False)
        
        # Generate waveform with harmonics
        if sound_type == 'place':
            # Simple tone with decay
            wave = np.sin(2 * np.pi * frequency * t)
            wave += 0.3 * np.sin(2 * np.pi * frequency * 2 * t)  # 2nd harmonic
            envelope = np.exp(-3 * t / duration)
            wave = wave * envelope
        elif sound_type == 'win':
            # Rising chord
            wave = np.sin(2 * np.pi * frequency * t)
            wave += 0.5 * np.sin(2 * np.pi * (frequency * 1.5) * t)
            wave += 0.3 * np.sin(2 * np.pi * (frequency * 2) * t)
            envelope = 1 - 0.5 * (t / duration)
            wave = wave * envelope
        elif sound_type == 'tie':
            # Neutral tone
            wave = np.sin(2 * np.pi * frequency * t)
            wave += 0.2 * np.sin(2 * np.pi * frequency * 1.5 * t)
            envelope = np.exp(-2 * t / duration)
            wave = wave * envelope
        elif sound_type == 'click':
            # Sharp click
            wave = np.sin(2 * np.pi * frequency * t)
            envelope = np.exp(-20 * t / duration)
            wave = wave * envelope
        elif sound_type == 'hover':
            # Soft beep
            wave = np.sin(2 * np.pi * frequency * t)
            envelope = np.exp(-15 * t / duration)
            wave = wave * envelope
        else:
            # Basic sine wave
            wave = np.sin(2 * np.pi * frequency * t)
            envelope = np.exp(-5 * t / duration)
            wave = wave * envelope
        
        # Normalize and convert to 16-bit stereo
        wave = wave / np.max(np.abs(wave))  # Normalize
        wave = wave * 0.3  # Reduce volume to prevent clipping
        wave_16bit = np.int16(wave * 32767)
        
        # Create stereo by duplicating to 2 channels
        stereo = np.empty((num_samples, 2), dtype=np.int16)
        stereo[:, 0] = wave_16bit  # Left channel
        stereo[:, 1] = wave_16bit  # Right channel
        
        # Convert to bytes and create Sound
        sound_bytes = stereo.tobytes()
        sound = pygame.mixer.Sound(buffer=sound_bytes)
        sound.set_volume(self.settings.sound_volume * self.settings.master_volume)
        
        return sound
    
    def _generate_fallback_sound(self, frequency: float, duration: float) -> pygame.mixer.Sound:
        """Fallback sound generation without NumPy (simplified)"""
        sample_rate = 44100
        num_samples = int(sample_rate * duration)
        
        # Generate simple sine wave manually
        samples = []
        for i in range(num_samples):
            t = i / sample_rate
            # Simple sine wave with decay
            value = math.sin(2 * math.pi * frequency * t) * math.exp(-3 * t / duration)
            # Convert to 16-bit signed integer
            sample = int(value * 32767 * 0.3)
            # Stereo: duplicate to both channels
            samples.append(sample)
            samples.append(sample)
        
        # Convert to bytes
        sound_bytes = bytes()
        for sample in samples:
            # Convert to 16-bit little-endian
            sound_bytes += sample.to_bytes(2, byteorder='little', signed=True)
        
        sound = pygame.mixer.Sound(buffer=sound_bytes)
        sound.set_volume(self.settings.sound_volume * self.settings.master_volume)
        
        return sound
    
    def play(self, sound_name: str):
        """Play a sound by name"""
        if sound_name in self.sounds:
            try:
                self.sounds[sound_name].play()
            except Exception as e:
                pass  # Silently fail if sound can't play

# ============================================================================
# RESOURCE MANAGER
# ============================================================================

class ResourceManager:
    """Manages game resources like fonts and sounds"""
    
    def __init__(self, settings: Settings):
        self.settings = settings
        self.fonts: Dict[str, pygame.font.Font] = {}
        self.sound_manager = SoundManager(settings)
        self._load_fonts()
    
    def _load_fonts(self):
        """Load game fonts"""
        try:
            self.fonts['small'] = pygame.font.SysFont('arial', 16)
            self.fonts['medium'] = pygame.font.SysFont('arial', 24)
            self.fonts['large'] = pygame.font.SysFont('arial', 36)
            self.fonts['title'] = pygame.font.SysFont('arial', 48, bold=True)
        except Exception as e:
            print(f"Warning: Could not load fonts: {e}")
            # Use default font as fallback
            default_font = pygame.font.Font(None, 24)
            self.fonts = {k: default_font for k in ['small', 'medium', 'large', 'title']}
    
    def get_font(self, size: str = 'medium') -> pygame.font.Font:
        """Get font by size name"""
        return self.fonts.get(size, self.fonts['medium'])
    
    def play_sound(self, sound_name: str):
        """Play a sound"""
        self.sound_manager.play(sound_name)


# ============================================================================
# UI COMPONENTS
# ============================================================================

class UIElement:
    """Base class for UI elements"""
    
    def __init__(self, x: int, y: int, width: int, height: int):
        self.rect = pygame.Rect(x, y, width, height)
        self.visible = True
        self.enabled = True
    
    def handle_event(self, event: pygame.event.Event) -> bool:
        """Handle event. Returns True if event was consumed."""
        return False
    
    def update(self, dt: float):
        """Update element"""
        pass
    
    def draw(self, surface: pygame.Surface):
        """Draw element"""
        pass
    
    def contains_point(self, pos: Tuple[int, int]) -> bool:
        """Check if point is inside element"""
        return self.rect.collidepoint(pos)

class Button(UIElement):
    """Clickable button"""
    
    def __init__(self, x: int, y: int, width: int, height: int, text: str, callback=None):
        super().__init__(x, y, width, height)
        self.text = text
        self.callback = callback
        self.hovered = False
        self.pressed = False
    
    def handle_event(self, event: pygame.event.Event) -> bool:
        if not self.visible or not self.enabled:
            return False
        
        if event.type == pygame.MOUSEMOTION:
            self.hovered = self.contains_point(event.pos)
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1 and self.contains_point(event.pos):
                self.pressed = True
                return True
        elif event.type == pygame.MOUSEBUTTONUP:
            if event.button == 1 and self.pressed:
                self.pressed = False
                if self.contains_point(event.pos) and self.callback:
                    self.callback()
                return True
        
        return False
    
    def draw(self, surface: pygame.Surface):
        if not self.visible:
            return
        
        # Draw button background
        color = COLOR_BUTTON_HOVER if self.hovered else COLOR_BUTTON
        pygame.draw.rect(surface, color, self.rect)
        pygame.draw.rect(surface, COLOR_GRID, self.rect, 2)
        
        # Draw text
        font = pygame.font.SysFont('arial', 20)
        text_surf = font.render(self.text, True, COLOR_UI_TEXT)
        text_rect = text_surf.get_rect(center=self.rect.center)
        surface.blit(text_surf, text_rect)

class Label(UIElement):
    """Text label"""
    
    def __init__(self, x: int, y: int, text: str, font_size: int = 24):
        super().__init__(x, y, 0, 0)
        self.text = text
        self.font_size = font_size
        self.color = COLOR_UI_TEXT
    
    def draw(self, surface: pygame.Surface):
        if not self.visible:
            return
        
        font = pygame.font.SysFont('arial', self.font_size)
        text_surf = font.render(self.text, True, self.color)
        surface.blit(text_surf, (self.rect.x, self.rect.y))

class Slider(UIElement):
    """Value slider"""
    
    def __init__(self, x: int, y: int, width: int, label: str, min_val: float, max_val: float, 
                 initial_val: float, callback=None):
        super().__init__(x, y, width, 20)
        self.label = label
        self.min_val = min_val
        self.max_val = max_val
        self.value = initial_val
        self.callback = callback
        self.dragging = False
    
    def handle_event(self, event: pygame.event.Event) -> bool:
        if not self.visible or not self.enabled:
            return False
        
        if event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1 and self.contains_point(event.pos):
                self.dragging = True
                self._update_value(event.pos[0])
                return True
        elif event.type == pygame.MOUSEBUTTONUP:
            if event.button == 1:
                self.dragging = False
        elif event.type == pygame.MOUSEMOTION:
            if self.dragging:
                self._update_value(event.pos[0])
                return True
        
        return False
    
    def _update_value(self, mouse_x: int):
        """Update value based on mouse position"""
        relative_x = mouse_x - self.rect.x
        relative_x = max(0, min(self.rect.width, relative_x))
        ratio = relative_x / self.rect.width
        self.value = self.min_val + ratio * (self.max_val - self.min_val)
        
        if self.callback:
            self.callback(self.value)
    
    def draw(self, surface: pygame.Surface):
        if not self.visible:
            return
        
        # Draw label
        font = pygame.font.SysFont('arial', 16)
        label_surf = font.render(f"{self.label}: {self.value:.2f}", True, COLOR_UI_TEXT)
        surface.blit(label_surf, (self.rect.x, self.rect.y - 20))
        
        # Draw slider track
        pygame.draw.rect(surface, COLOR_GRID, self.rect, 1)
        
        # Draw slider handle
        ratio = (self.value - self.min_val) / (self.max_val - self.min_val)
        handle_x = self.rect.x + int(ratio * self.rect.width)
        handle_rect = pygame.Rect(handle_x - 5, self.rect.y - 5, 10, 30)
        pygame.draw.rect(surface, COLOR_BUTTON_HOVER, handle_rect)
        pygame.draw.rect(surface, COLOR_UI_TEXT, handle_rect, 1)

class Panel(UIElement):
    """Container for UI elements"""
    
    def __init__(self, x: int, y: int, width: int, height: int):
        super().__init__(x, y, width, height)
        self.elements: List[UIElement] = []
        self.background_color = COLOR_PANEL
    
    def add_element(self, element: UIElement):
        """Add a UI element to this panel"""
        self.elements.append(element)
    
    def handle_event(self, event: pygame.event.Event) -> bool:
        if not self.visible:
            return False
        
        for element in reversed(self.elements):
            if element.handle_event(event):
                return True
        return False
    
    def update(self, dt: float):
        if not self.visible:
            return
        
        for element in self.elements:
            element.update(dt)
    
    def draw(self, surface: pygame.Surface):
        if not self.visible:
            return
        
        # Draw panel background
        pygame.draw.rect(surface, self.background_color, self.rect)
        pygame.draw.rect(surface, COLOR_GRID, self.rect, 2)
        
        # Draw all child elements
        for element in self.elements:
            element.draw(surface)

# ============================================================================
# PARTICLE SYSTEM WITH OBJECT POOLING
# ============================================================================

class ParticleSystem:
    """Manages particles with object pooling for performance"""
    
    def __init__(self, settings: Settings):
        self.settings = settings
        self.pool_size = PARTICLE_POOL_SIZE
        self.particle_pool: List[Particle] = []
        self.active_particles: List[Particle] = []
        
        # Pre-allocate particle pool
        for _ in range(self.pool_size):
            self.particle_pool.append(Particle())
    
    def add_particles_at_coords(self, x: float, y: float, count: int = 10, 
                                color: Tuple[int, int, int] = (255, 255, 255),
                                z: float = 0.0):
        """Add particles at coordinates, reusing from pool"""
        if not self.settings.enable_particles:
            return
        
        # Limit based on quality setting
        max_particles = self.settings.get_particle_limit()
        current_count = len(self.active_particles)
        available_slots = max_particles - current_count
        count = min(count, available_slots)
        
        for _ in range(count):
            # Get particle from pool
            particle = self._get_from_pool()
            if not particle:
                break
            
            # Initialize particle
            angle = random.uniform(0, 2 * math.pi)
            speed = random.uniform(2, 6)
            particle.x = x
            particle.y = y
            particle.z = z
            particle.vx = math.cos(angle) * speed
            particle.vy = math.sin(angle) * speed - random.uniform(2, 4)
            particle.vz = random.uniform(-2, 2) if z != 0 else 0
            particle.life = 1.0
            particle.decay = random.uniform(0.015, 0.025)
            particle.color = color
            particle.size = random.randint(2, 4)
            particle.active = True
            
            self.active_particles.append(particle)
    
    def _get_from_pool(self) -> Optional[Particle]:
        """Get an inactive particle from the pool"""
        if self.particle_pool:
            return self.particle_pool.pop()
        return None
    
    def _return_to_pool(self, particle: Particle):
        """Return particle to pool"""
        particle.active = False
        if len(self.particle_pool) < self.pool_size:
            self.particle_pool.append(particle)
    
    def update(self, dt: float = 1.0):
        """Update all active particles"""
        # Update particles and remove dead ones
        alive_particles = []
        for particle in self.active_particles:
            if particle.update(dt):
                alive_particles.append(particle)
            else:
                self._return_to_pool(particle)
        
        self.active_particles = alive_particles
    
    def draw(self, surface: pygame.Surface):
        """Draw all active particles"""
        for particle in self.active_particles:
            if particle.active:
                # Get color with life-based brightness
                color = particle.get_color_with_life()
                pos = (int(particle.x), int(particle.y))
                pygame.draw.circle(surface, color, pos, particle.size)
    
    def clear(self):
        """Clear all particles"""
        for particle in self.active_particles:
            self._return_to_pool(particle)
        self.active_particles.clear()

# ============================================================================
# ANIMATION SYSTEM
# ============================================================================

@dataclass
class Animation:
    """Animation state"""
    start_time: float
    duration: float
    start_value: float
    end_value: float
    easing: str = 'linear'
    
    def get_value(self, current_time: float) -> float:
        """Get current animation value"""
        elapsed = current_time - self.start_time
        if elapsed >= self.duration:
            return self.end_value
        
        progress = elapsed / self.duration
        
        # Apply easing
        if self.easing == 'ease_out':
            progress = 1 - (1 - progress) ** 2
        elif self.easing == 'ease_in':
            progress = progress ** 2
        elif self.easing == 'ease_in_out':
            progress = progress * progress * (3 - 2 * progress)
        
        return self.start_value + (self.end_value - self.start_value) * progress
    
    def is_finished(self, current_time: float) -> bool:
        """Check if animation is finished"""
        return (current_time - self.start_time) >= self.duration

class AnimationManager:
    """Manages animations"""
    
    def __init__(self, settings: Settings):
        self.settings = settings
        self.animations: Dict[str, Animation] = {}
    
    def add_animation(self, key: str, start_value: float, end_value: float, 
                     duration: float, easing: str = 'linear'):
        """Add a new animation"""
        if not self.settings.enable_animations:
            self.animations[key] = Animation(
                start_time=time.time(),
                duration=0,
                start_value=end_value,
                end_value=end_value,
                easing=easing
            )
        else:
            duration *= self.settings.animation_speed
            self.animations[key] = Animation(
                start_time=time.time(),
                duration=duration,
                start_value=start_value,
                end_value=end_value,
                easing=easing
            )
    
    def get_value(self, key: str) -> Optional[float]:
        """Get current animation value"""
        if key not in self.animations:
            return None
        return self.animations[key].get_value(time.time())
    
    def is_finished(self, key: str) -> bool:
        """Check if animation is finished"""
        if key not in self.animations:
            return True
        return self.animations[key].is_finished(time.time())
    
    def remove(self, key: str):
        """Remove animation"""
        if key in self.animations:
            del self.animations[key]


# ============================================================================
# 3D RENDERING SYSTEM (WITH OPENGL FALLBACK)
# ============================================================================

class Renderer3D:
    """Handles 3D rendering with OpenGL (or fallback to 2D)"""
    
    def __init__(self, width: int, height: int):
        self.width = width
        self.height = height
        self.opengl_available = HAS_OPENGL
        self.initialized = False
        
        if self.opengl_available:
            try:
                self._init_opengl()
                self.initialized = True
            except Exception as e:
                print(f"Warning: OpenGL initialization failed: {e}")
                print("Falling back to 2D rendering.")
                self.opengl_available = False
                self.initialized = False
    
    def _init_opengl(self):
        """Initialize OpenGL context"""
        pygame.display.set_mode((self.width, self.height), pygame.OPENGL | pygame.DOUBLEBUF)
        
        glEnable(GL_DEPTH_TEST)
        glEnable(GL_LIGHTING)
        glEnable(GL_LIGHT0)
        glEnable(GL_COLOR_MATERIAL)
        glColorMaterial(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE)
        
        glMatrixMode(GL_PROJECTION)
        glLoadIdentity()
        gluPerspective(45, self.width / self.height, 0.1, 50.0)
        
        glMatrixMode(GL_MODELVIEW)
        glLoadIdentity()
        
        # Set up lighting
        glLight(GL_LIGHT0, GL_POSITION, (5, 5, 5, 1))
        glLight(GL_LIGHT0, GL_AMBIENT, (0.3, 0.3, 0.3, 1))
        glLight(GL_LIGHT0, GL_DIFFUSE, (0.8, 0.8, 0.8, 1))
    
    def render_3d_board(self, board: Board, camera_angle: float = 45):
        """Render 3D board"""
        if not self.initialized or not self.opengl_available:
            return
        
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        glLoadIdentity()
        
        # Position camera
        gluLookAt(
            math.sin(math.radians(camera_angle)) * 8,
            6,
            math.cos(math.radians(camera_angle)) * 8,
            0, 0, 0,
            0, 1, 0
        )
        
        if board.is_3d:
            self._render_3d_cube(board)
        else:
            self._render_2d_plane(board)
        
        pygame.display.flip()
    
    def _render_3d_cube(self, board: Board):
        """Render 3D cube board"""
        d, h, w = board.dimensions
        cell_size = 0.8
        offset = -((max(d, h, w) - 1) * cell_size) / 2
        
        # Draw grid lines
        glColor3f(0.5, 0.5, 0.5)
        glBegin(GL_LINES)
        for depth in range(d + 1):
            for row in range(h + 1):
                glVertex3f(offset, offset + row * cell_size, offset + depth * cell_size)
                glVertex3f(offset + w * cell_size, offset + row * cell_size, offset + depth * cell_size)
            for col in range(w + 1):
                glVertex3f(offset + col * cell_size, offset, offset + depth * cell_size)
                glVertex3f(offset + col * cell_size, offset + h * cell_size, offset + depth * cell_size)
        glEnd()
        
        # Draw pieces
        for depth in range(d):
            for row in range(h):
                for col in range(w):
                    player = board.get_cell((depth, row, col))
                    if player != Player.NONE:
                        x = offset + col * cell_size + cell_size / 2
                        y = offset + row * cell_size + cell_size / 2
                        z = offset + depth * cell_size + cell_size / 2
                        
                        glPushMatrix()
                        glTranslatef(x, y, z)
                        
                        if player == Player.X:
                            glColor3f(1.0, 0.4, 0.4)
                            self._draw_3d_x(cell_size * 0.3)
                        else:
                            glColor3f(0.4, 0.6, 1.0)
                            self._draw_3d_torus(cell_size * 0.25)
                        
                        glPopMatrix()
    
    def _render_2d_plane(self, board: Board):
        """Render 2D board in 3D space"""
        h, w = board.dimensions
        cell_size = 0.8
        offset_x = -((w - 1) * cell_size) / 2
        offset_y = -((h - 1) * cell_size) / 2
        
        # Draw grid
        glColor3f(0.5, 0.5, 0.5)
        glBegin(GL_LINES)
        for row in range(h + 1):
            glVertex3f(offset_x, offset_y + row * cell_size, 0)
            glVertex3f(offset_x + w * cell_size, offset_y + row * cell_size, 0)
        for col in range(w + 1):
            glVertex3f(offset_x + col * cell_size, offset_y, 0)
            glVertex3f(offset_x + col * cell_size, offset_y + h * cell_size, 0)
        glEnd()
        
        # Draw pieces
        for row in range(h):
            for col in range(w):
                player = board.get_cell((row, col))
                if player != Player.NONE:
                    x = offset_x + col * cell_size + cell_size / 2
                    y = offset_y + row * cell_size + cell_size / 2
                    
                    glPushMatrix()
                    glTranslatef(x, y, 0)
                    
                    if player == Player.X:
                        glColor3f(1.0, 0.4, 0.4)
                        self._draw_3d_x(cell_size * 0.3)
                    else:
                        glColor3f(0.4, 0.6, 1.0)
                        self._draw_3d_torus(cell_size * 0.25)
                    
                    glPopMatrix()
    
    def _draw_3d_x(self, size: float):
        """Draw an X shape in 3D"""
        glBegin(GL_LINES)
        glVertex3f(-size, -size, 0)
        glVertex3f(size, size, 0)
        glVertex3f(-size, size, 0)
        glVertex3f(size, -size, 0)
        glEnd()
        
        # Add some depth
        glBegin(GL_LINES)
        glVertex3f(-size, -size, -size * 0.2)
        glVertex3f(size, size, size * 0.2)
        glVertex3f(-size, size, -size * 0.2)
        glVertex3f(size, -size, size * 0.2)
        glEnd()
    
    def _draw_3d_torus(self, radius: float):
        """
        Draw a torus (donut shape) in 3D.
        Uses GLU quadric objects when available for better visuals.
        """
        try:
            # Try to use GLU quadric for better quality
            quadric = gluNewQuadric()
            gluQuadricDrawStyle(quadric, GLU_FILL)
            gluQuadricNormals(quadric, GLU_SMOOTH)
            
            # Draw as a circle with cylinder  for simplicity
            num_segments = 20
            glBegin(GL_LINE_LOOP)
            for i in range(num_segments):
                angle = 2 * math.pi * i / num_segments
                x = radius * math.cos(angle)
                y = radius * math.sin(angle)
                glVertex3f(x, y, 0)
            glEnd()
            
            gluDeleteQuadric(quadric)
        except:
            # Fallback: simple circle
            num_segments = 16
            glBegin(GL_LINE_LOOP)
            for i in range(num_segments):
                angle = 2 * math.pi * i / num_segments
                x = radius * math.cos(angle)
                y = radius * math.sin(angle)
                glVertex3f(x, y, 0)
            glEnd()
    
    def _draw_3d_cylinder(self, radius: float, height: float):
        """Draw a cylinder using GLU quadric when available"""
        try:
            quadric = gluNewQuadric()
            gluQuadricDrawStyle(quadric, GLU_FILL)
            gluQuadricNormals(quadric, GLU_SMOOTH)
            gluCylinder(quadric, radius, radius, height, 16, 1)
            gluDeleteQuadric(quadric)
        except:
            # Fallback: simple representation
            pass

# ============================================================================
# MAIN GAME CLASS
# ============================================================================

class TicTacToeGame:
    """Main game class"""
    
    def __init__(self):
        """Initialize game"""
        # Initialize settings
        self.settings = Settings()
        
        # Initialize Pygame
        if HAS_OPENGL and self.settings.graphics_quality == GraphicsQuality.ULTRA:
            # Try 3D mode
            try:
                self.screen = pygame.display.set_mode(
                    (WINDOW_WIDTH, WINDOW_HEIGHT),
                    pygame.OPENGL | pygame.DOUBLEBUF
                )
                self.use_3d = True
                self.renderer_3d = Renderer3D(WINDOW_WIDTH, WINDOW_HEIGHT)
            except Exception as e:
                print(f"Failed to initialize 3D mode: {e}")
                self.screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
                self.use_3d = False
                self.renderer_3d = None
        else:
            self.screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
            self.use_3d = False
            self.renderer_3d = None
        
        pygame.display.set_caption("TicTacToe 3D")
        
        # Initialize resource manager (must be before setup_ui)
        self.resource_manager = ResourceManager(self.settings)
        
        # Game state
        self.state = GameState.MENU
        self.game_mode = GameMode.CLASSIC
        self.board: Optional[Board] = None
        self.current_player = Player.X
        self.winner: Optional[Player] = None
        self.ai = AI(self.settings.difficulty)
        self.ai_player = Player.O
        self.play_against_ai = True
        
        # Timing
        self.clock = pygame.time.Clock()
        self.dt = 1.0
        self.fps_history = deque(maxlen=60)
        self.last_frame_time = time.time()
        
        # Systems
        self.particle_system = ParticleSystem(self.settings)
        self.animation_manager = AnimationManager(self.settings)
        
        # UI elements (initialized in setup_ui)
        self.menu_ui: Optional[Panel] = None
        self.settings_ui: Optional[Panel] = None
        self.settings_main_panel: Optional[Panel] = None
        self.game_ui: Optional[Panel] = None
        self.game_over_ui: Optional[Panel] = None
        self.splash_ui: Optional[Panel] = None
        self.dialog_ui: Optional[Panel] = None
        
        # Setup UI
        self.setup_ui()
        
        # Camera angle for 3D mode
        self.camera_angle = 45
        self.camera_rotation_speed = 0.3
        
        # Input state
        self.mouse_pos = (0, 0)
        self.hover_cell: Optional[Tuple[int, ...]] = None
        
        # Show splash screen initially
        self.state = GameState.SPLASH
        self.splash_start_time = time.time()
        self.splash_duration = 2.0
    
    def setup_ui(self):
        """
        Initialize all UI panels and elements.
        This fixes UI initialization errors by creating all top-level containers first.
        """
        # Calculate centered positions
        center_x = WINDOW_WIDTH // 2
        center_y = WINDOW_HEIGHT // 2
        
        # ===== SPLASH SCREEN =====
        self.splash_ui = Panel(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
        splash_label = Label(center_x - 150, center_y - 50, "TicTacToe 3D", font_size=48)
        splash_label.color = COLOR_WIN_LINE
        self.splash_ui.add_element(splash_label)
        subtitle = Label(center_x - 100, center_y + 20, "Loading...", font_size=24)
        self.splash_ui.add_element(subtitle)
        
        # ===== MAIN MENU =====
        self.menu_ui = Panel(center_x - 200, center_y - 200, 400, 400)
        
        # Title
        title = Label(200 - 150, 30, "TicTacToe 3D", font_size=36)
        title.color = COLOR_WIN_LINE
        self.menu_ui.add_element(title)
        
        # Game mode buttons
        classic_btn = Button(100, 100, 200, 40, "Classic 3x3", lambda: self.start_game(GameMode.CLASSIC))
        self.menu_ui.add_element(classic_btn)
        
        ultimate_btn = Button(100, 150, 200, 40, "Ultimate 9x9", lambda: self.start_game(GameMode.ULTIMATE))
        self.menu_ui.add_element(ultimate_btn)
        
        connect_btn = Button(100, 200, 200, 40, "Connect Four", lambda: self.start_game(GameMode.CONNECT))
        self.menu_ui.add_element(connect_btn)
        
        if HAS_OPENGL:
            threed_btn = Button(100, 250, 200, 40, "3D Mode (4x4x4)", lambda: self.start_game(GameMode.THREED))
            self.menu_ui.add_element(threed_btn)
        else:
            no_3d_label = Label(100, 250, "3D Mode: OpenGL Required", font_size=16)
            no_3d_label.color = (150, 150, 150)
            self.menu_ui.add_element(no_3d_label)
        
        # Settings and quit buttons
        settings_btn = Button(100, 310, 200, 40, "Settings", self.show_settings)
        self.menu_ui.add_element(settings_btn)
        
        quit_btn = Button(100, 360, 200, 40, "Quit", self.quit_game)
        self.menu_ui.add_element(quit_btn)
        
        # ===== SETTINGS MENU =====
        self.settings_ui = Panel(center_x - 300, center_y - 250, 600, 500)
        
        # Settings title
        settings_title = Label(250, 20, "Settings", font_size=32)
        settings_title.color = COLOR_WIN_LINE
        self.settings_ui.add_element(settings_title)
        
        # Create inner panel for sliders
        self.settings_main_panel = Panel(50, 70, 500, 350)
        self.settings_main_panel.background_color = COLOR_UI_BG
        
        # Volume sliders
        master_vol_slider = Slider(50, 50, 400, "Master Volume", 0.0, 1.0, 
                                   self.settings.master_volume,
                                   lambda v: setattr(self.settings, 'master_volume', v))
        self.settings_main_panel.add_element(master_vol_slider)
        
        sound_vol_slider = Slider(50, 100, 400, "Sound Volume", 0.0, 1.0, 
                                 self.settings.sound_volume,
                                 lambda v: setattr(self.settings, 'sound_volume', v))
        self.settings_main_panel.add_element(sound_vol_slider)
        
        music_vol_slider = Slider(50, 150, 400, "Music Volume", 0.0, 1.0, 
                                 self.settings.music_volume,
                                 lambda v: setattr(self.settings, 'music_volume', v))
        self.settings_main_panel.add_element(music_vol_slider)
        
        anim_speed_slider = Slider(50, 200, 400, "Animation Speed", 0.5, 2.0, 
                                   self.settings.animation_speed,
                                   lambda v: setattr(self.settings, 'animation_speed', v))
        self.settings_main_panel.add_element(anim_speed_slider)
        
        # Difficulty buttons
        diff_label = Label(50, 260, "AI Difficulty:", font_size=18)
        self.settings_main_panel.add_element(diff_label)
        
        easy_btn = Button(50, 290, 120, 30, "Easy", 
                         lambda: self._set_difficulty(Difficulty.EASY))
        self.settings_main_panel.add_element(easy_btn)
        
        medium_btn = Button(180, 290, 120, 30, "Medium", 
                           lambda: self._set_difficulty(Difficulty.MEDIUM))
        self.settings_main_panel.add_element(medium_btn)
        
        hard_btn = Button(310, 290, 120, 30, "Hard", 
                         lambda: self._set_difficulty(Difficulty.HARD))
        self.settings_main_panel.add_element(hard_btn)
        
        # Add settings panel to settings UI
        self.settings_ui.add_element(self.settings_main_panel)
        
        # Back button
        back_btn = Button(200, 440, 200, 40, "Back to Menu", self.show_menu)
        self.settings_ui.add_element(back_btn)
        
        # ===== GAME UI (IN-GAME HUD) =====
        self.game_ui = Panel(0, 0, WINDOW_WIDTH, 80)
        self.game_ui.background_color = (0, 0, 0, 0)  # Transparent
        
        # Current player label
        self.player_label = Label(20, 20, "Current Player: X", font_size=24)
        self.game_ui.add_element(self.player_label)
        
        # FPS label
        self.fps_label = Label(WINDOW_WIDTH - 150, 20, "FPS: 60", font_size=20)
        self.game_ui.add_element(self.fps_label)
        
        # Menu button
        menu_btn = Button(WINDOW_WIDTH - 120, 50, 100, 30, "Menu", self.show_menu)
        self.game_ui.add_element(menu_btn)
        
        # ===== GAME OVER UI =====
        self.game_over_ui = Panel(center_x - 200, center_y - 150, 400, 300)
        self.game_over_ui.visible = False
        
        # Result label (will be updated)
        self.result_label = Label(100, 30, "Game Over!", font_size=36)
        self.result_label.color = COLOR_WIN_LINE
        self.game_over_ui.add_element(self.result_label)
        
        # Buttons
        play_again_btn = Button(100, 150, 200, 40, "Play Again", 
                               lambda: self.start_game(self.game_mode))
        self.game_over_ui.add_element(play_again_btn)
        
        menu_btn = Button(100, 200, 200, 40, "Main Menu", self.show_menu)
        self.game_over_ui.add_element(menu_btn)
        
        quit_btn = Button(100, 250, 200, 40, "Quit", self.quit_game)
        self.game_over_ui.add_element(quit_btn)
        
        # ===== DIALOG UI (FOR MESSAGES) =====
        self.dialog_ui = Panel(center_x - 200, center_y - 100, 400, 200)
        self.dialog_ui.visible = False
    
    def _set_difficulty(self, difficulty: Difficulty):
        """Set AI difficulty"""
        self.settings.difficulty = difficulty
        self.ai = AI(difficulty)
        self.resource_manager.play_sound('click')
    
    def start_game(self, mode: GameMode):
        """Start a new game"""
        self.game_mode = mode
        self.state = GameState.PLAYING
        self.current_player = Player.X
        self.winner = None
        self.hover_cell = None
        
        # Create board based on mode
        if mode == GameMode.CLASSIC:
            self.board = Board((3, 3))
        elif mode == GameMode.ULTIMATE:
            # Simplified: using 9x9 board (proper Ultimate would need meta-board structure)
            # TODO: Implement true Ultimate TicTacToe with meta-board
            self.board = Board((9, 9))
        elif mode == GameMode.CONNECT:
            self.board = Board((6, 7))
        elif mode == GameMode.THREED:
            if not HAS_OPENGL:
                self.show_dialog("3D Mode Unavailable", "OpenGL is required for 3D mode.")
                self.show_menu()
                return
            self.board = Board((4, 4, 4))
        
        # Clear particles
        self.particle_system.clear()
        
        # Play sound
        self.resource_manager.play_sound('click')
    
    def show_menu(self):
        """Show main menu"""
        self.state = GameState.MENU
        self.resource_manager.play_sound('click')
    
    def show_settings(self):
        """Show settings menu"""
        self.state = GameState.SETTINGS
        self.resource_manager.play_sound('click')
    
    def show_dialog(self, title: str, message: str):
        """Show a dialog message"""
        # Update dialog UI
        self.dialog_ui.elements.clear()
        title_label = Label(100, 30, title, font_size=24)
        title_label.color = COLOR_WIN_LINE
        self.dialog_ui.add_element(title_label)
        
        msg_label = Label(50, 80, message, font_size=18)
        self.dialog_ui.add_element(msg_label)
        
        ok_btn = Button(150, 140, 100, 40, "OK", lambda: setattr(self.dialog_ui, 'visible', False))
        self.dialog_ui.add_element(ok_btn)
        
        self.dialog_ui.visible = True
    
    def quit_game(self):
        """Quit the game"""
        pygame.quit()
        sys.exit()
    
    def handle_events(self):
        """Handle all events"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.quit_game()
            
            # Handle UI events based on current state
            if self.state == GameState.SPLASH:
                pass  # No interaction during splash
            elif self.state == GameState.MENU:
                self.menu_ui.handle_event(event)
            elif self.state == GameState.SETTINGS:
                self.settings_ui.handle_event(event)
            elif self.state == GameState.PLAYING:
                self.game_ui.handle_event(event)
                if self.game_over_ui.visible:
                    self.game_over_ui.handle_event(event)
                else:
                    self.handle_game_event(event)
            
            # Dialog on top of everything
            if self.dialog_ui.visible:
                self.dialog_ui.handle_event(event)
    
    def handle_game_event(self, event: pygame.event.Event):
        """Handle game-specific events"""
        if event.type == pygame.MOUSEMOTION:
            self.mouse_pos = event.pos
            self.update_hover_cell()
        
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1 and self.current_player == Player.X:
                if self.hover_cell:
                    self.make_move(self.hover_cell)
        
        elif event.type == pygame.KEYDOWN:
            # Camera rotation in 3D mode
            if self.game_mode == GameMode.THREED and self.use_3d:
                if event.key == pygame.K_LEFT:
                    self.camera_angle -= 15
                elif event.key == pygame.K_RIGHT:
                    self.camera_angle += 15
    
    def update_hover_cell(self):
        """Update which cell the mouse is hovering over"""
        if not self.board or self.game_mode == GameMode.THREED:
            self.hover_cell = None
            return
        
        # Get board rendering position
        if self.game_mode == GameMode.CLASSIC:
            grid_size = 3
        elif self.game_mode == GameMode.ULTIMATE:
            grid_size = 9
        elif self.game_mode == GameMode.CONNECT:
            grid_size = (6, 7)
        else:
            self.hover_cell = None
            return
        
        # Calculate board position (centered)
        if isinstance(grid_size, tuple):
            rows, cols = grid_size
        else:
            rows = cols = grid_size
        
        board_width = cols * CELL_SIZE
        board_height = rows * CELL_SIZE
        board_x = (WINDOW_WIDTH - board_width) // 2
        board_y = (WINDOW_HEIGHT - board_height) // 2 + 40
        
        # Check if mouse is over board
        mx, my = self.mouse_pos
        if board_x <= mx < board_x + board_width and board_y <= my < board_y + board_height:
            col = (mx - board_x) // CELL_SIZE
            row = (my - board_y) // CELL_SIZE
            
            if 0 <= row < rows and 0 <= col < cols:
                self.hover_cell = (row, col)
            else:
                self.hover_cell = None
        else:
            self.hover_cell = None
    
    def make_move(self, pos: Tuple[int, ...]):
        """Make a move at the specified position"""
        if not self.board or self.winner:
            return
        
        if self.board.set_cell(pos, self.current_player):
            # Play sound
            self.resource_manager.play_sound('place')
            
            # Add particles
            if self.game_mode != GameMode.THREED:
                row, col = pos
                rows, cols = self.board.dimensions
                board_width = cols * CELL_SIZE
                board_height = rows * CELL_SIZE
                board_x = (WINDOW_WIDTH - board_width) // 2
                board_y = (WINDOW_HEIGHT - board_height) // 2 + 40
                
                px = board_x + col * CELL_SIZE + CELL_SIZE // 2
                py = board_y + row * CELL_SIZE + CELL_SIZE // 2
                
                color = COLOR_X if self.current_player == Player.X else COLOR_O
                self.particle_system.add_particles_at_coords(px, py, 15, color)
            
            # Add placement animation
            anim_key = f"place_{pos}"
            self.animation_manager.add_animation(anim_key, 0, 1, 0.3, 'ease_out')
            
            # Check for winner
            winner = self.board.check_winner()
            if winner:
                self.end_game(winner)
            elif self.board.is_full():
                self.end_game(None)  # Tie
            else:
                # Switch player
                self.current_player = Player.O if self.current_player == Player.X else Player.X
                
                # Update UI
                player_text = "X" if self.current_player == Player.X else "O"
                self.player_label.text = f"Current Player: {player_text}"
                
                # AI move
                if self.play_against_ai and self.current_player == self.ai_player:
                    # Delay AI move slightly
                    pygame.time.set_timer(pygame.USEREVENT + 1, 500, True)
    
    def do_ai_move(self):
        """Execute AI move"""
        if not self.board or self.winner:
            return
        
        ai_move = self.ai.get_move(self.board, self.ai_player)
        if ai_move:
            self.make_move(ai_move)
    
    def end_game(self, winner: Optional[Player]):
        """End the game"""
        self.winner = winner
        
        # Play sound
        if winner:
            self.resource_manager.play_sound('win')
            # Add win particles
            for _ in range(50):
                x = random.randint(100, WINDOW_WIDTH - 100)
                y = random.randint(200, WINDOW_HEIGHT - 200)
                self.particle_system.add_particles_at_coords(x, y, 10, COLOR_WIN_LINE)
        else:
            self.resource_manager.play_sound('tie')
        
        # Update game over UI
        if winner == Player.X:
            self.result_label.text = "X Wins!"
            self.result_label.color = COLOR_X
        elif winner == Player.O:
            self.result_label.text = "O Wins!"
            self.result_label.color = COLOR_O
        else:
            self.result_label.text = "It's a Tie!"
            self.result_label.color = COLOR_UI_TEXT
        
        self.game_over_ui.visible = True
    
    def update(self):
        """Update game state"""
        # Calculate delta time and FPS
        current_time = time.time()
        self.dt = (current_time - self.last_frame_time) * 60  # Normalize to 60 FPS
        self.last_frame_time = current_time
        
        fps = self.clock.get_fps()
        self.fps_history.append(fps)
        avg_fps = sum(self.fps_history) / len(self.fps_history) if self.fps_history else 60
        
        # Update FPS display
        if self.settings.show_fps and self.fps_label:
            self.fps_label.text = f"FPS: {int(avg_fps)}"
        
        # Update based on state
        if self.state == GameState.SPLASH:
            if time.time() - self.splash_start_time > self.splash_duration:
                self.state = GameState.MENU
        
        elif self.state == GameState.PLAYING:
            # Update particles
            self.particle_system.update(self.dt)
            
            # Update game UI
            self.game_ui.update(self.dt)
            if self.game_over_ui.visible:
                self.game_over_ui.update(self.dt)
            
            # Handle AI move timer
            for event in pygame.event.get(pygame.USEREVENT + 1):
                self.do_ai_move()
        
        # Update dialog
        if self.dialog_ui.visible:
            self.dialog_ui.update(self.dt)
    
    def render(self):
        """Render game"""
        # Check if we should use 3D rendering
        if self.use_3d and self.state == GameState.PLAYING and self.game_mode == GameMode.THREED:
            # Use OpenGL rendering
            if self.renderer_3d and self.board:
                self.renderer_3d.render_3d_board(self.board, self.camera_angle)
            return  # OpenGL handles display.flip internally
        
        # 2D Rendering
        self.screen.fill(COLOR_BACKGROUND)
        
        if self.state == GameState.SPLASH:
            self.splash_ui.draw(self.screen)
        
        elif self.state == GameState.MENU:
            self.menu_ui.draw(self.screen)
        
        elif self.state == GameState.SETTINGS:
            self.settings_ui.draw(self.screen)
        
        elif self.state == GameState.PLAYING:
            # Draw game board
            self.draw_board()
            
            # Draw particles
            self.particle_system.draw(self.screen)
            
            # Draw game UI
            self.game_ui.draw(self.screen)
            
            # Draw game over UI if visible
            if self.game_over_ui.visible:
                # Draw semi-transparent overlay
                overlay = pygame.Surface((WINDOW_WIDTH, WINDOW_HEIGHT))
                overlay.set_alpha(128)
                overlay.fill((0, 0, 0))
                self.screen.blit(overlay, (0, 0))
                
                self.game_over_ui.draw(self.screen)
        
        # Draw dialog if visible
        if self.dialog_ui.visible:
            overlay = pygame.Surface((WINDOW_WIDTH, WINDOW_HEIGHT))
            overlay.set_alpha(128)
            overlay.fill((0, 0, 0))
            self.screen.blit(overlay, (0, 0))
            self.dialog_ui.draw(self.screen)
        
        pygame.display.flip()
    
    def draw_board(self):
        """Draw the game board"""
        if not self.board:
            return
        
        rows, cols = self.board.dimensions if not self.board.is_3d else (self.board.dimensions[1], self.board.dimensions[2])
        
        # Calculate board position (centered)
        board_width = cols * CELL_SIZE
        board_height = rows * CELL_SIZE
        board_x = (WINDOW_WIDTH - board_width) // 2
        board_y = (WINDOW_HEIGHT - board_height) // 2 + 40
        
        # Draw hover effect
        if self.hover_cell and not self.winner:
            hrow, hcol = self.hover_cell
            hover_rect = pygame.Rect(
                board_x + hcol * CELL_SIZE,
                board_y + hrow * CELL_SIZE,
                CELL_SIZE,
                CELL_SIZE
            )
            hover_surf = pygame.Surface((CELL_SIZE, CELL_SIZE))
            hover_surf.set_alpha(100)
            hover_surf.fill(COLOR_HOVER[:3])
            self.screen.blit(hover_surf, hover_rect)
        
        # Draw grid lines
        for i in range(rows + 1):
            y = board_y + i * CELL_SIZE
            pygame.draw.line(self.screen, COLOR_GRID, (board_x, y), (board_x + board_width, y), GRID_WIDTH)
        
        for i in range(cols + 1):
            x = board_x + i * CELL_SIZE
            pygame.draw.line(self.screen, COLOR_GRID, (x, board_y), (x, board_y + board_height), GRID_WIDTH)
        
        # Draw pieces
        for row in range(rows):
            for col in range(cols):
                player = self.board.get_cell((row, col))
                if player != Player.NONE:
                    center_x = board_x + col * CELL_SIZE + CELL_SIZE // 2
                    center_y = board_y + row * CELL_SIZE + CELL_SIZE // 2
                    
                    # Check for animation
                    anim_key = f"place_{(row, col)}"
                    anim_value = self.animation_manager.get_value(anim_key)
                    if anim_value is not None and not self.animation_manager.is_finished(anim_key):
                        scale = anim_value
                    else:
                        scale = 1.0
                        if anim_key in self.animation_manager.animations:
                            self.animation_manager.remove(anim_key)
                    
                    if player == Player.X:
                        self.draw_x(center_x, center_y, CELL_SIZE // 3, scale)
                    else:
                        self.draw_o(center_x, center_y, CELL_SIZE // 3, scale)
    
    def draw_x(self, x: int, y: int, size: int, scale: float = 1.0):
        """Draw an X"""
        size = int(size * scale)
        width = max(3, int(6 * scale))
        pygame.draw.line(self.screen, COLOR_X, (x - size, y - size), (x + size, y + size), width)
        pygame.draw.line(self.screen, COLOR_X, (x + size, y - size), (x - size, y + size), width)
    
    def draw_o(self, x: int, y: int, size: int, scale: float = 1.0):
        """Draw an O"""
        size = int(size * scale)
        width = max(3, int(6 * scale))
        pygame.draw.circle(self.screen, COLOR_O, (x, y), size, width)
    
    def run(self):
        """Main game loop"""
        running = True
        
        while running:
            self.handle_events()
            self.update()
            self.render()
            self.clock.tick(FPS)

# ============================================================================
# MAIN ENTRY POINT
# ============================================================================

def main():
    """Main entry point"""
    try:
        game = TicTacToeGame()
        game.run()
    except Exception as e:
        print(f"Fatal error: {e}")
        import traceback
        traceback.print_exc()
        pygame.quit()
        sys.exit(1)

if __name__ == "__main__":
    main()
