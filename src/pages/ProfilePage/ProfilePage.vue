<template>
  <div class="ProfilePage">
    <div class="ProfilePage-wrapper">
      <ProfileAvatar
        class="ProfilePage-avatar"
        @changeAvatar="changeAvatar"
        @removeAvatar="removeAvatar"
        :defaultAvatar="defaultAvatar"
      />
      <ProfilePersonalData />
      <ProfilePasswordEdit />
    </div>
  </div>
</template>

<script>
import ProfileAvatar from "../../modules/ProfileAvatar/ProfileAvatar.vue";
import ProfilePasswordEdit from "../../modules/ProfilePasswordEdit/ProfilePasswordEdit.vue";
import ProfilePersonalData from "../../modules/ProfilePersonalData/ProfilePersonalData.vue";
import "./styles.scss";

export default {
  name: "ProfilePage",
  components: { ProfilePersonalData, ProfilePasswordEdit, ProfileAvatar },
  data() {
    return {
      userId: 123,
      userForm: {
        avatar: null,
        data: {
          name: "null",
          surname: "null",
        },
        password: null,
      },
    };
  },
  computed: {
    defaultAvatar() {
      if (!this.userForm.data.name) {
        return false;
      }
      let userInitials = `${this.userForm.data.name[0].toUpperCase()}${this.userForm.data.surname[0].toUpperCase()}`;
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      return { text: userInitials, color: randomColor };
    },
  },
  methods: {
    changeAvatar(file) {
      this.userForm.avatar = file;
    },
    removeAvatar() {
      this.userForm.avatar = null;
    },
  },
};
</script>
