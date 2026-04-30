<template>
  <div class="container py-2">
    <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1">
        <router-link to="/#projects" class="text-blue text-decoration-none mb-3">
          <i class="fas fa-arrow-left"></i> Back to Projects
        </router-link>

        <h1 class="fw-bolder mb-4 text-dark">SIRI - Projet Photogrammétrie</h1>

        <div ref="containerRef" id="moteur-container"></div>
        <div id="loading-message" class="my-2">Loading...</div>

        <div class="row my-4">
          <div class="col-12">
            <h3 class="fw-bold mb-3">Technologies Utilisées</h3>
            <div class="d-flex flex-wrap gap-2">
              <SkillBadgeList :skills="skills" />
            </div>
          </div>
        </div>

        <div class="container d-flex flex-column flex-lg-row gap-4 mb-4">
            <div>
                <img :src="getImgUrl(image)" class="d-block w-100 rounded" :alt="image" />
            </div>
            <div class="col-lg-6">
                <p class="mt-4 text-gray">
                  Le projet consiste à créer un modèle 3D d'une chaussure à partir d'un ensemble de 130 images à l'aide de la photogrammétrie. Le modèle a été généré à l'aide du logiciel <a href="https://www.realityscan.com/" target="_blank">RealityScan</a>.</p> <p class="mt-4 text-gray">Plusieurs essais ont été nécessaires pour obtenir des résultats satisfaisants, le meilleur résultat ayant été obtenu en plaçant la chaussure sur une feuille de papier blanc marquée de cercles et de croix. Ces repères ont fourni des références visuelles supplémentaires, aidant le logiciel à établir des correspondances précises entre les images.</p>

                  <p class="mt-4 text-gray">
                    Le post-traitement et le nettoyage ont été effectués dans <a href="https://www.blender.org/" target="_blank">Blender</a> à l'aide d'outils de modélisation et de sculpture.</p> 
                  
                  <p class="mt-4 text-gray">Le modèle de base obtenu étant trop volumineux pour être hébergé sur GitHub Pages, il a été compressé à l'aide de l'outil en ligne disponible sur <a href="https://compress-glb.com/" target="_blank">compress-glb.com</a>. De plus, la bibliothèque de compression Draco a été intégrée afin de permettre le chargement du modèle 3D compressé dans Three.js.
                  </p>

                  <div class="mt-4 d-flex gap-2">
                    <p class="text-gray">Lien du project:</p>
                    <GithubLink :url="githubUrl" />
                  </div>
            </div>
        </div>

        <div class="mb-4">
          <h3 class="fw-bold mb-3">Comparaison avant et après nettoyage avec Blender</h3>
          <div class="row mx-5">
            <div class="col-12 col-md-6 mb-2">
              <img :src="getImgUrl('siri_base_shoe.png')" loading="lazy" class="img-fluid rounded w-100" alt="siri_base_shoe.png" />
            </div>
            <div class="col-12 col-md-6 mb-2">
              <img :src="getImgUrl('siri_clean_shoe.png')" loading="lazy" class="img-fluid rounded w-100" alt="siri_clean_shoe.png" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import SkillBadgeList from "../../components/utils/SkillBadgeList.vue";
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import GithubLink from "../../components/utils/GithubLink.vue";

const githubUrl = "https://github.com/Perla-Al-Haddad/PortfolioVue/blob/main/src/views/projects/SiriProject.vue";
const skills = ref([
  { type: "text", label: "RealityScan" },
  { type: "text", label: "Blender" },
  { type: "text", label: "ThreeJs" },
]);


let isScrolling;

window.addEventListener('scroll', () => {
  isScrolling = true;
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    isScrolling = false;
  }, 100);
}, { passive: true });


const image = ref("siri_shoe.png");

const containerRef = ref(null);
let scene, camera, renderer, controls;
let isVisible = false;

const getImgUrl = (pic) => {
  return require("@/assets/images/" + pic);
};

onMounted(() => {
  const width = containerRef.value.clientWidth;
  const height = window.innerHeight * 0.8;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
  camera.position.set( 2,1.5,2 );

  renderer = new THREE.WebGLRenderer( { antialias: false, precision: "mediump" } );
  renderer.setSize( width, height );
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    center.y -= 0.5;
    model.position.sub(center); 
    scene.add(model);
    document.getElementById('loading-message').style.display = 'none';
    dracoLoader.dispose();
  }, undefined, ( error ) => {
    console.error( 'Error loading model:', error );
  } );

  const size = 10;
  const divisions = 10;
  const gridHelper = new THREE.GridHelper( size, divisions );
  scene.add( gridHelper );
  
  const axesHelper = new THREE.AxesHelper( 2 );
  scene.add( axesHelper );

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
    if (isVisible) {
      animate();
    }
  });
  
  observer.observe(containerRef.value);
});

function animate() {
  if (!isVisible || isScrolling) {
    return;
  } 
  controls.update();
  renderer.render(scene, camera);
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
