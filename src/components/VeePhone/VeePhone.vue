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
  <input type="text" v-model="phoneNumber" v-phone />
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
  methods: {
    formatPhoneNumber() {
      const x = this.phoneNumber
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);

      if (!x[2] && x[1] !== "") {
        this.phoneNumber = x[1] === "8" ? x[1] : "8" + x[1];
      } else {
        this.phoneNumber = !x[3]
          ? x[1] + x[2]
          : x[1] + "(" + x[2] + ") " + x[3] + (x[4] ? "-" + x[4] : "");
      }
    },
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
