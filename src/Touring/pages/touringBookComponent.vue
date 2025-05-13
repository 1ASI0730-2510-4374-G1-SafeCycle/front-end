<script>
import TouringForm from "@/Touring/components/touring-form.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";
import {TouringEntity} from "@/Touring/model/touringEntity.js";
import {TourApiService} from "@/Touring/services/tour-api.service.js";
import {TouringAssembler} from "@/Touring/services/touringAssembler.js";
import TouringCard from "@/Touring/components/touring-card.component.vue";
import router from "@/router/index.js";

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
      tour : TouringEntity
    }
  },
  mounted() {
    this.obtenerDetalle();
  },
  methods: {
    async obtenerDetalle() {
      const tourApiService = new TourApiService();
      console.log(this.tourId);
      const tourEnt = (await tourApiService.getTourById(this.tourId)).data
      this.tour = TouringAssembler.TourFromResponse(tourEnt);
    }
  }
}
</script>

<template>

  <header-content></header-content>
  <div class="tittle">
    <h1>Welcome to the {{this.tour.name}} for <span class="font-bold">{{this.tour.price}} soles</span></h1>
  </div>
  <div class="main">
    <touring-card :show-card=false :tour=tour></touring-card>
    <touring-form></touring-form>
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