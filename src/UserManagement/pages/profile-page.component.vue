<script>
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "profile-page",
  components: {HeaderContent},
  methods:{
    goChangePass(){
      this.$router.push("/profile/changePassword")
    },
    goEditProfile(){
      this.$router.push("/profile/edit")
    }
  }
}
</script>

<template>
  <div class="flex flex-column min-h-screen">
<header-content></header-content>
  <div class="flex flex-1 align-items-center justify-content-center flex-column">
  <div class="flex w-5" style="margin-bottom: 5rem">
    <h1 class="font-bold">Hello, Luciana 👋</h1>
    <div class="flex-1"></div>
    <pv-button @click="goEditProfile()">Edit Profile</pv-button>
  </div>
    <div class="flex w-5 m-3">
    <div class="flex flex-column gap-4">
      <h3>Actual Fee: </h3>
      <p>Email: </p>
      <pv-button @click="goChangePass()">Change Password</pv-button>
    </div>
      <div class="flex-1"></div>
    <div>
      <h3>Language</h3>
      <div class="flex gap-2">
      <pv-button >EN</pv-button>
      <pv-button >ES</pv-button>
      </div>
    </div>
  </div>
    </div></div>
</template>

<style scoped>

</style>