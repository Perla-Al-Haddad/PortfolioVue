<template>
  <span
    v-for="(skill, index) in skills"
    :key="index"
    :class="`badge custom-pill ${
      skill.type == 'link' ? 'link-hover-light' : ''
    } `"
  >
    <a class="text-blue" v-if="skill.type == 'link'" :href="skill.url">
      {{ skill.label }}
    </a>
    <span v-else-if="skill.type == 'text'">
      {{ skill.label }}
    </span>
  </span>
</template>

<script>
export default {
  name: "SkillBadgeList",
  props: {
    skills: Array,
  },
};
</script>

<style scoped>
.custom-pill {
  color: #38b6ff;
  background-color: #38b6ff25;
  padding: 0.45rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}
.link-hover-light:hover {
  background-color: #38b6ff50;
}
</style>