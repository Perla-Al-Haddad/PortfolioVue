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
          jobTitle: "Software Engineering Team Lead",
          employerName: "Liaison International",
          employerUrl: "https://www.liaisonedu.com/",
          description: `
            As Software Engineering Team Lead at Liaison International, I led the successful launch of two high-traffic platforms—<a target="_blank" href="https://explorehealthcareers.org">Explore Health Careers</a> and <a target="_blank" href="https://residencycas.com">ResidencyCAS.com</a>—within two months, <span class="text-light">optimized for SEO, accessibility, and 3,000 concurrent users</span>. I authored technical architecture plans, facilitated agile ceremonies, and aligned engineering efforts with business goals. By refactoring CI/CD pipelines and formalizing code reviews, <span class="text-light">I reduced bugs by 30% and cut deployment times by 80%</span>.
          `,
          daterange: "Dec 2023 — Sep 2024",
          skills: [            
            { type: "text", label: "Software Architecture & Design" },
            { type: "text", label: "Django" },
            { type: "text", label: "Python" },
            { type: "text", label: "Java" },
            { type: "link", label: "Quarkus", url: "https://quarkus.io/" },
            { type: "link", label: "Wagtail", url: "https://wagtail.org/" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Redis" },
            { type: "text", label: "Docker" },
            { type: "text", label: "Agile / Scrum" },
            { type: "text", label: "Jenkins" },
            { type: "text", label: "AWS" },
          ],
        },
        {
          jobTitle: "Backend Developer",
          employerName: "Liaison International",
          employerUrl: "https://www.liaisonedu.com/",
          description: `
            As a Backend Developer, I contributed to <a target="_blank" href="https://myliaison.com">MyLiaison</a>, a university catalog platform, and <a target="_blank" href="https://livingprofile.myliaison.com/">Living Profile</a>, a student profile builder. I led the technical redesign of a Django/Wagtail CMS platform, <span class="text-light">improving response times by 75%</span> and enhancing code maintainability. I developed high-performance APIs using Java/Quarkus and optimized search with OpenSearch to <span class="text-light">support 6,000 concurrent users</span>. Additionally, I implemented SEO best practices—dynamic sitemaps, meta tags, and load-time improvements—leading to the successful <span class="text-light">indexing of over 2,000 new pages</span> on Google.
          `,
          daterange: "Dec 2023 — Sep 2024",
          skills: [            
            { type: "text", label: "Django" },
            { type: "text", label: "Python" },
            { type: "text", label: "Java" },
            { type: "link", label: "Quarkus", url: "https://quarkus.io/" },
            { type: "link", label: "Wagtail", url: "https://wagtail.org/" },
            { type: "text", label: "PostgreSQL" },
            { type: "text", label: "Redis" },
            { type: "text", label: "Docker" },
            { type: "text", label: "AWS" },
          ],
        },
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
          daterange: "Nov 2021 — Sep 2023",
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