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
  <DetailedTable
    :mortgageData="mortgage"
    :monthLabel="monthLabel"
    :yearLabel="yearLabel"
    :paymentLabel="paymentLabel"
    :interestPaymentLabel="interestPaymentLabel"
    :principalPaymentLabel="principalPaymentLabel"
    :extraPaymentLabel="extraPaymentLabel"
    :remainingPrincipalLabel="remainingPrincipalLabel"
    :totalCOBLabel="totalCOBLabel"
  />
  <div @click="generateMortgageData">GENERATE</div>
</template>

<script>
import DetailedTable from "./components/DetailedTable.vue";
import HeaderItem from "./components/HeaderItem.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MortgageCalculator from "./mortgageCalculator.js";

export default {
  name: "App",
  components: {
    DetailedTable,
    HelloWorld,
    HeaderItem
  },
  data: function() {
    return {
      mortgage: [],
      yearLabel: "Year",
      monthLabel: "Month",
      paymentLabel: "Payment",
      interestPaymentLabel: "Interest",
      principalPaymentLabel: "Principal",
      extraPaymentLabel: "Extra Payment",
      remainingPrincipalLabel: "Remaining Principal",
      totalCOBLabel: "Cost of Borrowing"
    };
  },
  methods: {
    generateMortgageData() {
      const mortgage = new MortgageCalculator(500000, 0.05, 2);
      this.mortgage = mortgage.generateMortgageData(4000);
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
