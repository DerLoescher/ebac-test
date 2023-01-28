<template>
  <div>
    <input
      class="Avatar-input"
      type="file"
      accept="image/*"
      ref="file"
      @change="changeAvatar"
    />
    <img class="Avatar-image" :src="avatarSrc" alt="avatar" />
    <button @click="browse">Browse</button>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "ProfileAvatar",
  data() {
    return {
      avatarSrc: null,
      loadedFile: null,
    };
  },
  props: {
    userId: {
      type: Number,
      required: false,
    },
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    changeAvatar(e) {
      this.loadedFile = e.target.files[0];

      this.$emit("avatarChange", this.loadedFile);

      let reader = new FileReader();
      reader.readAsDataURL(this.loadedFile);
      reader.onload = (e) => {
        this.avatarSrc = e.target.result;
      };
    },
  },
};
</script>
