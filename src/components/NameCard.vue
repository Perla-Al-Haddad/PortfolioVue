<template>
  <div class="name-card-container">
    <h5 class="fs-6 text-blue">Hi, my name is</h5>
    <h1 class="mb-2 display-3 fw-bold lh-1">Perla Alhaddad.</h1>
    <h4 class="fw-bold text-blue mb-3">Full Stack Web Developer</h4>
    <div class="row mb-6 align-items-center">
      <div class="col">
        <a
          class="text-dark text-decoration-none"
          href="mailto:perlaalhaddad@gmail.com"
          >perlaalhaddad@gmail.com</a
        >
      </div>
      <div class="col">
        <ul
          class="list-group list-group-horizontal list-unstyled gap-3 justify-content-end align-items-center"
        >
          <li class="accounts-links">
            <a
              class="text-light"
              target="_blank"
              href="https://github.com/Perla-Al-Haddad"
            >
              <font-awesome-icon
                class="fa-2xl"
                icon="fa-brands fa-github"
              />
            </a>
          </li>
          <li class="accounts-links">
            <a
              class="text-light"
              target="_blank"
              href="https://lb.linkedin.com/in/perla-al-haddad-092880242"
            >
              <font-awesome-icon
                class="fa-2xl"
                icon="fa-brands fa-linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name-card-container {
  width: auto;
}

@media (min-width: 576px) {
  .name-card-container {
    width: fit-content;
  }
}
</style>