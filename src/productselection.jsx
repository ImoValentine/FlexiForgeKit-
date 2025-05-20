import React, { useState, Suspense } from 'react';
import './productselection.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// 3D Model Component
function Model({ color }) {
  const gltf = useGLTF('/Meshdef.glb');
  const ref = React.useRef();

  React.useEffect(() => {
    if (color && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.material && child.material.color) {
          child.material.color.set(color);
        }
      });
    }
  }, [color, gltf.scene]);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={4}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function ProductSelection() {
  const [selectedKit, setSelectedKit] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState('');

  return (
    <div className="flex w-screen h-screen min-h-[900px] bg-black overflow-hidden">
      {/* Left Panel (Sidebar) */}
      <aside className="sidebar w-[80px] bg-[#202C36] flex flex-col justify-center items-center py-6">
        <button className="color-picker-btn" onClick={() => setShowColorPicker(prev => !prev)}>
          🎨
        </button>
        {showColorPicker && (
          <div className="color-picker-panel">
            <div className="preset-colors">
              <button
                style={{ backgroundColor: '#ffffff' }}
                onClick={() => setSelectedColor('#ffffff')}
                title="Default Color"
              />
              <button
                style={{ backgroundColor: '#FF0000' }}
                onClick={() => setSelectedColor('#FF0000')}
              />
              <button
                style={{ backgroundColor: '#00FF00' }}
                onClick={() => setSelectedColor('#00FF00')}
              />
              <button
                style={{ backgroundColor: '#0000FF' }}
                onClick={() => setSelectedColor('#0000FF')}
              />
              <button
                style={{ backgroundColor: '#FFFF00' }}
                onClick={() => setSelectedColor('#FFFF00')}
              />
            </div>
            <div className="custom-color">
              <input
                type="text"
                placeholder="#hex"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="custom-color-input"
              />
              <button onClick={() => setSelectedColor(customColor)}>Apply</button>
            </div>
          </div>
        )}
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col px-8 py-6 overflow-auto relative">
        {/* Top Bar */}
        <div className="top-bar sticky top-0 flex items-center mb-8 py-4">
          <h1 className="top-bar-heading text-white text-3xl font-bold mr-8">
            Select Kit to View/Edit
          </h1>
          <input
            className="top-bar-search flex-1 rounded-full px-6 py-2 bg-[#202C36] text-white placeholder:text-gray-400 max-w-[400px]"
            placeholder="Search for products"
          />
          <div className="flex items-center gap-4 ml-6">
            <img src="/icon1.svg" alt="" className="w-6 h-6" />
            <img src="/icon2.svg" alt="" className="w-6 h-6" />
            <img src="/icon3.svg" alt="" className="w-6 h-6" />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[1, 2, 3, 4].map((kit, index) => (
            <div
              key={index}
              className="product-card bg-white p-2 grid grid-cols-[48px_1fr] items-center shadow h-24 border border-red-500 cursor-pointer"
              onClick={() => setSelectedKit(kit === 1 ? 'kit1' : null)}
            >
              <div className="w-12 h-12">
                <img
                  src={`/kit${kit}.png`}
                  alt={`Kit ${kit}`}
                  className="card-icon"
                />
              </div>
              <div className="pl-2">
                <div className="font-bold text-lg">{`Kit ${kit}`}</div>
                <div className="text-gray-500 text-sm mb-2">You decide on design</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-400">Status</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full w-24 overflow-hidden">
                    <div className="h-2 bg-yellow-400 w-1/2" />
                  </div>
                  <span className="text-xs text-gray-400">Detail</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center mt-8">
          <button className="proceed-button bg-[#4cdc64] text-[#0a1d0d] font-bold text-2xl px-16 py-4 rounded-lg shadow">
            Proceed
          </button>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-[420px] bg-[#202C36] p-4 flex flex-col h-full">
        <div className="bg-white rounded-2xl flex-1 right-panel-selected-details">
          {/* 3D Model or Fallback Image - Reduced height */}
          <div className="model-wrapper">
            {selectedKit === 'kit1' ? (
              <div className="model-container">
                <Canvas camera={{ position: [0, 1, 3.5], fov: 60 }} style={{ height: '100%' }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <Suspense fallback={null}>
                    <Model color={selectedColor} />
                  </Suspense>
                  <OrbitControls enablePan={false} />
                </Canvas>
              </div>
            ) : (
              <div className="model-display">
                <img src="/kit1.png" alt="Selected Kit" />
              </div>
            )}
          </div>
          {/* Kit Components - Adjusted to appear slightly higher */}
          <div className="kit-components">
            <div className="kit-structure-wrapper">
              <div className="kit-structure-heading">Kit Structure</div>
            </div>
            <div className="components-group bg-white rounded-xl p-2">
              {[
                { icon: '📈', title: 'Main structure' },
                { icon: '🎨', title: 'Color Selection' },
                { icon: '📊', title: 'Quantity' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-1"
                >
                  <div className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">
                      {item.icon}
                    </span>
                    <span className="font-bold text-lg">{item.title}</span>
                  </div>
                  <span className="bg-yellow-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">View</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}