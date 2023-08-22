<template>
  <div class="wrapper">
    <router-link
      to="/coming-soon"
      class="text-blue text-decoration-none arrow-button"
    >
      learn more
      <i class="arrow-button__icon"></i>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@mixin standard {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  transition: 0.35s ease;
}

$black: #38b6ff;

.wrapper {
  width: fit-content;
  margin: 0 0;
}

.arrow-button {
  display: flex;
  position: relative;
  padding: 30px 15px 0px 0px;

  &:hover {
    .arrow-button__icon {
      &:before {
        height: 25px;
        top: -5px;
      }

      &:after {
        top: -5px;
      }
    }
  }

  &__icon {
    display: block;
    position: relative;
    height: 25px;
    transform: rotate(90deg);
    margin-left: 15px;

    &:before {
      border-radius: 10px;
      width: 3px;
      height: 20px;
      background-color: $black;
      @include standard;
    }
    &:after {
      width: 11px;
      height: 11px;
      left: -4px;
      border-top: 3px solid $black;
      border-left: 3px solid $black;
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      @include standard;
    }
  }
}
</style>