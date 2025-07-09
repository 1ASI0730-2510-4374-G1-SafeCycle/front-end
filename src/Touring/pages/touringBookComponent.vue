<script>
import TouringForm from "@/Touring/components/touring-form.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";
import {TouringEntity} from "@/Touring/model/touringEntity.js";
import {TourApiService} from "@/Touring/services/tour-api.service.js";
import {TouringAssembler} from "@/Touring/services/touringAssembler.js";
import TouringCard from "@/Touring/components/touring-card.component.vue";


export default {
  name: "touringBookComponent",
  components: {TouringCard, HeaderContent, TouringForm},
  computed: {
    tourId() {
      return this.$route.params.id;
    }
  },
  data(){
    return {
      tour: TouringEntity,
      bikeStationId: 0,
      extraMinutes: 0,
      extraPrice: 0
    }
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    /**
     * @function getDetails
     * @description Send a request with TourApiService and then converts to Touring Entity
     */
    async getDetails() {
      const tourApiService = new TourApiService();
      console.log(this.tourId);
      const tourEnt = (await tourApiService.getTourById(this.tourId)).data
      console.log(tourEnt);
      this.tour = TouringAssembler.TourFromResponse(tourEnt);
    },
    /**
     * @function sendSuccess
     * @description Handler a emit and if is true the Book was correctly created
     */
    sendSuccess() {
      this.$router.push({
        name: 'touring-payment',
        params: {
          id: this.tourId
        },
        query: {
          price: this.tour.price + this.extraPrice,
          bikeStationId: this.bikeStationId,
          totalMinutes: this.totalMinutes,
          extraPrice: this.extraPrice
        }
      });
    },
    handleTourInfo(info) {
      this.extraMinutes = info.extraMinutes;
      this.totalMinutes = info.totalMinutes;
      this.extraPrice = info.extraPrice;
    }
  }
}
</script>

<template>

  <header-content></header-content>
  <h1 class="font-bold m-5">{{$t('touring.title2')}}</h1>
  <div class="tittle">
    <h1>Welcome to the {{this.tour.name}} for <span class="font-bold">{{this.tour.price}} soles</span></h1>
  </div>
  <div class="main">
    <touring-card :show-card=false :tour=tour></touring-card>
    <touring-form
        :tour="tour"
        @sendToSuccess="sendSuccess"
        @updateBikeStation="bikeStationId = $event"
        @updateTourInfo="handleTourInfo"
    />
  </div>
  <div class="flex align-items-center justify-content-center mt-6">
    <pv-stepper value="2" linear class="w-6 mb-7 align-self-center ">
      <pv-step-list>
        <pv-step value="1">{{$t('touring.step1')}}</pv-step>
        <pv-step value="2">{{$t('touring.step2')}}</pv-step>
        <pv-step value="3">{{$t('touring.pay')}}</pv-step>
        <pv-step value="4">{{$t('touring.step3')}}</pv-step>
      </pv-step-list>
    </pv-stepper>
  </div>

</template>

<style scoped>
.main{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.tittle{
  width: 100%;
  height: 100px;
  text-align: center;
  align-content: center;
  margin-top: 30px;
}
</style>