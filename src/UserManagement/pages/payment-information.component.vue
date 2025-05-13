<script>
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "payment-information",
  components: {HeaderContent},
  methods:{
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
    <h1 class="font-bold">Payment Information</h1>
    <div class="flex align-center justify-center">
      <p>Card Number: {{number}}</p>
      <div class="flex-1"></div>
      <p>VISA</p>
    </div>
    <p>Holder: {{name}}</p>
    <pv-button label="Edit Payment Information" @click="editPayment()"></pv-button>
  </div>
  </div></div>
</template>

<style scoped>
</style>