<template>
  <div class="header-value">{{ this.value }}</div>
  <div class="header-label">{{ this.label }}</div>
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
