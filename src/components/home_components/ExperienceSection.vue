<template>
  <section class="container col-md-12 pt-4 mb-6" id="experience">
    <h5 class="fw-bolder mb-4 text-dark">Experience</h5>
    <!--<hr>-->
    <div v-for="(job, index) in jobExperiences" :key="index" class="mb-5">
      <h4>
        <span class="text-blue">{{ job.jobTitle }}</span>
        <a
          :href="job.employerUrl"
          target="_blank"
          class="text-gray fs-6 text-decoration-none"
        >
          @ {{ job.employerName }}
        </a>
      </h4>
      <div class="row flex-row-reverse">
        <div class="col-12 col-md-3">
          <p class="text-blue fs-7 fw-bold experience-date">
            {{ job.daterange }}
          </p>
        </div>
        <div class="col-12 col-md-9">
          <p class="text-gray" v-html="job.description"></p>
        </div>
        <div class="d-flex flex-wrap gap-2 col-md-8 justify-content-end">
          <SkillBadgeList :skills="job.skills" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillBadgeList from "../utils/SkillBadgeList.vue";

export default {
  name: "ExperienceSection",
  components: {
    SkillBadgeList,
  },
  data() {
    return {
      jobExperiences: [
        {
          jobTitle: "Full Stack Web Developer",
          employerName: "UN-ESCWA",
          employerUrl: "https://www.unescwa.org/",
          description: `
            During my almost two years of work at UN-ESCWA, I thrived as a full
            stack web developer, tackling a multitude of projects
            simultaneously. My expertise spanned
            <span class="text-light"
              >front-end development, database design, search engine
              development, cloud migration, and data engineering pipelines</span
            >. I streamlined workflows through
            <span class="text-light"
              >containerized development and deployment</span
            >. Beyond technical contributions, I actively participated in
            meetings and adhered to an
            <span class="text-light">agile workflow</span>.
            `,
          daterange: "Nov 2021 — Present",
          skills: [
            {
              type: "link",
              label: "CKAN",
              url: "https://ckan.org/",
            },
            { type: "text", label: "HTML" },
            { type: "text", label: "CSS" },
            { type: "text", label: "Javascript" },
            { type: "text", label: "Bootstrap" },
            { type: "text", label: "Python" },
            { type: "text", label: "Flask" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Solr" },
            { type: "text", label: "Docker" },
            { type: "text", label: "Azure" },
          ],
        },
        {
          jobTitle: "Student Intern - Web Scrapper",
          employerName: "UN-ESCWA",
          employerUrl: "https://www.unescwa.org/",
          description: `In my third year of university, I joined UN-ESCWA as a
            <span class="text-light">Python web scraper</span> for the
            <span class="text-light">"Future of Work"</span> project. Throughout
            my tenure, I developed and managed more than
            <span class="text-light">50 web scrapers</span>, extracting data
            from diverse online sources and seamlessly populating a
            <span class="text-light">MongoDB database</span> for future data
            analysis.`,
          daterange: "Sep 2021 — Nov 2021",
          skills: [
            { type: "text", label: "Python" },
            { type: "text", label: "MongoDB" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience-date {
  font-family: monospace;
  text-align: start !important;
}

@media (min-width: 576px) {
  .experience-date {
    text-align: end !important;
  }
}
</style>