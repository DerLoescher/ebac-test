<template>
  <div class="VeePhone">
    <label class="VeePhone-label" :for="name" v-if="title">{{ title }}</label>
    <div class="VeePhone-input">
      <VeeField
        :name="name"
        :type="type"
        :rules="rules"
        autocomplete="tel"
        v-model="phoneNumber"
      >
        <select class="select" name="code" v-model="postalCode">
          <option v-for="code in codesArray" :key="code.name" :value="code">
            {{ code.name }}
          </option>
        </select>
        <input type="tel" name="" v-model="phoneNumber" v-phone />
      </VeeField>
    </div>
    <VeeErrorMessage class="VeePhone-error" :name="name" v-if="required" />
  </div>
  <span>тлефон</span>
  <input type="text" v-phone="phoneNumber" v-model="phoneNumber" />
</template>

<script>
import "./styles.scss";
import countryCodes from "@/shared/const/CountryCodes.json";

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
      codesArray: countryCodes,
      phoneNumber: null,
    };
  },
  watch: {
    postalCode() {
      this.phoneNumber = this.postalCode.dial_code;
    },
  },
  // computed: {
  //   codesArray() {
  //     return countryCodes;
  //   },
  // },
};
</script>
