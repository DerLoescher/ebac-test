<template>
  <div>
    <VeeForm @submit="onSubmit">
      <VeeField name="email" type="email" :rules="validateEmail" />
      <VeeErrorMessage name="email" />
      <button>Sign up</button>

      <VeeField name="field" as="select" v-model="select">
        <option value="cofee">Coffee</option>
        <option value="tee">Tea</option>
        <option>Coke</option>
      </VeeField>
    </VeeForm>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "ProfilePersonalData",
};
</script>
