<template>
  <h6 class="fs-7 fw-bold text-dark" style="font-family: monospace">
    Featured project
  </h6>
  <h4 class="text-blue mb-4">
    <a
      class="text-decoration-none text-blue"
      target="_blank"
      :href="project.url"
    >
      {{ project.name }}
      <i class="fa-sm text-dark fa-solid fa-link"></i
    ></a>
  </h4>
  <div class="sm-carousel-container">
    <ProjectCarousel :forMobile="true" :project="project" />
  </div>
  <div class="bg-dark p-4 rounded description-container">
    <p class="m-0">
      {{ project.description }}
    </p>
  </div>
  <div
    :class="`d-flex flex-wrap gap-2 pt-3 ${isOdd ? 'right-badge-justify' : ''}`"
  >
    <SkillBadgeList :skills="project.skills" />
  </div>
</template>

<script>
import ProjectCarousel from "./ProjectCarousel.vue";
import SkillBadgeList from "../../../utils/SkillBadgeList.vue";

export default {
  name: "ProjectDescription",
  props: {
    isOdd: Boolean,
    project: {
      name: String,
      url: String,
      description: String,
      skills: Array,
      images: Array,
    },
  },
  components: {
    SkillBadgeList,
    ProjectCarousel,
  },
};
</script>

<style scoped>
@media (min-width: 576px) {
  .description-container {
    width: 600px;
  }
}
.right-badge-justify {
  justify-content: end;
}
</style>