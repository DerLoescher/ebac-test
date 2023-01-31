<template>
  <div class="app">
    <header></header>
    <ProfilePage></ProfilePage>
    <footer></footer>
  </div>
</template>

<script>
import ProfilePage from "../pages/ProfilePage/ProfilePage.vue";
import "./index.scss";

export default {
  name: "App",
  components: { ProfilePage },
};
</script>
