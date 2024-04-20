// src/components/Earth.js

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Earth = () => {
  const containerRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const earthRef = useRef();
  const previousTimeRef = useRef(0);
  const rotationSpeed = 0.0004;

  useEffect(() => {
    const container = containerRef.current;

    if (!rendererRef.current) {
      try {
        rendererRef.current = new THREE.WebGLRenderer();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        // rendererRef.current.setClearColor(0xffffff); // Set the clear color to white
        container.appendChild(rendererRef.current.domElement);
      } catch (error) {
        console.error('Error creating WebGL context:', error);
      }
    }

    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
    }

    if (!cameraRef.current) {
      cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      cameraRef.current.position.z = 15;
    }

    if (!earthRef.current) {
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color: 0x0a54f5, flatShading: true });
      earthRef.current = new THREE.Mesh(geometry, material);
      sceneRef.current.add(earthRef.current);
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 15, 15);
    sceneRef.current.add(light);

    const animate = (time) => {
      const elapsedTime = time - previousTimeRef.current;

      earthRef.current.rotation.x += rotationSpeed * elapsedTime;
      earthRef.current.rotation.y += rotationSpeed * elapsedTime;
      earthRef.current.rotation.z += rotationSpeed * elapsedTime*3;

      const scale = Math.min(3, 2 + window.scrollY / 100);
      earthRef.current.scale.set(scale, scale, scale);

      cameraRef.current.position.z = 15 + window.scrollY / 100;

      // rendererRef.current.render(sceneRef.current, cameraRef.current); ODKOMENTARISI OVO

      previousTimeRef.current = time;
      requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);

    animate(0); // Start the animation loop

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Earth;