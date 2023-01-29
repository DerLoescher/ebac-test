<template>
  <div>
    <VeeForm class="ProfilePersonalData-form" @submit="onSubmit">
      <label for="name">Name</label>
      <VeeField name="name" type="name" />
      <VeeField name="middleName" type="middle-name" />
      <VeeField name="surname" type="surname" />
      <VeeField name="birthDate" type="date"></VeeField>
      <VeeField name="email" type="email" :rules="validateEmail" />
      <VeeErrorMessage name="email" />
      <VeeField name="city"></VeeField>
      <VeeField name="phone" type="phone"></VeeField>
      <VeeField name="field" as="select" v-model="select">
        <option value="cofee">Coffee</option>
        <option value="tee">Tea</option>
        <option>Coke</option>
      </VeeField>
      <VeeField name="field" as="select" v-model="select">
        <option value="cofee">Coffee</option>
        <option value="tee">Tea</option>
        <option>Coke</option>
      </VeeField>
      <button type="submit">123</button>
    </VeeForm>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "ProfilePersonalData",
  data() {
    return {
      select: null,
      data: null,
      values: null,
    };
  },
  methods: {
    validateEmail(value) {
      if (!value) {
        return "This field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
    onSubmit(data) {
      console.log(data, 123);
      this.data = data;
      // this.$emit();
    },
  },
};
</script>
