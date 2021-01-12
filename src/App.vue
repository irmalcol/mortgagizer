<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div class="header-row">
    <HeaderItem value="$123,456" label="Outstanding Principal" />
  </div>
  <div class="header-row">
    <HeaderItem value="9.99%" label="Interest Rate" />
    <HeaderItem value="$8,888" label="Monthly Payment" />
    <HeaderItem value="22 yrs, 7 mo" label="Time Remaining" />
    <HeaderItem value="$2,000" label="5 yr COB" />
    <HeaderItem value="$50,000" label="Total COB" />
  </div>
  <div class="detailed-payment-table">
    <DetailedRow />
  </div>
  <div @click="generateMortgageData">GENERATE</div>
</template>

<script>
import DetailedRow from "./components/DetailedRow.vue";
import HeaderItem from "./components/HeaderItem.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MortgageCalculator from "./mortgageCalculator.js";

export default {
  name: "App",
  components: {
    DetailedRow,
    HelloWorld,
    HeaderItem
  },
  methods: {
    generateMortgageData() {
      const mortgage = new MortgageCalculator(500000, 0.05, 2);
      return mortgage.generateMortgageData(4000);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
