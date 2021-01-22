<template>
  <div class="header-item">
    <div class="header-value">{{ value }}</div>
    <div class="header-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
    value: String,
    label: String
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
