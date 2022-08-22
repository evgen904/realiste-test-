<i18n>
{
  "ru": {
    "blockOneTitle": "TOP 50",
    "blockOneName":"Квартиры под аренду",
    "blockOneDesk":"Квартиры с доходностью <br> 12% годовых в Дубаи",
    "blockTwoTitle":"TOP 100",
    "blockTwoName":"100 квартир для инвестиций",
    "blockTwoDesk":"Рейтинг квартир для <br> инвестиций в Дубаи",
    "blockThreeTitle":"TOP 30",
    "blockThreeName":"Самые престижные проекты",
    "blockThreeDesk":"Квартиры в домах где живут миллионеры",
    "block1Name":"Квартиры",
    "block1Desk":"Квартиры по ценам ниже рыночных",
    "block2Name":"Сделки",
    "block2Desk":"История сделок <br> с недвижимостью",
    "block3Name":"Обмен",
    "block3Desk":"Обмен вашей квартиры <br>  на новую",
    "block4Name":"Оценка",
    "block4Desk":"Оцените квартиру <br>  за 10 секунд",
    "block5Name":"Индексы",
    "block5Desk":"Индекс цен и ликвидность районов"
  },
  "en": {
    "blockOneTitle": "TOP 50",
    "blockOneName":"Apartments for rent",
    "blockOneDesk":"Apartments with <br> 12% yield in Dubai",
    "blockTwoTitle":"TOP 100",
    "blockTwoName":"100 apartments for investment",
    "blockTwoDesk":"Rating of apartments for <br> investments in Dubai",
    "blockThreeTitle":"TOP 30",
    "blockThreeName":"Most prestigious projects",
    "blockThreeDesk": "Apartments in houses where millionaires live",
    "block1Name":"Apartments",
    "block1Desk":"Apartments at below market prices",
    "block2Name":"Deals",
    "block2Desk": "History of <br> real estate transactions",
    "block3Name":"Exchange",
    "block3Desk":"Exchanging your apartment <br> for a new one",
    "block4Name":"Score",
    "block4Desk":"Rate the apartment <br> in 10 seconds",
    "block5Name":"Indices",
    "block5Desk": "Price Index and District Liquidity"
  }
}
</i18n>
<template>
  <main class="list" @mousedown="mouseDownHandler" ref="blockScroll">
    <div class="list--block">
      <ItemBlock
        :title="$t('blockOneTitle')"
        :name="$t('blockOneName')"
        :desk="$t('blockOneDesk')"
        more="#"
      >
        <template v-slot:img>
          <img class="img-main" :src="require('assets/img-map.png')" alt="" />
          <img
            class="point-1"
            :src="require('assets/star-realiste.png')"
            alt=""
          />
          <img
            class="point-2"
            :src="require('assets/star-realiste.png')"
            alt=""
          />
          <img
            class="point-3"
            :src="require('assets/star-realiste.png')"
            alt=""
          />
          <img class="point-4" :src="require('assets/star.png')" alt="" />
          <img class="point-5" :src="require('assets/star.png')" alt="" />
          <img class="point-6" :src="require('assets/star.png')" alt="" />
        </template>
      </ItemBlock>
      <ItemBlock
        :title="$t('blockTwoTitle')"
        :name="$t('blockTwoName')"
        :desk="$t('blockTwoDesk')"
        more="#"
      >
        <template v-slot:img>
          <img class="img-main" :src="require('assets/img-map.png')" alt="" />
          <img
            class="point-7"
            :src="require('assets/star-realiste.png')"
            alt=""
          />
          <img class="point-8" :src="require('assets/star.png')" alt="" />
          <img class="point-9" :src="require('assets/star.png')" alt="" />
          <img class="point-10" :src="require('assets/star.png')" alt="" />
          <img class="point-11" :src="require('assets/star.png')" alt="" />
        </template>
      </ItemBlock>
      <ItemBlock
        :title="$t('blockThreeTitle')"
        :name="$t('blockThreeName')"
        :desk="$t('blockThreeDesk')"
        more="#"
        :name-small="true"
      >
        <template v-slot:img>
          <div class="list-img">
            <img class="img-city" :src="require('assets/img-1.png')" alt="" />
            <img class="img-city" :src="require('assets/img-2.png')" alt="" />
            <img class="img-city" :src="require('assets/img-3.png')" alt="" />
            <img class="img-city" :src="require('assets/img-4.png')" alt="" />
          </div>
        </template>
      </ItemBlock>
      <ItemBlock
        v-for="item in listBlock"
        :key="item.name"
        :name="$t(item.name)"
        :desk="$t(item.desk)"
      >
        <template v-slot:imgTop>
          <div class="img-top" :class="item.classImg">
            <img :src="item.img" alt="" />
          </div>
        </template>
      </ItemBlock>
    </div>
  </main>
</template>

<script>
import ItemBlock from "@/components/DubaiInvestment/ItemBlock";

export default {
  name: "ListBlock",
  components: {
    ItemBlock,
  },
  data() {
    return {
      listBlock: [
        {
          name: "block1Name",
          desk: "block1Desk",
          img: require("assets/appartmentsInCircle.png"),
          classImg: "",
        },
        {
          name: "block2Name",
          desk: "block2Desk",
          img: require("assets/fundsInCircle.png"),
          classImg: "bg2",
        },
        {
          name: "block3Name",
          desk: "block3Desk",
          img: require("assets/tradeUpInCircle.png"),
          classImg: "bg3",
        },
        {
          name: "block4Name",
          desk: "block4Desk",
          img: require("assets/estimationInCircle.png"),
          classImg: "bg4",
        },
        {
          name: "block5Name",
          desk: "block5Desk",
          img: require("assets/indexInCircle.png"),
          classImg: "bg5",
        },
      ],
      pos: {
        top: 0,
        left: 0,
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    mouseDownHandler(e) {
      this.$refs.blockScroll.style.cursor = "grabbing";

      this.pos = {
        left: this.$refs.blockScroll.scrollLeft,
        top: this.$refs.blockScroll.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener("mousemove", this.mouseMoveHandler);
      document.addEventListener("mouseup", this.mouseUpHandler);
    },
    mouseMoveHandler(e) {
      const dx = e.clientX - this.pos.x;
      const dy = e.clientY - this.pos.y;

      this.$refs.blockScroll.scrollTop = this.pos.top - dy;
      this.$refs.blockScroll.scrollLeft = this.pos.left - dx;
    },
    mouseUpHandler() {
      this.$refs.blockScroll.style.cursor = "grab";

      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.mouseUpHandler);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  flex: auto;
  display: flex;
  align-items: center;
  overflow: auto;
  position: relative;
  cursor: grab;
  &::-webkit-scrollbar {
    display: none;
  }
  &--block {
    display: flex;
    flex-wrap: nowrap;
    padding: 20px 0 20px 44em;
    @media all and (max-width: 1600px) {
      padding-left: 40em;
    }
    @media all and (max-width: 1440px) {
      padding-left: 38em;
    }
    @media all and (max-width: 1200px) {
      padding-left: 26em;
    }
    @media all and (max-width: 1024px) {
      padding-left: 20em;
    }
    @media all and (max-width: 768px) {
      padding-left: 15em;
    }
    @media all and (max-width: 640px) {
      padding-left: 1em;
    }
    .img-top {
      text-align: center;
      margin: 0 14px 20px;
      position: relative;
      z-index: 2;
      img {
        position: relative;
        z-index: 2;
        width: 5.6em;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
      &:before {
        content: "";
        width: 22em;
        height: 22em;
        background: url("~assets/appartmentsInCircle-bg.png") 50% 50% no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -11em 0 0 -11em;
      }
      &.bg2 {
        &:before {
          background-image: url("~assets/fundsInCircle-bg.png");
        }
      }
      &.bg3 {
        &:before {
          background-image: url("~assets/fundsInCircle-bg.png");
        }
      }
      &.bg4 {
        &:before {
          background-image: url("~assets/estimationInCircle-bg.png");
        }
      }
      &.bg5 {
        &:before {
          background-image: url("~assets/indexInCircle-bg.png");
        }
      }
    }
    .img-main {
      width: 100%;
      border-radius: 15px;
      object-fit: cover;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
      @media all and (max-width: 640px) {
        border-radius: 20px;
      }
    }
    .point-1 {
      position: absolute;
      top: 4.6em;
      left: 16em;
      width: 2.7em;
    }
    .point-2 {
      position: absolute;
      top: 10em;
      left: 11em;
      width: 2.7em;
    }
    .point-3 {
      position: absolute;
      top: 10em;
      left: 21em;
      width: 2.7em;
    }
    .point-4 {
      position: absolute;
      top: 5em;
      left: 21em;
      width: 2.7em;
    }
    .point-5 {
      position: absolute;
      top: 8em;
      left: 18em;
      width: 2.7em;
    }
    .point-6 {
      position: absolute;
      top: 9em;
      left: 15em;
      width: 2.7em;
    }
    .point-7 {
      position: absolute;
      top: 4.6em;
      left: 16em;
      width: 2.7em;
    }
    .point-8 {
      position: absolute;
      top: 2.8em;
      left: 18.6em;
      width: 2.7em;
    }
    .point-9 {
      position: absolute;
      top: 8.6em;
      left: 12.6em;
      width: 2.7em;
    }
    .point-10 {
      position: absolute;
      top: 11em;
      left: 9.6em;
      width: 2.7em;
    }
    .point-11 {
      position: absolute;
      top: 10.6em;
      left: 15em;
      width: 2.7em;
    }
    .list-img {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .img-city {
        width: calc(50% - 6px);
        border-radius: 15px;
        object-fit: cover;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        &:nth-child(odd) {
          margin-right: 6px;
        }
        &:nth-child(even) {
          margin-left: 6px;
        }
        &:nth-child(1), &:nth-child(2) {
          margin-bottom: 14px;
        }
        @media all and (max-width: 640px) {
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
