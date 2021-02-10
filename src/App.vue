<template>
  <detailed-mortgage />
</template>

<script>
import DetailedMortgage from "@/pages/DetailedMortgage.vue";

export default {
  name: "App",
  components: {
    DetailedMortgage
  }
};
</script>

<style lang="scss">
// Global styles
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
}

#app {
  font-family: var(--main-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-text-color);
  margin-top: 60px;
}
</style>
