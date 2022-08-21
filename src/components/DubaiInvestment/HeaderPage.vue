<template>
  <header class="header animate-header">
    <img class="header--logo" :src="require('assets/logo.svg')" alt="" />
    <BaseSelectLang class="header--lang" />
  </header>
</template>

<script>
import BaseSelectLang from "@/components/Base/BaseSelectLang";

export default {
  name: "HeaderPage",
  components: {
    BaseSelectLang,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  @media all and (max-width: 640px) {
    height: 60px;
  }
  &.animate-header {
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }

      100% {
        opacity: 1;
        transform: none;
      }
    }
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-transform: translateZ(0);
    animation-name: fadeInDown;
  }
  &--logo {
    height: 3.2em;
    margin-top: 1em;
  }
  &--lang {
    position: absolute;
    top: 50%;
    right: 4em;
    margin-top: -1em;
  }
}
</style>
