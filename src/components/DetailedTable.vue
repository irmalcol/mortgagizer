<template>
  <ul class="detailed-payment-table">
    <li class="table-heading">
      <div>{{ yearLabel }}</div>
      <div>{{ monthLabel }}</div>
      <div>{{ principalPaymentLabel }}</div>
      <div>{{ interestPaymentLabel }}</div>
      <!-- <div>{{ extraPaymentLabel }}</div> -->
      <div>{{ paymentLabel }}</div>
      <div>{{ remainingPrincipalLabel }}</div>
      <div>{{ totalCOBLabel }}</div>
    </li>
    <DetailedRow
      v-for="(mortgageRow, index) in mortgageData"
      :key="index"
      :year="mortgageRow.year"
      :month="mortgageRow.month"
      :payment="mortgageRow.payment"
      :interestPayment="mortgageRow.interestPayment"
      :principalPayment="mortgageRow.principalPayment"
      :extraPayment="mortgageRow.extraPayment"
      :remainingPrincipal="mortgageRow.remainingPrincipal"
      :totalCOB="mortgageRow.totalCOB"
    />
  </ul>
</template>

<script>
import DetailedRow from "./DetailedRow.vue";

export default {
  name: "DetailedTable",
  components: {
    DetailedRow
  },
  props: {
    mortgageData: Array,
    yearLabel: String,
    monthLabel: String,
    paymentLabel: String,
    interestPaymentLabel: String,
    principalPaymentLabel: String,
    extraPaymentLabel: String,
    remainingPrincipalLabel: String,
    totalCOBLabel: String
  }
};
</script>

<style scoped lang="scss">
li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
