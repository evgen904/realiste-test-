import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const startLocale = "ru";

export default new VueI18n({
  pluralizationRules: {
    /** Key - language to use the rule for, 'ru', in this case */
    /** Value - function
     * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
     * @param choicesLength {number} an overall amount of available choices
     * @returns a final choice index to select plural word by
     **/
    ru: function (choice, choicesLength) {
      if (choice === 0) {
        return 0;
      }
      // pl: n => n < 2 ? n : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 2 : 3

      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;

      if (!teen && endsWithOne) {
        return 1;
      }
      if (
        !teen &&
        choice % 10 >= 2 &&
        choice % 10 <= 4 &&
        (choice % 100 < 10 || choice % 100 >= 20)
      ) {
        return 2;
      }
      return choicesLength < 4 ? 2 : 3;
    },
  },
  locale: startLocale,
  fallbackLocale: startLocale,
  silentTranslationWarn: true,
});
