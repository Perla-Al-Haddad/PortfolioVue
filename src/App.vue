<template>
  <div id="appContent" :class="{ light: isLightMode }">
    <Header @toggle-light-mode="toggleIsLightMode()" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    // AboutSection,
    // ExperienceSection,
    // ProjectSection,
    // ContactSection,
    Footer,
  },
  data() {
    return {
      isLightMode: false,
    };
  },
  methods: {
    toggleIsLightMode() {
      this.isLightMode = !this.isLightMode;
    },
  },
};
</script>

<style>
body {
  background-color: rgb(16, 19, 45);
}

#appContent {
  font-family: "Ubuntu";
  background-color: rgb(16, 19, 45);
  color: rgb(188, 199, 215);
  overflow-x: hidden;
  transition: 0.1s ease-in-out;
  font-size: 80%;
}

.text-blue {
  color: #38b6ff;
}

.bg-blue {
  background-color: #38b6ff;
}

.bg-dark {
  background-color: rgb(36, 41, 78) !important;
}

.text-light {
  color: rgb(188, 199, 215) !important;
}

.text-gray {
  color: rgb(135, 142, 184) !important;
}

.text-dark {
  color: rgb(76, 79, 133) !important;
}

.accounts-links {
  transition: 0.2s ease-in-out;
}

.accounts-links:hover {
  transform: translate(0px, -3px);
}

.accounts-links a {
  transition: 0.2s ease-in-out;
}

.accounts-links:hover a {
  color: #38b6ff !important;
}

.highlight-text {
  /* text-transform: uppercase; */
  color: rgb(188, 199, 215) !important;
  /* font-weight: 700; */
  text-decoration: underline;
}

.link-hover-light,
.link-hover-light a {
  transition: 0.2s;
}

.link-hover-light:hover,
.link-hover-light:hover a {
  color: white;
  border-color: white;
  cursor: pointer;
}

.link-hover-light:hover {
  background-color: #38b6ff50;
}

.fs-7 {
  font-size: 0.9rem !important;
}

#appContent.light {
  background-color: #f6fcff;
  color: rgb(76, 79, 133);
}

#appContent.light .text-gray {
  color: rgb(76, 79, 133) !important;
}

#appContent.light .highlight-text {
  color: #38b6ff !important;
}

#appContent.light .text-dark {
  color: rgb(135, 142, 184) !important;
}

#appContent.light .bg-dark {
  background-color: #daf1fe !important;
  border: none;
}

#appContent.light .text-light {
  color: #38b6ff !important;
}

#appContent.light .btn-contact {
  color: #38b6ff;
}

#appContent.light .btn-contact:hover {
  color: white;
}

#appContent.light .hexagon path {
  display: none;
}

@media (max-width: 576px) {
  .mb-6 {
    margin-bottom: 3.5rem !important;
  }
}

@media (min-width: 576px) {
  #appContent {
    font-size: 100%;
  }
}
</style>
