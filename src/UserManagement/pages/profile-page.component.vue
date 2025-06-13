<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import i18n from "@/i18n.js";

export default {
  name: "profile-page",
  components: {HeaderContent},
  methods:{
    /**
     * @function goChangePass
     * @description Handles the redirection to change password page.
     */
    goChangePass(){
      this.$router.push("/profile/changePassword")
    },
    /**
     * @function goChangePass
     * @description Handles the redirection to edit profile page.
     */
    goEditProfile(){
      this.$router.push("/profile/edit")
    },
    changeLanguageEn(){
      i18n.global.locale = "en"
    },
    changeLanguageEs(){
      i18n.global.locale = "es"
    }
  }
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
          <h3>{{$t('user.profile.language')}}</h3>
          <div class="flex gap-2">
            <pv-button @click="changeLanguageEn">EN</pv-button>
            <pv-button @click="changeLanguageEs">ES</pv-button>
          </div>
        </div>
      </div>
    </div></div>
</template>

<style scoped>

</style>