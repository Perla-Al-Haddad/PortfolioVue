<template>
  <section class="container col-md-12 pt-4 mb-6" id="projects">
    <h5 class="fw-bolder mb-4 text-dark">Projects</h5>

    <FeaturedProject
      v-for="(project, index) in featuredProjects"
      :key="index"
      :index="index"
      :project="project"
    />

    <h4 class="text-light text-center my-5">Other noteworthy projects</h4>

    <div class="row justify-content-center pb-5">
      <div class="col-12 col-md-10">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <OtherProject
            v-for="(project, index) in otherProjects"
            :key="index"
            :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeaturedProject from "./projects/FeaturedProject.vue";
import OtherProject from "./projects/OtherProject.vue";

export default {
  name: "ProjectSection",
  components: {
    FeaturedProject,
    OtherProject,
  },
  data() {
    return {
      featuredProjects: [
        {
          name: "Explore Health Careers",
          url: "https://explorehealthcareers.org/",
          description:
            "ExploreHealthCareers.org is a comprehensive platform that allows users to explore over 100 healthcare career paths, with detailed job profiles, educational pathways, salary expectations, and a Career Search Tool. It also features a user-friendly CMS admin tool, enabling easy updates and efficient responses to client requests.",
          skills: [
            { type: "text", label: "Django" },
            { type: "text", label: "Python" },
            { type: "link", label: "Wagtail", url: "https://wagtail.org/" },
            { type: "text", label: "Hotwire / TurboJS / StimulusJS" },
            { type: "text", label: "HTML / CSS / SCSS / Javascript" },
            { type: "text", label: "Tailwind" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Redis" },
            { type: "text", label: "Docker" },
            { type: "text", label: "AWS" },
            { type: "text", label: "Opensearch" },
          ],
          images: ["ehc_01.webp", "ehc_02.webp", "ehc_03.webp", "ehc_04.webp", "ehc_05.webp"],
        },
        {
          name: "ResidencyCAS.com",
          url: "https://residencycas.com/",
          description:
            "I worked on the ResidencyCAS resource hub, created to guide applicants, program directors, clerkship advisors, and medical schools. The site offers clear, detailed resources to help users navigate the residency selection process and make the most of the platform’s features.",
          skills: [
            { type: "text", label: "Django" },
            { type: "text", label: "Python" },
            { type: "link", label: "Wagtail", url: "https://wagtail.org/" },
            { type: "text", label: "Hotwire / TurboJS / StimulusJS" },
            { type: "text", label: "HTML / CSS / SCSS / Javascript" },
            { type: "text", label: "Tailwind" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Redis" },
            { type: "text", label: "Docker" },
            { type: "text", label: "AWS" },
          ],
          images: ["rescas_01.webp", "rescas_02.webp", "rescas_03.webp"],
        },
        {
          name: "MyLiaison",
          url: "https://myliaison.com/",
          description:
            "MyLiaison is a platform that allows students to search for schools and undergraduate/graduate programs. Users can create an account, linked to the Living Profile project, to save their personal and educational data. The site also offers articles on student resources and a career explorer to help guide students through their academic and professional journey.",
          skills: [
            { type: "text", label: "Django" },
            { type: "text", label: "Python" },
            { type: "text", label: "Java" },
            { type: "link", label: "Quarkus", url:"https://quarkus.io/" },
            { type: "link", label: "Wagtail", url: "https://wagtail.org/" },
            { type: "text", label: "Hotwire / TurboJS / StimulusJS" },
            { type: "text", label: "HTML / CSS / SCSS / Javascript" },
            { type: "text", label: "Tailwind" },
            { type: "link", label: "Keycloak", url: "https://www.keycloak.org/" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Redis" },
            { type: "text", label: "Docker" },
            { type: "text", label: "AWS" },
            { type: "text", label: "Opensearch" },
          ],
          images: ["myl_01.webp", "myl_02.webp", "myl_03.webp", "myl_04.webp", "myl_05.webp"],
        },
        {
          name: "UN RCP Open Data Catalog",
          url: "https://datacatalog.unescwa.org/",
          description:
            "The UN RCP Open Data Catalog is a platform that aggregates and displays diverse data from online sources. It offers users a comprehensive resource to access, visualize, and search curated datasets.",
          skills: [
            {
              type: "link",
              label: "CKAN",
              url: "https://ckan.org/",
            },
            { type: "text", label: "Flask" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Docker" },
            { type: "text", label: "Solr" },
            { type: "text", label: "Spark" },
            { type: "text", label: "Azure" },
          ],
          images: ["dc_01.webp", "dc_02.webp", "dc_03.webp"],
        },
        {
          name: "UN Arab Region Data and Policy Support Hub",
          url: "https://dataportal.unescwa.org/",
          description:
            "The UN Arab Region Data and Policy Support Hub is dedicated to showcasing data for diverse indicators across Arab countries. This initiative aims to enhance understanding of regional trends, inform evidence-based policies, and promote informed discussions on vital socio-economic matters.",
          skills: [
            { type: "text", label: ".NET" },
            { type: "text", label: "MSSQL" },
            { type: "text", label: "Docker" },
            { type: "text", label: "D3.js" },
            { type: "text", label: "Apache Echarts" },
            { type: "text", label: "Azure functions" },
            { type: "text", label: "Azure blob storage" },
            { type: "text", label: "Delta" },
            { type: "text", label: "Databricks" },
          ],
          images: ["dp_01.webp", "dp_02.webp", "dp_03.webp", "dp_04.webp"],
        },
        {
          name: "Arab Region Geospatial Portal",
          url: "https://data.as-rcp.org/GIS/Landing",
          description:
            "Arab Region Geospatial Portal is a platform that enables users to visualize geospatial maps from an Esri Enterprise Portal. This project harnessed the ArcGIS JavaScript library and Esri Python API to effortlessly display and retrieve geospatial maps, offering an accessible way for users to engage with spatial data and derive meaningful insights.",
          skills: [
            {
              type: "link",
              label: "ArcGIS Javascript API",
              url: "https://developers.arcgis.com/javascript/latest/",
            },
            {
              type: "link",
              label: "ArcGIS Python API",
              url: "https://developers.arcgis.com/python/",
            },
            { type: "text", label: ".NET" },
            { type: "text", label: "Azure functions" },
            { type: "text", label: "Azure blob storage" },
          ],
          images: ["geo_01.webp", "geo_02.webp", "geo_03.webp"],
        },
      ],
      otherProjects: [
        {
          icon: "fa-solid fa-bug",
          name: "Future of Work",
          githubUrl: "",
          description:
            "Developed and maintained web scraping solutions using Python's Selenium and Beautiful Soup frameworks.",
          skills: [
            { type: "text", label: "Python" },
            { type: "text", label: "Selenium" },
            { type: "text", label: "Beautiful Soup" },
            { type: "text", label: "MongoDB" },
          ],
          learnMore: false,
        },
        {
          icon: "fa-solid fa-globe",
          name: "Arab Ground Water",
          githubUrl: "",
          description:
            "Compact endeavor akin to the Geospatial Portal. Aims to provide valuable insights into geospatial data for informed decision-making.",
          skills: [
            { type: "text", label: "Arcgis Javascript API" },
            { type: "text", label: "Arcgis Python API" },
            { type: "text", label: "Azure functions" },
            { type: "text", label: "Azure blob storage" },
          ],
          learnMore: false,
        },
        {
          icon: "fa-solid fa-fish",
          name: "VS Code Aquarium Extension",
          githubUrl: "https://github.com/Perla-Al-Haddad/vs-code-aquarium",
          description:
            "VSCode extension that adds a small digital aquarium to the Explorer sidebar. Enjoy the beauty of the sea right in your code editor!",
          skills: [
            { type: "text", label: "Typescript" },
            { type: "text", label: "HTML" },
            { type: "text", label: "CSS" },
            { type: "text", label: "Azure blob storage" },
          ],
          learnMore: true,
        },
        {
          icon: "fa-solid fa-meteor",
          name: "Asteroids FXML Remake",
          githubUrl: "https://github.com/Perla-Al-Haddad/Asteroids-FXML-Game",
          description:
            'Remake of the retro game "Asteroids" built using JavaFX.',
          skills: [
            { type: "text", label: "Java" },
            { type: "text", label: "JavaFX" },
          ],
          learnMore: true,
        },
        {
          icon: "fa-solid fa-rocket",
          name: "P5 Pixel Invasion",
          url: "https://perla-al-haddad.github.io/P5PixelInvasion/",
          githubUrl: "https://github.com/Perla-Al-Haddad/Asteroids-FXML-Game",
          description:
            'Remake of the retro game "Invaders" built using the P5.js library.',
          skills: [
            { type: "text", label: "HTML" },
            { type: "text", label: "CSS" },
            { type: "text", label: "Javascript" },
            { type: "text", label: "P5.js" },
          ],
          learnMore: true,
        },
        {
          icon: "fa-solid fa-address-card",
          name: "Portfolio Website",
          url: "https://perla-al-haddad.github.io/Portfolio/",
          githubUrl: "https://github.com/Perla-Al-Haddad/Asteroids-FXML-Game",
          description: "This website built with Vue.js!",
          skills: [
            { type: "text", label: "Vue.js" },
            { type: "text", label: "HTML" },
            { type: "text", label: "CSS" },
            { type: "text", label: "Javascript" },
          ],
          learnMore: true,
        },
      ],
    };
  },
};
</script>