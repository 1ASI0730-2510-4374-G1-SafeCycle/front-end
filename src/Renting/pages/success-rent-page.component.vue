<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import {BikeService} from "@/Renting/services/renting.service.js";

export default {
  name: "success-rent-page",
  components: {BackButton, HeaderContent},
  data(){
    return {
       minutes: null,
       price : null,
      bikeId: null,
      rentService :  new BikeService()
    };
  },
  created(){
    this.minutes = this.$route.query.minutes;
    this.price = this.$route.query.price;
    this.bikeId = this.$route.query.bikeId;
  },
  methods:{
    async OnRentSumbit(){
      const rentData = {
        minutes: this.minutes,
        price: this.price,
        bikeId: this.bikeId,
        paymentId : this.$route.query.paymentId,
        userId : localStorage.getItem("user"),
        bikeStationId : this.$route.query.bikeId
      };

      const response =await this.rentService.createRent(rentData);
      console.log(response);

      if(response.status === 201){
        this.$router.push({path : "/landing"});
      }
    }
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
      <h2>{{$t('booking.time.time')}}: {{$route.query.minutes}} {{$t('general.minutes')}}</h2>
      <h2>{{$t('general.price')}}: {{ $route.query.price }} S/.</h2>
      <h2>{{$t('rent.paymentmethod')}}: VISA</h2>
      <pv-button label="Rent my bike!" @click="OnRentSumbit"></pv-button>
      <hr class="w-full border">
    </div>
    <div class="flex flex-column gap-3 align-items-center" style="width:40rem">
      <img src="https://img.freepik.com/premium-vector/man-riding-bicycle-cyclist-summer-cyclist-driving-cycling-person-bike-eco-city-transport_442961-292.jpg" alt="Map Image">
    </div>
    <pv-stepper value="4" linear class="w-6 mb-7 align-self-center ">
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