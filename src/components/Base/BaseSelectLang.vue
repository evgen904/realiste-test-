<template>
  <div class="select-lang">
    <img :src="require('assets/globe.svg')" alt="" />
    <div class="select-lang--block">
      <ul>
        <li @click="selectLang('ru')">Русский</li>
        <li @click="selectLang('en')">English</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelectLang",
  methods: {
    selectLang(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.select-lang {
  img {
    width: 2.2em;
    cursor: pointer;
  }
  &:after {
    content: "";
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 30px;
  }
  &:hover,
  &.active {
    &:after {
      display: block;
    }
    .select-lang--block {
      opacity: 1;
      visibility: visible;
    }
  }
  &--block {
    opacity: 0;
    visibility: hidden;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1em;
    transition: opacity 0.2s ease;
    &:before {
      content: "";
      display: block;
      width: 1em;
      height: 1em;
      background: #fff;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -0.4em;
      left: 50%;
      transform: translateX(-50%) rotate(-45deg);
    }
    &:after {
      content: "";
      display: block;
      width: 3em;
      height: 1em;
      background: #fff;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    ul {
      padding: 18px 20px;
      margin: 0;
      list-style: none;
      text-align: center;
      position: relative;
      li {
        cursor: pointer;
        text-transform: uppercase;
        color: #222;
        line-height: 1.35;
        font-weight: 600;
        margin: 0 0 12px;
        font-size: 0.8em;
        position: relative;
        z-index: 2;
        @media all and (max-width: 640px) {
          font-size: 1em;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
