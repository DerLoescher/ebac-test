<template>
  <div>
    <label :for="name">{{ title }}</label>
    <VeeField
      :name="name"
      as="select"
      v-model="select"
      :autocomplete="autocomplete"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </VeeField>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "VeeSelect",
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    autocomplete: String,
  },
};
</script>
