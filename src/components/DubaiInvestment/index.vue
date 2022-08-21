<template>
  <div class="wrapper" :class="{ 'disabled-scroll': disabledScroll }">
    <Transition>
      <div class="name-page" v-if="!isLoadDOMContent">dubai</div>
    </Transition>
    <template v-if="isLoadDOMContent">
      <HeaderPage />
      <ListBlock />
      <FooterPage />
    </template>
  </div>
</template>

<script>
import HeaderPage from "@/components/DubaiInvestment/HeaderPage";
import ListBlock from "@/components/DubaiInvestment/ListBlock";
import FooterPage from "@/components/DubaiInvestment/FooterPage";

export default {
  name: "DubaiInvestment",
  components: {
    HeaderPage,
    ListBlock,
    FooterPage,
  },
  data() {
    return {
      disabledScroll: true,
      isLoadDOMContent: false,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.isLoadDOMContent = true;
      setTimeout(() => {
        this.disabledScroll = false;
      }, 3000);
    });
  },
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  user-select: none;
  font-family: Arial, sans-serif;
  font-size: calc(100vw / 106.4);
  position: relative;
  background: #f7f7f7 url("~assets/bg-body.png") 50% 50% no-repeat;
  background-size: cover;
  &.disabled-scroll {
    overflow: hidden;
  }
  .name-page {
    text-transform: uppercase;
    color: #222;
    font-size: 4em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media all and (max-width: 1600px) {
    font-size: calc(100vw / 106);
  }
  @media all and (max-width: 1440px) {
    font-size: calc(100vw / 90);
  }
  @media all and (max-width: 1200px) {
    font-size: calc(100vw / 80);
  }
  @media all and (max-width: 1024px) {
    font-size: calc(100vw / 70);
  }
  @media all and (max-width: 768px) {
    font-size: calc(100vw / 60);
  }
  @media all and (max-width: 640px) {
    font-size: calc(100vw / 34);
  }
}
</style>
