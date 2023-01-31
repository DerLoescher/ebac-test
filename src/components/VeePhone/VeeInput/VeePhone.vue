<template>
  <div class="VeePhone">
    <label class="VeePhone-label" :for="name" v-if="title">{{ title }}</label>
    <VeeField as="select" v-model="postalCode">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </VeeField>
    <VeeField
      class="VeePhone-input"
      :name="name"
      :type="type"
      :rules="rules"
      autocomplete="tel"
    />
    <VeeErrorMessage class="VeePhone-error" :name="name" v-if="required" />
  </div>
</template>

<script>
import "./styles.scss";
import "@/shared/CountryCodes.json";

export default {
  name: "VeePhone",
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
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      postalCode: null,
    };
  },
  computed: {
    codesArray() {
      return this.codes;
    },
  },
  mounted() {
    fetch("@/shared/CountryCodes.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
};
</script>
