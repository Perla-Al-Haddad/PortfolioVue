<template>
  <section class="container pt-5" id="about">
    <div class="row">
      <div class="col-12 col-md-6">
        <NameCard />
      </div>
      <div class="mb-6 col-12 col-md-6 position-relative">
        <svg
          class="position-absolute hexagon"
          style="transform: rotate(15deg); top: 45px; right: 0px; opacity: 0.2"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 19.1603L18.2009 15.5802L18.2009 8.41988L12 4.83975L5.79898 8.41988L5.79898 15.5801L12 19.1603ZM4.29898 16.4462L12 20.8923L19.7009 16.4462L19.7009 7.55386L12 3.1077L4.29898 7.55386L4.29898 16.4462Z"
          />
        </svg>

        <svg
          class="position-absolute hexagon"
          style="transform: rotate(15deg); top: 100px; right: 0px; opacity: 0.1"
          xmlns="http://www.w3.org/2000/svg"
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 19.1603L18.2009 15.5802L18.2009 8.41988L12 4.83975L5.79898 8.41988L5.79898 15.5801L12 19.1603ZM4.29898 16.4462L12 20.8923L19.7009 16.4462L19.7009 7.55386L12 3.1077L4.29898 7.55386L4.29898 16.4462Z"
          />
        </svg>

        <h5 class="fw-bolder mb-4 text-dark">About</h5>
        <!--<hr>-->

        <p class="text-gray">
          As a <span class="highlight-text">full stack web developer</span>, I
          am dedicated to crafting elegant products with a focus on top-tier
          <span class="highlight-text">code design</span> and
          <span class="highlight-text">performance</span>.
        </p>
        <p class="text-gray">
          I specialize in seamless user experiences, backed by
          <span class="highlight-text">adaptable</span>,
          <span class="highlight-text">efficient</span>
          code.
        </p>
        <p class="text-gray">
          With a constant drive to <span class="highlight-text">learn</span> and
          <span class="highlight-text">adapt</span>, I stay up-to-date with the
          latest tech trends to bring fresh innovation to my work.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import NameCard from "./about/NameCard.vue";

export default {
  name: "AboutSection",
  components: {
    NameCard,
  },
};
</script>
