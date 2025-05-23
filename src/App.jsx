import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import productselection from './productselection';

function Model() {
  const gltf = useGLTF('/use.glb');
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3; // Slow rotation
    }
  });
  return <primitive ref={ref} object={gltf.scene} scale={9} position={[0, 1, 0]} />;
}

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden', 
      background: 'black',
      margin: 0,
      padding: 0,
      maxWidth: 'none'
    }}>
      <img
        src="/soccer-bg.jpg"
        alt="Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 1,
        }}
      />
      <h1
        style={{
          color: '#eeeef3',
          fontFamily: 'inherit',
          fontWeight: 'bold',
          fontSize: 48,
          textAlign: 'center',
          paddingTop: 20,
          zIndex: 10,
          position: 'relative',
          margin: 0,
        }}
      >
        FlexiForgeKit
      </h1>
      <h2
        style={{
          color: '#ffffff',
          fontFamily: 'inherit',
          fontWeight: 'normal',
          fontSize: 24,
          textAlign: 'center',
          paddingTop: 10,
          zIndex: 15,
          position: 'relative',
          margin: 0,
        }}
      >
        Shape Your Vision, Flex Your Kit
      </h2>
      <div style={{ position: 'relative', zIndex: 10, width: 600, height: 400, margin: '60px auto 16px auto' }}>
        <Canvas camera={{ position: [0, 1, 6], fov: 80 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>
      <div style={{ position: 'relative', zIndex: 10, width: '100%', textAlign: 'center', marginTop: 50 }}>
        <div
          style={{
            color: '#e3e3ea',
            fontFamily: 'inherit',
            fontWeight: 'bold',
            fontSize: 32,
            marginTop: 50,
            paddingTop: 55,
          }}
        >
          Click Below to get started
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
          <button
            style={{
              width: 180,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              padding: 0,
              paddingTop: 20,
              background: 'transparent',
              zIndex: 20,
              boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/home')}
          >
            <div
              style={{
                width: 170,
                height: 56,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#4cdc64',
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                  color: '#0a1d0d',
                }}
              >
                Get Started
              </span>
            </div>
          </button>
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 10,
          right: 10,
          color: '#ffffff',
          fontFamily: 'inherit',
          fontSize: 10,
          zIndex: 20,
          textAlign: 'right',
        }}
      >
        Built by Imraan Jacobs. Jacobs Dynamic Development
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ProductSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;