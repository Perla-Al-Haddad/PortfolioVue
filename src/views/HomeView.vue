<template>
  <AboutSection />
  <ExperienceSection />
  <ProjectSection />
  <ContactSection />
</template>

<script>
import AboutSection from "../components/home_components/AboutSection.vue";
import ExperienceSection from "../components/home_components/ExperienceSection.vue";
import ProjectSection from "../components/home_components/ProjectSection.vue";
import ContactSection from "../components/home_components/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    AboutSection,
    ExperienceSection,
    ProjectSection,
    ContactSection,
  },
};
</script>

