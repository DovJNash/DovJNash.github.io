/* ============================================
   ADVANCED PHYSICS ENGINE
   Momentum, Inertia, Collision Dynamics
   ============================================ */

class PhysicsEngine {
    constructor() {
        this.gravity = new THREE.Vector3(0, 0, 0); // No gravity in space
        this.airResistance = 0.001; // Minimal space drag
        this.collisionGroups = new Map();
        this.physicsObjects = [];
        
        // Collision detection optimization
        this.spatialGrid = new SpatialGrid(100);
    }
    
    createRigidBody(mesh, options = {}) {
        const {
            mass = 1,
            restitution = 0.5,
            friction = 0.1,
            linearDamping = 0.01,
            angularDamping = 0.01,
            collisionGroup = 'default',
            collisionMask = ['default'],
            isKinematic = false,
            useGravity = false
        } = options;
        
        const rigidBody = {
            mesh: mesh,
            mass: mass,
            inverseMass: mass > 0 ? 1 / mass : 0,
            restitution: restitution,
            friction: friction,
            linearDamping: linearDamping,
            angularDamping: angularDamping,
            
            // Linear motion
            velocity: new THREE.Vector3(),
            acceleration: new THREE.Vector3(),
            force: new THREE.Vector3(),
            
            // Angular motion
            angularVelocity: new THREE.Vector3(),
            angularAcceleration: new THREE.Vector3(),
            torque: new THREE.Vector3(),
            
            // Collision
            collisionGroup: collisionGroup,
            collisionMask: collisionMask,
            boundingBox: new THREE.Box3(),
            boundingSphere: new THREE.Sphere(),
            
            // Flags
            isKinematic: isKinematic,
            useGravity: useGravity,
            isSleeping: false,
            
            // Collision callbacks
            onCollision: null,
            
            // Update bounding volumes
            updateBounds: function() {
                this.boundingBox.setFromObject(this.mesh);
                this.boundingSphere.setFromPoints([
                    this.boundingBox.min,
                    this.boundingBox.max
                ]);
            }
        };
        
        rigidBody.updateBounds();
        this.physicsObjects.push(rigidBody);
        
        // Add to collision group
        if (!this.collisionGroups.has(collisionGroup)) {
            this.collisionGroups.set(collisionGroup, []);
        }
        this.collisionGroups.get(collisionGroup).push(rigidBody);
        
        return rigidBody;
    }
    
    applyForce(rigidBody, force, point = null) {
        if (rigidBody.isKinematic) return;
        
        rigidBody.force.add(force);
        
        // Apply torque if force is applied off-center
        if (point) {
            const centerOfMass = rigidBody.mesh.position.clone();
            const r = point.clone().sub(centerOfMass);
            const torque = new THREE.Vector3().crossVectors(r, force);
            rigidBody.torque.add(torque);
        }
    }
    
    applyImpulse(rigidBody, impulse, point = null) {
        if (rigidBody.isKinematic) return;
        
        const velocityChange = impulse.clone().multiplyScalar(rigidBody.inverseMass);
        rigidBody.velocity.add(velocityChange);
        
        // Apply angular impulse if applied off-center
        if (point) {
            const centerOfMass = rigidBody.mesh.position.clone();
            const r = point.clone().sub(centerOfMass);
            const angularImpulse = new THREE.Vector3().crossVectors(r, impulse);
            rigidBody.angularVelocity.add(angularImpulse.multiplyScalar(rigidBody.inverseMass));
        }
    }
    
    update(deltaTime) {
        // Clamp deltaTime to prevent physics explosion
        deltaTime = Math.min(deltaTime, 0.1);
        
        // Update all rigid bodies
        this.physicsObjects.forEach(body => {
            if (body.isKinematic || body.isSleeping) return;
            
            // Apply gravity
            if (body.useGravity) {
                const gravityForce = this.gravity.clone().multiplyScalar(body.mass);
                body.force.add(gravityForce);
            }
            
            // Calculate acceleration from forces
            body.acceleration.copy(body.force).multiplyScalar(body.inverseMass);
            
            // Update linear velocity
            const velocityChange = body.acceleration.clone().multiplyScalar(deltaTime);
            body.velocity.add(velocityChange);
            
            // Apply linear damping
            body.velocity.multiplyScalar(1 - body.linearDamping);
            
            // Apply air resistance
            const airDrag = body.velocity.clone().multiplyScalar(-this.airResistance * body.velocity.length());
            body.velocity.add(airDrag.multiplyScalar(deltaTime));
            
            // Update position
            const positionChange = body.velocity.clone().multiplyScalar(deltaTime);
            body.mesh.position.add(positionChange);
            
            // Calculate angular acceleration from torques
            body.angularAcceleration.copy(body.torque).multiplyScalar(body.inverseMass);
            
            // Update angular velocity
            const angularVelocityChange = body.angularAcceleration.clone().multiplyScalar(deltaTime);
            body.angularVelocity.add(angularVelocityChange);
            
            // Apply angular damping
            body.angularVelocity.multiplyScalar(1 - body.angularDamping);
            
            // Update rotation
            const axis = body.angularVelocity.clone().normalize();
            const angle = body.angularVelocity.length() * deltaTime;
            if (angle > 0.0001) {
                body.mesh.rotateOnAxis(axis, angle);
            }
            
            // Reset forces and torques
            body.force.set(0, 0, 0);
            body.torque.set(0, 0, 0);
            
            // Update bounding volumes
            body.updateBounds();
            
            // Check for sleep
            if (body.velocity.lengthSq() < 0.01 && body.angularVelocity.lengthSq() < 0.01) {
                body.isSleeping = true;
            }
        });
        
        // Detect and resolve collisions
        this.detectCollisions();
    }
    
    detectCollisions() {
        // Update spatial grid
        this.spatialGrid.clear();
        this.physicsObjects.forEach(body => {
            this.spatialGrid.insert(body);
        });
        
        // Check collisions using spatial grid
        this.physicsObjects.forEach(bodyA => {
            if (bodyA.isKinematic) return;
            
            const nearby = this.spatialGrid.getNearby(bodyA);
            
            nearby.forEach(bodyB => {
                if (bodyA === bodyB) return;
                if (!this.shouldCollide(bodyA, bodyB)) return;
                
                const collision = this.checkCollision(bodyA, bodyB);
                if (collision.collided) {
                    this.resolveCollision(bodyA, bodyB, collision);
                    
                    // Call collision callbacks
                    if (bodyA.onCollision) {
                        bodyA.onCollision(bodyB, collision);
                    }
                    if (bodyB.onCollision) {
                        bodyB.onCollision(bodyA, collision);
                    }
                }
            });
        });
    }
    
    shouldCollide(bodyA, bodyB) {
        // Check collision masks
        return bodyA.collisionMask.includes(bodyB.collisionGroup);
    }
    
    checkCollision(bodyA, bodyB) {
        // First, quick sphere check
        const distance = bodyA.boundingSphere.center.distanceTo(bodyB.boundingSphere.center);
        const radiusSum = bodyA.boundingSphere.radius + bodyB.boundingSphere.radius;
        
        if (distance > radiusSum) {
            return { collided: false };
        }
        
        // More precise box collision
        const intersects = bodyA.boundingBox.intersectsBox(bodyB.boundingBox);
        
        if (!intersects) {
            return { collided: false };
        }
        
        // Calculate collision normal and penetration
        const centerA = bodyA.mesh.position.clone();
        const centerB = bodyB.mesh.position.clone();
        const normal = centerA.clone().sub(centerB).normalize();
        const penetration = radiusSum - distance;
        
        return {
            collided: true,
            normal: normal,
            penetration: penetration,
            point: centerB.clone().add(normal.clone().multiplyScalar(bodyB.boundingSphere.radius))
        };
    }
    
    resolveCollision(bodyA, bodyB, collision) {
        const { normal, penetration, point } = collision;
        
        // Separate objects
        if (!bodyA.isKinematic && !bodyB.isKinematic) {
            const totalInverseMass = bodyA.inverseMass + bodyB.inverseMass;
            const separationA = normal.clone().multiplyScalar(
                penetration * (bodyA.inverseMass / totalInverseMass)
            );
            const separationB = normal.clone().multiplyScalar(
                -penetration * (bodyB.inverseMass / totalInverseMass)
            );
            
            bodyA.mesh.position.add(separationA);
            bodyB.mesh.position.add(separationB);
            
            bodyA.updateBounds();
            bodyB.updateBounds();
        } else if (!bodyA.isKinematic) {
            bodyA.mesh.position.add(normal.clone().multiplyScalar(penetration));
            bodyA.updateBounds();
        } else if (!bodyB.isKinematic) {
            bodyB.mesh.position.add(normal.clone().multiplyScalar(-penetration));
            bodyB.updateBounds();
        }
        
        // Calculate relative velocity
        const relativeVelocity = bodyA.velocity.clone().sub(bodyB.velocity);
        const velocityAlongNormal = relativeVelocity.dot(normal);
        
        // Don't resolve if velocities are separating
        if (velocityAlongNormal > 0) return;
        
        // Calculate restitution
        const restitution = Math.min(bodyA.restitution, bodyB.restitution);
        
        // Calculate impulse scalar
        let impulseMagnitude = -(1 + restitution) * velocityAlongNormal;
        impulseMagnitude /= bodyA.inverseMass + bodyB.inverseMass;
        
        // Apply impulse
        const impulse = normal.clone().multiplyScalar(impulseMagnitude);
        
        if (!bodyA.isKinematic) {
            bodyA.velocity.add(impulse.clone().multiplyScalar(bodyA.inverseMass));
        }
        if (!bodyB.isKinematic) {
            bodyB.velocity.sub(impulse.clone().multiplyScalar(bodyB.inverseMass));
        }
        
        // Apply friction
        const tangent = relativeVelocity.clone()
            .sub(normal.clone().multiplyScalar(velocityAlongNormal))
            .normalize();
        
        const frictionMagnitude = -relativeVelocity.dot(tangent) * 
            Math.min(bodyA.friction, bodyB.friction);
        
        const frictionImpulse = tangent.multiplyScalar(frictionMagnitude);
        
        if (!bodyA.isKinematic) {
            bodyA.velocity.add(frictionImpulse.clone().multiplyScalar(bodyA.inverseMass));
        }
        if (!bodyB.isKinematic) {
            bodyB.velocity.sub(frictionImpulse.clone().multiplyScalar(bodyB.inverseMass));
        }
        
        // Wake up sleeping bodies
        bodyA.isSleeping = false;
        bodyB.isSleeping = false;
    }
    
    removeRigidBody(rigidBody) {
        const index = this.physicsObjects.indexOf(rigidBody);
        if (index > -1) {
            this.physicsObjects.splice(index, 1);
        }
        
        // Remove from collision group
        const group = this.collisionGroups.get(rigidBody.collisionGroup);
        if (group) {
            const groupIndex = group.indexOf(rigidBody);
            if (groupIndex > -1) {
                group.splice(groupIndex, 1);
            }
        }
    }
    
    raycast(origin, direction, maxDistance = 1000) {
        const raycaster = new THREE.Raycaster(origin, direction, 0, maxDistance);
        const hits = [];
        
        this.physicsObjects.forEach(body => {
            const intersections = raycaster.intersectObject(body.mesh, true);
            if (intersections.length > 0) {
                hits.push({
                    body: body,
                    point: intersections[0].point,
                    distance: intersections[0].distance,
                    normal: intersections[0].face ? intersections[0].face.normal : null
                });
            }
        });
        
        // Sort by distance
        hits.sort((a, b) => a.distance - b.distance);
        
        return hits;
    }
    
    clear() {
        this.physicsObjects = [];
        this.collisionGroups.clear();
        this.spatialGrid.clear();
    }
}

// Spatial Grid for efficient collision detection
class SpatialGrid {
    constructor(cellSize) {
        this.cellSize = cellSize;
        this.cells = new Map();
    }
    
    getCellKey(x, y, z) {
        const cellX = Math.floor(x / this.cellSize);
        const cellY = Math.floor(y / this.cellSize);
        const cellZ = Math.floor(z / this.cellSize);
        return `${cellX},${cellY},${cellZ}`;
    }
    
    insert(body) {
        const position = body.mesh.position;
        const key = this.getCellKey(position.x, position.y, position.z);
        
        if (!this.cells.has(key)) {
            this.cells.set(key, []);
        }
        
        this.cells.get(key).push(body);
        body._gridKey = key;
    }
    
    getNearby(body) {
        const nearby = new Set();
        const position = body.mesh.position;
        
        // Check current cell and surrounding cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    const x = position.x + dx * this.cellSize;
                    const y = position.y + dy * this.cellSize;
                    const z = position.z + dz * this.cellSize;
                    const key = this.getCellKey(x, y, z);
                    
                    const cell = this.cells.get(key);
                    if (cell) {
                        cell.forEach(other => nearby.add(other));
                    }
                }
            }
        }
        
        return Array.from(nearby);
    }
    
    clear() {
        this.cells.clear();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PhysicsEngine, SpatialGrid };
}
