<template>
  <div class="detailed-header">
    <div class="header-row single-header-item">
      <HeaderItem :value="startingPrincipal" :label="startingPrincipalLabel" />
    </div>
    <div class="header-row multiple-header-item">
      <HeaderItem :value="interestRate" :label="interestRateLabel" />
      <HeaderItem :value="monthlyPayment" :label="monthlyPaymentLabel" />
      <HeaderItem :value="timeRemaining" :label="timeRemainingLabel" />
      <HeaderItem :value="fiveYearCOB" :label="fiveYearCOBLabel" />
      <HeaderItem :value="totalCOB" :label="totalCOBLabel" />
    </div>
  </div>
</template>

<script>
import HeaderItem from "./HeaderItem.vue";

export default {
  name: "DetailedHeader",
  components: {
    HeaderItem
  },
  props: {
    startingPrincipal: String,
    startingPrincipalLabel: String,
    interestRate: String,
    interestRateLabel: String,
    monthlyPayment: String,
    monthlyPaymentLabel: String,
    timeRemaining: String,
    timeRemainingLabel: String,
    fiveYearCOB: String,
    fiveYearCOBLabel: String,
    totalCOB: String,
    totalCOBLabel: String
  }
};
</script>

<style scoped lang="scss"></style>
