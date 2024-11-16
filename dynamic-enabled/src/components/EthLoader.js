import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const EthLoader = ({ id }) => {
  const containerRef = useRef(null);
  const sceneInfo = useRef({
    scene: null,
    camera: null,
    renderer: null,
    model: null,
    animationFrameId: null
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, parseInt(id.split('-')[1]) * 100);

    return () => {
      clearTimeout(timer);
      setMounted(false);
    };
  }, [id]);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const initScene = () => {
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Scene setup
      const scene = new THREE.Scene();
      scene.background = null;

      // Adjust camera settings for smaller model view
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 3); // Moved camera closer

      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Adjusted lighting for smaller model
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      sceneInfo.current = {
        scene,
        camera,
        renderer,
        model: null,
        animationFrameId: null
      };

      // Load model with smaller scale
      const loader = new GLTFLoader();
      loader.load('/EthereumGrey.glb', (gltf) => {
        const model = gltf.scene.clone();
        // Adjust model scale to be smaller
        model.scale.set(0.3, 0.3, 0.3); // Reduced from 1.0 to 0.4
        // Center the model
        model.position.set(0, 0, 0);
        scene.add(model);
        sceneInfo.current.model = model;
      });
    };

    const animate = (time) => {
      const { scene, camera, renderer, model } = sceneInfo.current;

      if (model) {
        model.rotation.y += 0.008;
        // Reduced amplitude of movement
        model.rotation.x = Math.sin(time * 0.001) * 0.05;
        model.position.y = Math.sin(time * 0.001) * 0.05;
      }

      renderer.render(scene, camera);
      sceneInfo.current.animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!containerRef.current) return;

      const { camera, renderer } = sceneInfo.current;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    initScene();
    animate(0);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneInfo.current.animationFrameId) {
        cancelAnimationFrame(sceneInfo.current.animationFrameId);
      }
      
      if (sceneInfo.current.renderer) {
        const domElement = sceneInfo.current.renderer.domElement;
        if (domElement && domElement.parentNode) {
          domElement.parentNode.removeChild(domElement);
        }
        sceneInfo.current.renderer.dispose();
      }
    };
  }, [mounted]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center" 
    />
  );
};

export default React.memo(EthLoader);