<template>
  <div class="pb-5 featured-projects-container">
    <div
      :class="`${
        isOdd ? 'project-carousel-container' : 'project-description-container'
      } project-first-container`"
    >
      <ProjectCarousel :project="project" v-if="isOdd" />
      <ProjectDescription :project="project" v-if="!isOdd" :isOdd="isOdd" />
    </div>
    <div
      :class="`${
        !isOdd
          ? 'project-carousel-container'
          : 'project-description-container description-right'
      } project-second-container`"
    >
      <ProjectCarousel :project="project" v-if="!isOdd" />
      <ProjectDescription :project="project" v-if="isOdd" :isOdd="isOdd" />
    </div>
  </div>
</template>

<script>
import ProjectCarousel from "./featured_project_components/ProjectCarousel.vue";
import ProjectDescription from "./featured_project_components/ProjectDescription.vue";

export default {
  name: "FeaturedProject",
  components: {
    ProjectCarousel,
    ProjectDescription,
  },
  props: {
    index: Number,
    project: {
      name: String,
      url: String,
      description: String,
      skills: Array,
      images: Array,
    },
  },
  data() {
    let isOdd = (this.index + 1) % 2 != 0;

    return {
      isOdd: isOdd,
    };
  },
};
</script>

<style scoped>
.featured-projects-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
}

@media (min-width: 576px) {
  .project-description-container {
    grid-column: 1 / 8;
    z-index: 1 !important;
    width: min-content;
  }

  .project-description-container:has(.right-badge-justify) {
    display: flex;
    flex-flow: column;
    align-items: end;
  }

  .project-carousel-container {
    grid-column: 7 / -1;
    z-index: 0 !important;
    grid-column-end: 2 !important;
  }

  .project-first-container {
    position: relative;
    left: 30px;
    grid-area: 1 / 1 / -1 / 1;
    grid-column-start: 1;
  }

  .project-second-container {
    position: relative;
    right: 30px;
    grid-area: 1 / 1 / -1 / -1;
    grid-column-start: 3;
  }

  .description-right {
    text-align: end;
  }
}
</style>