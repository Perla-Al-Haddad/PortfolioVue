<template>
  <div
    :id="id"
    :class="{ carousel: true, slide: true, 'mb-3': true, 'd-none': isVisible }"
    data-bs-ride="carousel"
  >
    <a target="_blank" :href="project.url">
      <div class="carousel-inner" style="border-radius: 5px">
        <div
          v-for="(image, index) in project.images"
          :key="index"
          :class="`carousel-item ${index == 0 ? 'active' : ''}`"
          data-bs-interval="4000"
        >
          <img :src="getImgUrl(image)" class="d-block w-100" :alt="image" />
        </div>
      </div>
    </a>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    forMobile: { type: Boolean, default: false },
    project: {
      name: String,
      url: String,
      description: String,
      skills: Array,
      images: Array,
    },
  },
  beforeMount() {
    this.resize();
  },
  mounted() {
    window.addEventListener("resize", this.resize);
  },
  unmounted() {
    window.addEventListener("resize", this.resize);
  },
  data() {
    const id =
      this.project.name.toLowerCase().replaceAll(" ", "-") +
      "-" +
      Math.floor(Math.random() * 100);

    return {
      id: id,
      isVisible: true,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
    resize() {
      if (this.forMobile) {
        this.isVisible = window.innerWidth >= 992;
      } else {
        this.isVisible = window.innerWidth < 992;
      }
    },
  },
};
</script>

<style scoped>
.carousel-item:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #38b6ff55;
}

.carousel-control-next,
.carousel-control-prev {
  z-index: 0;
}
</style>