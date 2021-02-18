<template>
  <div class="header-item">
    <div class="header-value">{{ formattedValue }}</div>
    <div class="header-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "header-time-remaining",
  props: {
    value: Number,
    label: String
  },
  computed: {
    formattedValue() {
      return this.formatTimeRemaining(this.value);
    }
  },
  methods: {
    formatTimeRemaining(months) {
      const years = Math.floor(months / 12);
      const remainderMonths = months % 12;
      return `${years} years, ${remainderMonths} months`;
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
