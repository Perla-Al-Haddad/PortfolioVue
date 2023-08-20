<template>
  <AboutSection />
  <ExperienceSection />
  <ProjectSection />
  <ContactSection />
</template>

<script>
import AboutSection from "../components/AboutSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ProjectSection from "../components/ProjectSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default {
  name: "Home",
  components: {
    AboutSection,
    ExperienceSection,
    ProjectSection,
    ContactSection,
  },
};
</script>

