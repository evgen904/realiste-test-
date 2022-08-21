<template>
  <div id="app">
    <DubaiInvestment />
  </div>
</template>

<script>
import DubaiInvestment from "@/components/DubaiInvestment";

export default {
  name: "App",
  components: {
    DubaiInvestment,
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-size: 1rem;
  line-height: 1;
}
body {
  font-family: Arial, sans-serif;
}
* {
  box-sizing: border-box;
}
#app {
  height: 100%;
}
</style>
