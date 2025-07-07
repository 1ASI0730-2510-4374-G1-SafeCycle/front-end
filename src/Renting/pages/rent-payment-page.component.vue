<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import {BikeService} from "@/Renting/services/renting.service.js";
import {now} from "@/shared/services/time.service.js";

export default {
  name: "rent-payment-page",
  components: { BackButton, HeaderContent },
  data() {
    return {
      options: [
        { label: 'Visa', value: 'visa' },
        { label: 'MasterCard', value: 'mastercard' },
        { label: 'Yape', value: 'yape' }
      ],
      selectedOption: null,
      cardHolder: '',
      cardNumber: '',
      numberError: '',
      rentService : new BikeService()
    };
  },
  watch: {
    cardNumber(value) {
      const cleaned = value.replace(/\s+/g, '');

      if (!cleaned) {
        this.numberError = "Card number is required";
      } else if (!/^\d+$/.test(cleaned)) {
        this.numberError = "Only numbers are allowed";
      } else if (cleaned.length !== 16) {
        this.numberError = "Card number must be 16 digits long";
      } else {
        this.numberError = "";
      }}
    },
  methods: {
    async SubmitPaymentInformation() {
      const cardData = {
        cardNumber: this.cardNumber,
        type: this.selectedOption,
        holder: this.cardHolder,
        amount: 100000,
        userId : parseInt(localStorage.getItem("user")),
      };

      console.log(cardData);
      const response = await this.rentService.createPaymentMethod(cardData);
      console.log(response);

      if (response.status === 201) {

        const responsePayment = await this.SubmitPayment(response.data.id);
        console.log(responsePayment);

        if (responsePayment.status === 201) {
          this.$router.push({
            path: "/rent/successRent",
            query: {
              minutes: this.$route.query.minutes,
              price: this.$route.query.price,
              bikeId: this.$route.query.bikeId,
              paymentId: responsePayment.data.id,
            }})
        }
      }

      return response;
    },
    async SubmitPayment(paymentId) {
      const paymentData = {
        payMoment : now,
        price : parseFloat(this.$route.query.price),
        paymentInformationId : parseInt(paymentId)
      }

      var response = await this.rentService.createPayment(paymentData);
      return response;
    }
  }
}
</script>

<template>
  <header-content></header-content>
  <back-button></back-button>
  <h1 style="font-weight: bolder; text-align: center; margin-bottom: 50px">
    Payment in progress <span style="color: #65AE5B; font-weight: bold;"></span>
  </h1>
  <div class="flex align-items-center justify-content-center gap-6 flex-wrap">
    <div class="flex flex-column gap-3 w-3 align-items-center">
      <hr class="w-full border">
      <h4>Enter the holder of the card :</h4>
      <pv-input-text v-model="cardHolder"></pv-input-text>

      <h4>Enter your card number :</h4>
      <pv-input-text v-model="cardNumber"></pv-input-text>
      <small v-if="numberError" style="color: red;">{{ numberError }}</small>

      <h4>Choose your type of card</h4>
      <pv-select
          v-model="selectedOption"
          :options="options"
          optionLabel="label"
          optionValue="value"
          placeholder="Select a payment method"
      />
      <pv-button label="Pay" @click="SubmitPaymentInformation"></pv-button>
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
