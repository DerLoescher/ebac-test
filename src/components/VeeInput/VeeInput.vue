<template>
  <div class="VeeInput">
    <label class="VeeInput-label" :for="name" v-if="title">{{ title }}</label>
    <VeeField
      class="VeeInput-input"
      :name="name"
      :type="type"
      :rules="rules"
      :autocomplete="autocomplete"
    />
    <VeeErrorMessage class="VeeInput-error" :name="name" v-if="required" />
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "VeeInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Поле ввода",
    },
    rules: {
      type: Function,
      default: () => {},
    },
    autocomplete: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
