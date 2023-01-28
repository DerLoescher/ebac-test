import { app } from "./app";
import { Field, Form, ErrorMessage } from "vee-validate";

app
  .component("VeeField", Field)
  .component("VeeForm", Form)
  .component("VeeErrorMessage", ErrorMessage)
  .mount("#app");
