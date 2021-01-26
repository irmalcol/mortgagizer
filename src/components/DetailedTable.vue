<template>
  <table class="detailed-payment-table">
    <thead class="table-heading">
      <tr>
        <th>{{ yearLabel }}</th>
        <th>{{ monthLabel }}</th>
        <th>{{ principalPaymentLabel }}</th>
        <th>{{ interestPaymentLabel }}</th>
        <!-- <th>{{ extraPaymentLabel }}</th> -->
        <th>{{ paymentLabel }}</th>
        <th>{{ remainingPrincipalLabel }}</th>
        <th>{{ totalCOBLabel }}</th>
      </tr>
    </thead>
    <tbody>
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
    </tbody>
  </table>
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
th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
}
</style>
