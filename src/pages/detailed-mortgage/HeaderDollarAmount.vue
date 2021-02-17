<template>
  <div class="header-item">
    <div class="header-value">{{ formattedValue }}</div>
    <div class="header-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "header-dollar-amount",
  props: {
    value: Number,
    label: String
  },
  computed: {
    formattedValue() {
      return this.formatCurrencyNoDecimals(this.value);
    }
  },
  methods: {
    formatCurrencyNoDecimals: function(amount) {
      const formatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return formatter.format(amount);
    }
  }
};
</script>

<style scoped lang="scss">
.header-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem 0 0;
}

.header-value {
  font-size: var(--header-value-font-size);
}

.header-label {
  color: var(--label-text-color);
  font-size: var(--header-label-font-size);
}
</style>
