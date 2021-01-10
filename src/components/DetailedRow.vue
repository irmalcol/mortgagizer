<template>
  <div class="detailed-row">
    <div class>{{ month }}</div>
    <div class>{{ principalPayment }}</div>
    <div class>{{ interestPayment }}</div>
    <div class>{{ extraPayment }}</div>
    <div class>{{ totalPayment }}</div>
    <div class>{{ remainingPrincipal }}</div>
    <div class>{{ totalCostOfBorrowing }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailedRow",
  props: {
    extraPayment: String,
    interestPayment: String,
    month: String,
    principalPayment: String,
    remainingPrincipal: String,
    totalCostOfBorrowing: String,
    totalPayment: String
  }
};
</script>

<style scoped lang="scss">
.detailed-row {
  display: flex;
  flex-direction: row;
}
</style>
