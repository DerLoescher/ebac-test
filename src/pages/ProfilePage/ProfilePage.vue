<template>
  <div>
    <ProfileAvatar @avatarChange="avatarChange" />
    <ProfilePersonalData />
    <ProfilePasswordEdit />
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
        data: null,
        password: null,
      },
    };
  },
  methods: {
    avatarChange(file) {
      this.userForm.avatar = file;
    },
  },
};
</script>
