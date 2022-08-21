<i18n>
{
  "ru": {
    "appartments": "Квартиры",
    "funds": "Сделки",
    "estimation": "Оценка",
    "tradeUp": "Обмен",
    "index": "Индекс"
  },
  "en": {
    "appartments": "Apartments",
    "funds": "Deals",
    "estimation": "Evaluation",
    "tradeUp": "Exchange",
    "index": "Index"
  }
}
</i18n>

<template>
  <footer class="footer animate-footer">
    <nav>
      <a href="#">
        <img :src="require('assets/appartments.svg')" alt="" />
        <span>{{ $t("appartments") }}</span>
      </a>
      <a href="#">
        <img :src="require('assets/funds.svg')" alt="" />
        <span>{{ $t("funds") }}</span>
      </a>
      <a href="#">
        <img :src="require('assets/estimation.svg')" alt="" />
        <span>{{ $t("estimation") }}</span>
      </a>
      <a href="#">
        <img :src="require('assets/trade-up.svg')" alt="" />
        <span>{{ $t("tradeUp") }}</span>
      </a>
      <a href="#">
        <img :src="require('assets/index.svg')" alt="" />
        <span>{{ $t("index") }}</span>
      </a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style lang="scss" scoped>
.footer {
  min-height: 72px;
  height: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.animate-footer {
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-transform: translateZ(0);
    animation-name: fadeInUp;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      text-align: center;
      color: #4a4949;
      text-decoration: none;
      font-size: 1.2em;
      font-weight: 600;
      font-family: Arial, sans-serif;
      margin: 0 1.2em;
      @media all and (max-width: 640px) {
        margin: 0 0.8em;
        font-size: 1em;
      }
      img {
        display: inline-block;
        vertical-align: top;
        height: 2.4em;
        margin-bottom: 10px;
      }
      span {
        display: block;
      }
    }
  }
}
</style>
