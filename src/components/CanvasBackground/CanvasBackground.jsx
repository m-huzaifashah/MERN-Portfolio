import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Html, RoundedBox } from '@react-three/drei';

const LogoTile = ({ position, rotation, scale, color, iconUrl, title, imgWidth = '80px', imgHeight = '80px' }) => {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group position={position} scale={scale}>
        <RoundedBox ref={mesh} args={[2, 2, 0.2]} radius={0.15} smoothness={4} rotation={rotation}>
          <meshStandardMaterial 
            color={color} 
            roughness={0.1} 
            metalness={0.7} 
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.75}
          />
          {/* Front face HTML logo with neon glow */}
          <Html transform position={[0, 0, 0.11]} center distanceFactor={10} style={{ pointerEvents: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '150px', height: '150px' }}>
              <img src={iconUrl} alt={title} style={{ width: imgWidth, height: imgHeight, objectFit: 'contain', filter: `drop-shadow(0 0 15px ${color}) drop-shadow(0 4px 6px rgba(0,0,0,0.5))` }} />
            </div>
          </Html>
          {/* Back face HTML logo */}
          <Html transform position={[0, 0, -0.11]} rotation={[0, Math.PI, 0]} center distanceFactor={10} style={{ pointerEvents: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '150px', height: '150px' }}>
              <img src={iconUrl} alt={title} style={{ width: imgWidth, height: imgHeight, objectFit: 'contain', filter: `drop-shadow(0 0 15px ${color}) drop-shadow(0 4px 6px rgba(0,0,0,0.5))` }} />
            </div>
          </Html>
        </RoundedBox>
      </group>
    </Float>
  );
};

const Particles = () => {
  const points = useRef();
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      points.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
      <directionalLight position={[-10, -10, 10]} intensity={1.5} color="#0ea5e9" />
      <directionalLight position={[-10, 10, -10]} intensity={2} color="#c084fc" />
      <directionalLight position={[10, -10, -10]} intensity={2} color="#3b82f6" />
      
      <Particles />
      
      {/* Logos: React, Node.js, Redis, Express.js, Postgres, MongoDB */}
      <LogoTile 
        title="React"
        iconUrl="https://cdn.simpleicons.org/react/61DAFB"
        color="#0ea5e9"
        position={[-6, 3, -5]} 
        rotation={[0.5, 0.5, 0]} 
        scale={1.2} 
      />
      
      <LogoTile 
        title="Node.js"
        iconUrl="https://cdn.simpleicons.org/nodedotjs/4ade80"
        color="#4ade80"
        position={[6, -3, -8]} 
        rotation={[-0.5, 0.2, 0]} 
        scale={1} 
        imgWidth="90px"
      />
      
      <LogoTile 
        title="Redis"
        iconUrl="https://cdn.simpleicons.org/redis/ef4444"
        color="#ef4444"
        position={[-5, -4, -10]} 
        rotation={[0.2, 0.8, 0]} 
        scale={1.5} 
      />
      
      <LogoTile 
        title="Express.js"
        iconUrl="https://cdn.simpleicons.org/express/ffffff"
        color="#f8fafc"
        position={[7, 4, -6]} 
        rotation={[0.1, 0.1, 0]} 
        scale={1.1} 
        imgWidth="130px"
        imgHeight="50px"
      />
      
      <LogoTile 
        title="Postgres"
        iconUrl="https://cdn.simpleicons.org/postgresql/38bdf8"
        color="#38bdf8"
        position={[-2, -6, -7]} 
        rotation={[-0.3, 0.4, 0]} 
        scale={1.3} 
        imgWidth="85px"
      />
      
      <LogoTile 
        title="MongoDB"
        iconUrl="https://cdn.simpleicons.org/mongodb/47A248"
        color="#10b981"
        position={[4, 5, -9]} 
        rotation={[0.4, -0.3, 0]} 
        scale={1.4} 
      />
    </>
  );
};

const CanvasBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', backgroundColor: 'var(--bg-color)' }}>
      <Canvas 
        dpr={1} 
        gl={{ powerPreference: "default", antialias: false, stencil: false, depth: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
