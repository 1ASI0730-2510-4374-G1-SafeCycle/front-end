<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";

export default{
  name: "rent-payment-page",
  components: {BackButton, HeaderContent},
  data(){
    return {
      options: [
        { label: 'Visa', value: 'visa' },
        { label: 'MasterCard', value: 'mastercard' },
        { label: 'Yape', value: 'yape' }
      ],
      selectedOption: null
    };
  }
}
</script>

<template>
  <header-content></header-content>
  <back-button></back-button>
  <h1 style="font-weight: bolder; text-align: center; margin-bottom: 50px">{{$t('general.bike')}} <span style="color: #65AE5B; font-weight: bold;">{{$route.query.bikeId}}</span> {{$t('rent.text.succes')}}</h1>
  <div class="flex align-items-center justify-content-center gap-6 flex-wrap">
    <div class="flex flex-column gap-3 w-3 align-items-center">
      <hr class="w-full border">
      <h4>Enter the holder of the card :</h4>
      <pv-input-text></pv-input-text>
      <h4>Enter your card number :</h4>
      <pv-input-text></pv-input-text>
      <h4>Choose your type of card</h4>
      <pv-select
          v-model="selectedOption"
          :options="options"
          optionLabel="label"
          optionValue="value"
          placeholder="Select a payment method"
      />
      <pv-button label="Pagar"></pv-button>
      <hr class="w-full border">
    </div>
    <div class="flex flex-column gap-3 align-items-center" style="width:40rem">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/027/513/630/small_2x/blue-with-online-payment-concept-concept-flat-illustration-vector.jpg" alt="Map Image">
    </div>
    <pv-stepper value="3" linear class="w-6 mb-7 align-self-center ">
      <pv-step-list>
        <pv-step value="1">{{$t('rent.step1')}}</pv-step>
        <pv-step value="2">{{$t('rent.step2')}}</pv-step>
        <pv-step value="3">{{$t('rent.step3')}}</pv-step>
        <pv-step value="4">{{$t('rent.step4')}}</pv-step>
      </pv-step-list>
    </pv-stepper>
  </div>

</template>

<style scoped>

</style>