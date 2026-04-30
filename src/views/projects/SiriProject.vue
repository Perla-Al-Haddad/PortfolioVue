<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <router-link to="/#projects" class="text-blue text-decoration-none mb-3">
          <i class="fas fa-arrow-left"></i> Back to Projects
        </router-link>

        <h1 class="fw-bolder mb-4 text-dark">SIRI - Photogrammetry Project</h1>

        <div class="row mb-4">
          <div class="col-12">
            <h3 class="fw-bold mb-3">Technologies Used</h3>
            <div class="d-flex flex-wrap gap-2">
              <SkillBadgeList :skills="skills" />
            </div>
          </div>
        </div>

        <div ref="containerRef" id="moteur-container"></div>

      </div>
    </div>
  </div>
</template>
<script setup>
import SkillBadgeList from "../../components/utils/SkillBadgeList.vue";
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'; // Fixed path
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const skills = ref([
  { type: "text", label: "RealityScan" },
  { type: "text", label: "Blender" },
  { type: "text", label: "ThreeJs" },
]);

const containerRef = ref(null);
let scene, camera, renderer, controls;

onMounted(() => {
  const width = containerRef.value.clientWidth;
  const height = window.innerHeight * 0.6;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( width, height );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setAnimationLoop( animate );
  containerRef.value.appendChild( renderer.domElement );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = false;

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(2, 2, 2);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/PortfolioVue/draco/');
  
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  
  loader.load( '/PortfolioVue/shoe_clean.compressed.glb', ( gltf ) => {
    const model = gltf.scene;
    
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim;
    model.scale.set(scale, scale, scale);

    box.setFromObject(model); 
    const center = box.getCenter(new THREE.Vector3());
    center.y -= 0.68;
    model.position.sub(center); 

    scene.add(model);
  }, undefined, ( error ) => {
    console.error( 'Error loading model:', error );
  } );

  const size = 10;
  const divisions = 10;
  const gridHelper = new THREE.GridHelper( size, divisions );
  scene.add( gridHelper );
});

function animate( ) {
  controls.update();
  renderer.render( scene, camera );
}
</script>

<style scoped>
ul {
  list-style-position: inside;
}

li {
  margin-bottom: 10px;
}
</style>
