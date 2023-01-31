<template>
  <div>
    <VeeForm
      class="ProfilePersonalData-form"
      @submit="onSubmit"
      v-slot="{ values }"
    >
      <VeeInput
        :name="'name'"
        :type="'text'"
        :title="'Name'"
        :autocomplete="'given-name'"
      />
      <VeeInput
        :name="'middleName'"
        :type="'text'"
        :title="'Middle Name'"
        :autocomplete="'additional-name'"
      />
      <VeeInput
        :name="'lastName'"
        :type="'text'"
        :title="'Last Name'"
        :autocomplete="'family-name'"
      />
      <VeeInput
        :name="'birthDate'"
        :type="'date'"
        :title="'Date of birth'"
        autocomplete="bday"
      />
      <VeeInput
        :name="'email'"
        :type="'email'"
        :title="'Email'"
        :rules="validateEmail"
        :required="true"
      />

      <VeeField name="city"></VeeField>
      <VeePhone
        :name="'tel'"
        :type="'tel'"
        :title="'Phone Number'"
        :rules="validateEmail"
        :required="true"
      />
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
      <button type="submit" @click="onSubmit(values)">123</button>
    </VeeForm>
  </div>
</template>

<script>
import VeePhone from "../../components/VeePhone/VeeInput/VeePhone.vue";
import VeeInput from "../../components/VeeInput/VeeInput.vue";
import "./styles.scss";

export default {
  name: "ProfilePersonalData",
  components: { VeeInput, VeePhone },
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
