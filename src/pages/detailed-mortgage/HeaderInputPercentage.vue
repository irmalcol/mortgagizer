<template>
  <div class="header-item">
    <div v-if="!showInput" class="header-value">
      {{ formattedValue }}
      <button @click="toggleFieldEdit">Edit</button>
    </div>
    <div v-if="showInput">
      <input v-model="percentageValue" />
      <button @click="toggleFieldEdit">Done</button>
    </div>
    <div class="header-label">{{ fieldLabel }}</div>
  </div>
</template>

<script>
export default {
  name: "startingPrincipal",
  props: {
    modelValue: Number,
    fieldLabel: String
  },
  emits: ["update:modelValue"],
  data() {
    return {
      showInput: false
    };
  },
  computed: {
    percentageValue: {
      get() {
        const percentageValue = this.modelValue * 100;
        return percentageValue;
      },
      set(value) {
        const decimalValue = value / 100;
        this.$emit("update:modelValue", decimalValue);
      }
    },
    formattedValue() {
      return this.formatPercentage(this.modelValue);
    }
  },
  methods: {
    formatPercentage: function(amount) {
      const formatter = new Intl.NumberFormat("en-CA", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return formatter.format(amount);
    },
    toggleFieldEdit() {
      this.showInput = !this.showInput;
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
