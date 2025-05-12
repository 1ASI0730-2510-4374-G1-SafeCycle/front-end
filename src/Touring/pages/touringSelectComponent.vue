<script>
import {TouringEntity} from "@/Touring/model/touringEntity.js";
import HeaderContent from "@/public/components/header-content.component.vue";
import {TourApiService} from "@/Touring/services/tour-api.service.js";
import TouringList from "@/Touring/components/touring-list.component.vue";

export default {
  name: "touringSelectComponent",
  components: {TouringList, HeaderContent},
  data(){
    return {
      tourData : Array[TouringEntity]
    }
  },
  created(){
    this.tourData = this.getTourData();
    console.log(this.tourData);
  }
  ,
  methods:{
    getTourData(){
      const tourApiService = new TourApiService();
      return tourApiService.getAllTours();
    }
  }
}
</script>

<template>
 <header-content></header-content>
  <touring-list :tour-list=tourData></touring-list>
</template>

<style scoped>

</style>