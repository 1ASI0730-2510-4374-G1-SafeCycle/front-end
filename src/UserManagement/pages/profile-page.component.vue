<script>
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "profile-page",
  components: {HeaderContent},
  methods: {
    /**
     * @function goChangePass
     * @description Handles the redirection to change password page.
     */
    goChangePass() {
      this.$router.push("/profile/changePassword")
    },
    /**
     * @function goChangePass
     * @description Handles the redirection to edit profile page.
     */
    goEditProfile() {
      this.$router.push("/profile/edit")
    },
  },
}
</script>

<template>
  <div class="flex flex-column min-h-screen">
    <header-content></header-content>
    <div class="flex flex-1 align-items-center justify-content-center flex-column">
      <div class="flex w-5" style="margin-bottom: 5rem">
        <h1 class="font-bold">{{ $t('user.profile.hello') }}, Luciana 👋</h1>
        <div class="flex-1"></div>
        <pv-button @click="goEditProfile()">{{$t('user.profile.edit')}}</pv-button>
      </div>
      <div class="flex w-5 m-3">
        <div class="flex flex-column gap-4">
          <h3>{{$t('user.profile.fee')}}: </h3>
          <p>Email: </p>
          <pv-button @click="goChangePass()">{{$t('user.profile.change')}}</pv-button>
        </div>
        <div class="flex-1"></div>
        <div>
          <div class="flex gap-2">
          </div>
        </div>
      </div>
    </div></div>
</template>

<style scoped>

</style>