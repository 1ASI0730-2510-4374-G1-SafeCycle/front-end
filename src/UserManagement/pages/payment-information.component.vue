<script>
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "payment-information",
  components: {HeaderContent},
  methods:{
    /**
     * @function editPayment
     * @description Handles the redirection to Payment Information page.
     * */
    editPayment(){
      this.$router.push("/paymentInformation/edit");
    }
  }
}
</script>

<template>
  <div class="flex flex-column min-h-screen">
  <header-content></header-content>

<div class="flex flex-1 align-items-center justify-content-center">
  <div class="flex flex-column align-center justify-center w-3 gap-2">
    <h1 class="font-bold">{{$t('user.pay.paymentinfo')}}</h1>
    <div class="flex align-center justify-center">
      <p>{{$t('user.pay.card')}}: {{number}}</p>
      <div class="flex-1"></div>
      <p>VISA</p>
    </div>
    <p>{{$t('user.pay.holder')}}: {{name}}</p>
    <pv-button :label="$t('user.pay.edit')" @click="editPayment()"></pv-button>
  </div>
</div></div>
</template>

<style scoped>
</style>