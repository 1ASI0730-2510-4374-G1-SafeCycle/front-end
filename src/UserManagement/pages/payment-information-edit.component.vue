<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";

export default {
  name: "payment-information-edit",
  components: {BackButton, HeaderContent },
  data() {
    return {
      cardNumber: '',
      cardType: '',
      holderName: ''
    }
  },
  methods: {
    /**
     * @function saveChanges
     * @description Handles the redirection back to the Payment Information page.
     * */
    saveChanges(){
      history.back();
    }
  }
}
</script>

<template>
  <div class="flex flex-column min-h-screen">
  <header-content></header-content>
    <back-button></back-button>

  <div class="flex flex-1 align-items-center justify-content-center">
    <div class="flex flex-column w-3 gap-4">
      <h1 class="font-bold">{{$t('user.pay.paymentinfo')}}</h1>

      <div class="flex flex-column gap-1">
        <label for="cardNumber">{{$t('user.pay.card')}}</label>
        <pv-input-text id="cardNumber" type="text" v-model="cardNumber" />
      </div>

      <div class="flex flex-column gap-1">
        <label for="cardType">{{$t('general.type')}}</label>
        <pv-input-text id="cardType" type="text" v-model="cardType" />
      </div>

      <div class="flex flex-column gap-1">
        <label for="holderName">{{$t('user.pay.holder')}}</label>
        <pv-input-text id="holderName" type="text" v-model="holderName" />
      </div>

      <pv-button :label="$t('user.pay.confirm')" class="mt-2" @click="saveChanges()"></pv-button>
    </div>
  </div>
  </div>
</template>

<style scoped>
</style>