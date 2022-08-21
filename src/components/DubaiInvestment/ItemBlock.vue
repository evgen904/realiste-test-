<i18n>
{
  "ru": {
    "moreBtn": "Посмотреть"
  },
  "en": {
    "moreBtn": "Look"
  }
}
</i18n>

<template>
  <div class="block" :class="{ 'center-item': !!this.$slots['imgTop'] }">
    <div class="block--bg"></div>
    <div class="fade-block">
      <div v-if="title" class="block--title">
        <img :src="require('assets/bolt.svg')" alt="" />
        {{ title }}
      </div>
      <div v-if="!!this.$slots['imgTop']" class="block--img-top">
        <slot name="imgTop"></slot>
      </div>
      <div v-if="name" class="block--name" :class="{ small: nameSmall }">
        {{ name }}
      </div>
      <div v-if="desk" class="block--desk" v-html="desk"></div>
    </div>
    <div class="fade-block">
      <div v-if="more" class="block--more">
        <a :href="more">{{ $t("moreBtn") }}</a>
      </div>
      <div v-if="!!this.$slots['img']" class="block--img">
        <slot name="img"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemBlock",
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
    desk: {
      type: String,
    },
    more: {
      type: String,
    },
    nameSmall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 26.5em;
  margin: 0 1em;
  padding: 2em 0.7em 0.7em 0.7em;
  position: relative;
  border: none;
  @media all and (max-width: 640px) {
    margin: 0 0.4em;
  }
  &.center-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  &--bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 2px 6px 20px 4px rgba(0, 0, 0, 0.1);
    border: none;
    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-transform: translateZ(0);
    animation-name: fadeInRight;
  }
  &--title {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: url("~assets/bg-animate.gif") 50% 50% no-repeat;
    background-size: cover;
    border-radius: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 1.06em;
    padding: 0.3em 1.1em;
    margin: 0 10px 2em;
    position: relative;
    z-index: 2;
    img {
      margin-right: 6px;
      display: inline-block;
      vertical-align: middle;
      width: 0.68em;
      margin-top: 2px;
    }
  }
  &--name {
    color: #202124;
    font-size: 2.4em;
    font-weight: 800;
    margin: 0 10px 0.4em;
    position: relative;
    z-index: 2;
    &.small {
      font-size: 2.1em;
    }
    a {
      color: #202124;
      text-decoration: none;
    }
  }
  &--desk {
    color: #202124;
    font-size: 1.5em;
    line-height: 1.3em;
    font-weight: 500;
    margin: 0 10px 20px;
    position: relative;
    z-index: 2;
  }
  &--more {
    margin: 0 10px 2em;
    position: relative;
    z-index: 2;
    a {
      display: inline-block;
      vertical-align: top;
      color: #202124;
      text-decoration: none;
      font-size: 1.4em;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      background-color: #ffffff;
      padding: 0.6em 24px;
    }
  }
  &--img {
    position: relative;
    z-index: 2;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
  .fade-block {
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-transform: translateZ(0);
    animation-delay: 0.7s;
    animation-name: fadeIn;
  }
}
</style>
