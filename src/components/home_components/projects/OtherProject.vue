<template>
  <div class="col">
    <div class="card h-100 bg-dark text-light">
      <div
        class="card-body px-4 py-4 d-flex flex-column align-items-end justify-content-between"
      >
        <div>
          <p class="mb-5 mt-3 text-blue text-center">
            <font-awesome-icon class="fa-2xl" :icon="project.icon" />
          </p>
          <div class="d-flex justify-content-between">
            <h5 class="card-title fw-bold mb-3 text-light">
              {{ project.name }}
            </h5>

            <div class="d-flex gap-2 align-items-baseline">
              <a
                v-if="project.url"
                class="text-blue"
                :href="project.url"
                aria-label="GitHub Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </a>

              <GithubLink v-if="project.githubUrl" :url="project.githubUrl" />
            </div>
          </div>
          <p class="card-text text-gray">
            {{ project.description }}
          </p>
          <div class="d-flex flex-wrap gap-2">
            <SkillBadgeList :skills="project.skills" />
          </div>
        </div>
        <LearnMoreLink v-if="project.learnMore" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillBadgeList from "../../utils/SkillBadgeList.vue";
import GithubLink from "../../utils/GithubLink.vue";
import LearnMoreLink from "../../utils/LearnMoreLink.vue";

export default {
  name: "OtherProject",
  components: { SkillBadgeList, GithubLink, LearnMoreLink },
  props: {
    project: {
      name: String,
      url: String,
      githubUrl: String,
      description: String,
      skills: Array,
      images: Array,
    },
  },
};
</script>
