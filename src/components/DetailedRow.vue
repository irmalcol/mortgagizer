<template>
  <tr class="detailed-row">
    <td class="detailed-year">{{ year }}</td>
    <td class="detailed-month">{{ month }}</td>
    <td class="detailed-pricipal">{{ formattedPrincipalPayment }}</td>
    <td class="detailed-interest">{{ formattedInterestPayment }}</td>
    <!-- <td class="detailed-extra">{{ extraPayment }}</td> -->
    <td class="detailed-payment">{{ formattedPayment }}</td>
    <td class="detailed-remaining">{{ formattedRemainingPrincipal }}</td>
    <td class="detailed-totalCOB">{{ formattedTotalCOB }}</td>
  </tr>
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
    extraPayment: Number,
    remainingPrincipal: Number,
    totalCOB: Number
  },
  computed: {
    // formattedTimeElapsed() {
    //   const remainderMonth = Math.floor(this.month / 12);
    //   return `${this.year} yrs, ${remainderMonth} mos`;
    // },
    formattedPrincipalPayment() {
      return this.formatCurrency(this.principalPayment);
    },
    formattedInterestPayment() {
      return this.formatCurrency(this.interestPayment);
    },
    formattedPayment() {
      return this.formatCurrency(this.payment);
    },
    formattedRemainingPrincipal() {
      return this.formatCurrency(this.remainingPrincipal);
    },
    formattedTotalCOB() {
      return this.formatCurrency(this.totalCOB);
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
td {
  border: 1px solid #999;
  padding: 0.5rem;
}

.detailed-year,
.detailed-month {
  min-width: 2rem;
}

.detailed-pricipal,
.detailed-interest,
.detailed-extra,
.detailed-payment {
  min-width: 7rem;
  text-align: right;
}

.detailed-remaining,
.detailed-totalCOB {
  min-width: 8rem;
  text-align: right;
}
</style>
