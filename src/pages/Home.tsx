import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PlaneTakeoff, FolderHeart, ArrowRight, Sparkles } from 'lucide-react';
import { Earth } from '../components/Earth';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const handleCreateTrip = () => {
    navigate('/trip/create');
  };

  const handleMyTrips = () => {
    console.log('My trips clicked');
  };

  const features = [
    { number: '100+', label: 'Countries' },
    { number: '50K+', label: 'Active Users' },
    { number: '1M+', label: 'Trips Planned' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Content */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Travel Planning
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Journey{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Begins Here
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of travel planning with our AI-powered platform.
          Plan, organize, and enjoy your perfect trip with ease.
        </p>
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Stats Section */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 z-10 w-full px-4" style={{ display: 'none' }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="text-center p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {feature.number}
                </div>
                <div className="text-sm text-gray-400">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Earth Canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-[70vh]">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[5, 3, 5]} intensity={1.5} />
          <Earth />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.3}
            autoRotate={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Action Buttons */}
      <Button
        icon={PlaneTakeoff}
        label="Create New Trip"
        onClick={handleCreateTrip}
        position="left"
      />
      <Button
        icon={FolderHeart}
        label="My Trips"
        onClick={handleMyTrips}
        position="right"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}