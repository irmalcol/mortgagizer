<template>
  <div class="detailed-row">
    <div>{{ year }}</div>
    <div>{{ month }}</div>
    <div>{{ formattedPrincipalPayment }}</div>
    <div>{{ formattedInterestPayment }}</div>
    <!-- <div>{{ extraPayment }}</div> -->
    <div>{{ payment }}</div>
    <div>{{ remainingPrincipal }}</div>
    <div>{{ totalCOB }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailedRow",
  props: {
    // extraPayment: Number,
    year: Number,
    month: Number,
    payment: Number,
    interestPayment: Number,
    principalPayment: Number,
    remainingPrincipal: Number,
    totalCOB: Number
  },
  computed: {
    formattedTimeElapsed() {
      const remainderMonth = Math.floor(this.month / 12);
      return `${this.year} yrs, ${remainderMonth} mos`;
    },
    formattedPrincipalPayment() {
      return this.formatCurrency(this.principalPayment);
    },
    formattedInterestPayment() {
      return this.formatCurrency(this.interestPayment);
    }
  },
  methods: {
    formatCurrency: function(amount) {
      const formatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
      });
      return formatter.format(amount);
    }
  }
};
</script>

<style scoped lang="scss">
.detailed-row {
  display: flex;
  flex-direction: row;
}
</style>
