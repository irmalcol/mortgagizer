<template>
  <div class="detailed-header">
    <div class="header-row single-header-item">
      <header-input-dollar-amount
        v-model.number="startingPrincipal"
        :fieldLabel="startingPrincipalLabel"
      />
    </div>
    <div class="header-row multiple-header-item">
      <header-input-percentage
        v-model.number="annualInterestRate"
        :fieldLabel="annualInterestRateLabel"
      />
      <header-input-dollar-amount
        v-model.number="monthlyPayment"
        :fieldLabel="monthlyPaymentLabel"
      />
      <header-time-remaining
        :value="monthsRemaining"
        :label="timeRemainingLabel"
      />
      <header-dollar-amount :value="fiveYearCOB" :label="fiveYearCOBLabel" />
      <header-dollar-amount :value="totalCOB" :label="totalCOBLabel" />
    </div>
  </div>
  <DetailedTable
    :mortgageData="mortgage"
    :monthLabel="monthLabel"
    :yearLabel="yearLabel"
    :paymentLabel="monthlyPaymentLabel"
    :interestPaymentLabel="interestPaymentLabel"
    :principalPaymentLabel="principalPaymentLabel"
    :extraPaymentLabel="extraPaymentLabel"
    :remainingPrincipalLabel="remainingPrincipalLabel"
    :totalCOBLabel="totalCOBLabel"
  />
  <div @click="generateMortgageData">GENERATE</div>
</template>

<script>
import DetailedTable from "./DetailedTable.vue";
import MortgageCalculator from "@/mortgageCalculator.js";
import HeaderInputDollarAmount from "./HeaderInputDollarAmount.vue";
import HeaderInputPercentage from "./HeaderInputPercentage.vue";
import HeaderDollarAmount from "./HeaderDollarAmount.vue";
import HeaderTimeRemaining from "./HeaderTimeRemaining.vue";

export default {
  name: "detailed-mortgage",
  components: {
    DetailedTable,
    HeaderInputDollarAmount,
    HeaderInputPercentage,
    HeaderDollarAmount,
    HeaderTimeRemaining
  },
  data: function() {
    return {
      mortgage: [],
      yearLabel: "Year",
      monthLabel: "Month",
      monthlyPaymentLabel: "Payment",
      annualInterestRateLabel: "Annual Interest Rate",
      interestPaymentLabel: "Interest",
      principalPaymentLabel: "Principal",
      extraPaymentLabel: "Extra Payment",
      remainingPrincipalLabel: "Remaining Principal",
      fiveYearCOBLabel: "5 Year Cost of Borrowing",
      totalCOBLabel: "Total Cost of Borrowing",
      timeRemainingLabel: "Time Remaining",
      startingPrincipal: 500000,
      startingPrincipalLabel: "Starting Principal",
      annualInterestRate: 0.05,
      monthlyPayment: 5000
    };
  },
  computed: {
    fiveYearCOB() {
      let fiveYearCOB = 0;
      const mortgageLength = this.mortgage.length;
      const fiveYearsInMonths = 60;
      if (mortgageLength > 0 && mortgageLength < 60) {
        fiveYearCOB = this.mortgage[mortgageLength - 1].totalCOB;
      } else if (mortgageLength >= 60) {
        fiveYearCOB = this.mortgage[fiveYearsInMonths - 1].totalCOB;
      }
      return fiveYearCOB;
    },
    totalCOB() {
      let totalCOB = 0;
      if (this.mortgage.length > 0) {
        totalCOB = this.mortgage[this.mortgage.length - 1].totalCOB;
      }
      return totalCOB;
    },
    monthsRemaining() {
      let months = 0;
      if (this.mortgage.length > 1) {
        const lastPaymentData = this.mortgage[this.mortgage.length - 1];
        months = lastPaymentData.month;
      }
      console.log("Months remaining: ", months);
      return months;
    }
  },
  methods: {
    generateMortgageData() {
      const mortgage = new MortgageCalculator(
        this.startingPrincipal,
        this.annualInterestRate,
        2
      );
      this.mortgage = mortgage.generateMortgageData(this.monthlyPayment);
    }
  }
};
</script>

<style lang="scss">
// Global styles
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
}

#app {
  font-family: var(--main-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-text-color);
  margin-top: 60px;
}

.header-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
