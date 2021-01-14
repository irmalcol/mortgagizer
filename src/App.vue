<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div class="header-row">
    <HeaderItem
      :value="formattedStartingPrincipal"
      label="Outstanding Principal"
    />
  </div>
  <div class="header-row">
    <HeaderItem :value="formattedAnnualInterestRate" label="Interest Rate" />
    <HeaderItem :value="formattedMonthlyPayment" label="Monthly Payment" />
    <HeaderItem :value="formattedTimeRemaining" label="Time Remaining" />
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
      totalCOBLabel: "Cost of Borrowing",
      startingPrincipal: 500000,
      annualInterestRate: 0.05,
      monthlyPayment: 5000
    };
  },
  computed: {
    formattedTimeRemaining() {
      if (this.mortgage.length < 1) {
        return "0 years, 0 months";
      } else {
        const lastPaymentData = this.mortgage[this.mortgage.length - 1];
        const years = lastPaymentData.years;
        const months = lastPaymentData.months % 12;
        return `${years} years, ${months} months`;
      }
    },
    formattedStartingPrincipal() {
      return this.formatCurrency(this.startingPrincipal);
    },
    formattedAnnualInterestRate() {
      return this.formatPercent(this.annualInterestRate);
    },
    formattedMonthlyPayment() {
      return this.formatCurrency(this.monthlyPayment);
    }
  },
  methods: {
    generateMortgageData() {
      const mortgage = new MortgageCalculator(500000, 0.05, 2);
      this.mortgage = mortgage.generateMortgageData(4000);
    },
    formatCurrency: function(amount) {
      const formatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
      });
      return formatter.format(amount);
    },
    formatPercent: function(amount) {
      const convertedFromDecimalToPercent = amount * 100;
      return `${convertedFromDecimalToPercent}%`;
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
