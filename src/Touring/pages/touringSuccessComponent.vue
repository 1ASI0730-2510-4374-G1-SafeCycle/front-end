<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import {TourApiService} from "@/Touring/services/tour-api.service.js";
import {TouringEntity} from "@/Touring/model/touringEntity.js";
import {TouringAssembler} from "@/Touring/services/touringAssembler.js";
import TouringCard from "@/Touring/components/touring-card.component.vue";

export default {
  name: "touringSuccessComponent",
  components: {TouringCard, HeaderContent},
  data(){
    return {
      tour : TouringEntity
    }
  },
  created(){
    this.fetchTour();
  }
  ,methods:{
    /**
     * @function fetchTour
     * @description Send a request with TourApiService and then converts to Touring Entity
     */
    async fetchTour(){
      const tourApi = new TourApiService();
      this.tour = (await tourApi.getTourById(this.$route.params.id)).data;
      console.log("pineapple",this.tour);
    },
    /**
     * @function returnToMain
     * @description With the router the user is sent to the main page
     */
    returnToMain(){
      this.$router.push("/touring");
    }
  }
}
</script>

<template>
  <header-content></header-content>
  <div class="container">
    <div class="main">
      <touring-card :tour=this.tour :show-card="false" ></touring-card>
      <div class="text">
        <h1>{{$t('touring.succesfully')}}</h1>
        <pv-button @click="returnToMain" :label="$t('touring.return')"></pv-button>
      </div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-center mt-6">
    <pv-stepper value="3" linear class="w-6 mb-7 align-self-center ">
      <pv-step-list>
        <pv-step value="1">{{$t('touring.step1')}}</pv-step>
        <pv-step value="2">{{$t('touring.step2')}}</pv-step>
        <pv-step value="3">{{$t('touring.step3')}}</pv-step>
      </pv-step-list>
    </pv-stepper>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  margin-bottom: 20px;
}
.main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
  width: 60%;
}
</style>