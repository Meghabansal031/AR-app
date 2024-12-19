import React from 'react';
import 'aframe';
import 'aframe-extras';
import 'aframe-environment-component';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <a-scene
        vr-mode-ui="enabled: false"
        xrweb="ar: true"
        embedded
        renderer="antialias: true; colorManagement: true"
      >
        {/* Assets */}
        <a-assets>
          <a-asset-item id="charminar-glb" src="charminar.glb" ></a-asset-item>
        </a-assets>

        {/* Lighting */}
        <a-light type="ambient" intensity="0.5"></a-light>
        <a-light type="directional" intensity="1" position="1 2 0"></a-light>

        {/* Plane to Anchor Objects */}
        <a-plane
          position="0 -0.5 0"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
          shadow
        ></a-plane>

        {/* 3D Model */}
        <a-entity
          gltf-model="#charminar-glb"
          position="0 0 -2"
          scale="0.02 0.02 0.02"
          rotation="0 45 0"
          class="clickable"
          // animation="property: rotation; to: 0 405 0; loop: true; dur: 5000"
        ></a-entity>

        {/* Camera */}
        <a-camera
          position="0 1.6 0"
          look-controls="enabled: true"
          raycaster="objects: .clickable"
          cursor="fuse: true; fuseTimeout: 500"
        ></a-camera>
      </a-scene>
    </div>
  );
}

export default App;
