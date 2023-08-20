<template>
  <header>
    <nav class="navbar navbar-expand-lg pt-4">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../assets/images/pal.png" width="65" alt=""
        /></a>
        <button
          class="navbar-toggler bg-transparent border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon class="text-dark" icon="fa-solid fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4 align-items-center justify-content-center"
          >
            <li
              v-for="(link, index) in links"
              :key="index"
              :class="`nav-item ${link.type == 'dropdown' ? link.type : ''}`"
            >
              <a
                v-if="link.type == 'link'"
                class="nav-link text-gray"
                :href="`#${link.id}`"
                >{{ link.name }}</a
              >
              <a
                v-else-if="link.type == 'dropdown'"
                class="nav-link dropdown-toggle text-gray text-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ link.name }}
              </a>
              <ul
                v-if="link.type == 'dropdown'"
                class="dropdown-menu animate slideIn"
                aria-labelledby="navbarDropdown"
              >
                <li
                  v-for="(resumeLink, index) in link.resumeLinks"
                  :key="index"
                >
                  <a
                    class="dropdown-item text-light p-0 underline-hover-effect"
                    target="_blank"
                    :href="`../assets/docs/${resumeLink.url}`"
                    download
                  >
                    {{ resumeLink.name }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
                        stroke="#38b6ff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2px"
                      />
                      <path
                        d="M12 3L12 15M12 15L16 11M12 15L8 11"
                        stroke-width="2px"
                        stroke="#38b6ff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            <ThemeToggleButton
              @toggle-light-mode="$emit('toggle-light-mode')"
            />
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ThemeToggleButton from "./ThemeToggleButton.vue";

export default {
  name: "Header",
  components: {
    ThemeToggleButton,
  },
  data() {
    return {
      links: [
        {
          name: "About",
          id: "about",
          type: "link",
        },
        {
          name: "Experience",
          id: "experience",
          type: "link",
        },
        {
          name: "Projects",
          id: "projects",
          type: "link",
        },
        {
          name: "Resume",
          id: "resume",
          type: "dropdown",
          resumeLinks: [
            {
              name: "English Resume",
              url: "resume-en.pdf",
            },
            {
              name: "French Resume",
              url: "resume-fr.pdf",
            },
          ],
        },
        {
          name: "Contact",
          id: "contact",
          type: "link",
        },
      ],
    };
  },
};
</script>

<style scoped>
.animate {
  animation-duration: 0.3s;
  -webkit-animation-duration: 0.3s;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
}

.dropdown-menu a:hover {
  background-color: transparent !important;
}

.dropdown-menu {
  background-color: transparent !important;
  border: none !important;
  border-radius: 0;
}

.dropdown-menu .dropdown-item {
  width: fit-content;
  margin-right: var(--bs-navbar-nav-link-padding-x);
  margin-left: var(--bs-navbar-nav-link-padding-x);
  margin-bottom: 0.5rem;
}

@keyframes slideIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }

  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}

@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: transform;
    -webkit-opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 1;
  }

  0% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 0;
  }
}

.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}

.dropdown-menu {
  text-align: center !important;
}

a.underline-hover-effect {
  text-decoration: none;
}

.underline-hover-effect {
  display: inline-block;
  padding-bottom: 0.25rem;
  /* defines the space between text and underline */
  position: relative;
}

.underline-hover-effect::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;    
  background-color: #38b6ff;
  transition: width 0.25s ease-out;
}

.underline-hover-effect:hover::before {
  width: 100%;
}

</style>