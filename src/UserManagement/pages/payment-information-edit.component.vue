<script>
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "payment-information-edit",
  components: { HeaderContent },
  data() {
    return {
      cardNumber: '',
      cardType: '',
      holderName: ''
    }
  },
  methods: {
    saveChanges(){
      history.back();
    }
  }
}
</script>

<template>
  <header-content />

  <div class="flex h-full align-items-center justify-content-center">
    <div class="flex flex-column w-3 gap-4">
      <h1 class="font-bold">Payment Information</h1>

      <div class="flex flex-column gap-1">
        <label for="cardNumber">Card Number</label>
        <pv-input-text id="cardNumber" type="text" v-model="cardNumber" />
      </div>

      <div class="flex flex-column gap-1">
        <label for="cardType">Type</label>
        <pv-input-text id="cardType" type="text" v-model="cardType" />
      </div>

      <div class="flex flex-column gap-1">
        <label for="holderName">Holder Name</label>
        <pv-input-text id="holderName" type="text" v-model="holderName" />
      </div>

      <pv-button label="Confirm Changes" class="mt-2" @click="saveChanges()"></pv-button>
    </div>
  </div>
</template>

<style scoped>
</style>