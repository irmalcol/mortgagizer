<template>
  <div class="header-item">
    <div v-if="!showInput" class="header-value">
      {{ formattedValue }}
      <button @click="toggleFieldEdit">Edit</button>
    </div>
    <div v-if="showInput">
      <input v-model="dollarValue" />
      <button @click="toggleFieldEdit">Done</button>
    </div>
    <div class="header-label">{{ fieldLabel }}</div>
  </div>
</template>

<script>
export default {
  name: "header-input-dollar-amount",
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
    dollarValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    formattedValue() {
      return this.formatCurrencyNoDecimals(this.modelValue);
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
