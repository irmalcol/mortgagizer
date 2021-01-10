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
}
</style>
