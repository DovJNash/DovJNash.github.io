# 3D Model Assets

This directory contains 3D model files for ships and objects.

## Model Types

### Player Ships
- Fighter model
- Interceptor model
- Bomber model

### Enemy Ships
- Basic enemy fighter
- Heavy enemy cruiser
- Scout ship
- Boss flagship

### Environment Objects
- Space stations
- Asteroids
- Debris
- Capital ships

## Format Recommendations
- Format: GLTF (.gltf or .glb) preferred for web
- Alternative: OBJ, FBX (will need loaders)
- Include textures embedded or in separate files
- Optimize polygon count for performance

## Current Implementation
The game currently uses procedurally generated high-poly models created in code.
External 3D models can be loaded to replace procedural models for even better quality.

## Model Requirements
- Player ships: 1,000-10,000 polygons
- Enemy ships: 500-5,000 polygons  
- Boss ships: 10,000-50,000 polygons
- Environment objects: varies
