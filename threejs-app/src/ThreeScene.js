import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const canvasRef = useRef();

  useEffect(() => {
    // this creates the  scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // establish the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // creates the test cube and add it to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // settings for the initial camera position
    camera.position.z = 5;

    // actual animation settings
    const animate = () => {
      requestAnimationFrame(animate);
      //rotation speed
      cube.rotation.x += .025;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    //clean and  unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
}

export default ThreeScene;
