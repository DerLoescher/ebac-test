<template>
  <div>
    <input
      class="ProfileAvatar-input"
      type="file"
      accept="image/*"
      ref="file"
      @change="changeAvatar"
    />
    <div
      class="ProfileAvatar-image"
      :style="{
        'background-color': avatarSrc ? '#FEFEFE' : defaultAvatar.color,
      }"
    >
      <img
        class="ProfileAvatar-image-pic"
        :src="avatarSrc"
        alt="avatar"
        v-if="avatarSrc"
      />
      <span v-if="!avatarSrc && defaultAvatar">{{ defaultAvatar.text }}</span>
      <span v-else></span>
      <div class="ProfileAvatar-image-browse">
        <button @click="browse" title="browse">
          <img src="@/ui/icons/camera-icon.svg" />
        </button>
        <button @click="remove" v-if="avatarSrc" title="delete">
          <img src="@/ui/icons/trash-icon.svg" />
        </button>
      </div>
    </div>
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
    defaultAvatar: {
      type: Object,
      required: false,
    },
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    remove() {
      this.avatarSrc = null;
      this.$emit("removeAvatar");
    },
    changeAvatar(e) {
      this.loadedFile = e.target.files[0];

      this.$emit("changeAvatar", this.loadedFile);

      let reader = new FileReader();
      reader.readAsDataURL(this.loadedFile);
      reader.onload = (e) => {
        this.avatarSrc = e.target.result;
      };
    },
  },
  emits: ["changeAvatar", "removeAvatar"],
};
</script>
