import { app } from "./app";
import { Field, Form, ErrorMessage } from "vee-validate";
import phoneMask from "@/shared/directives/phoneMask";

app.directive("phone", phoneMask);
app
  .component("VeeField", Field)
  .component("VeeForm", Form)
  .component("VeeErrorMessage", ErrorMessage)
  .mount("#app");
