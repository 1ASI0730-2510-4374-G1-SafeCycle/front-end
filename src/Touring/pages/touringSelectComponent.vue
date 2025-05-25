<script>
import {TouringEntity} from "@/Touring/model/touringEntity.js";
import HeaderContent from "@/public/components/header-content.component.vue";
import {TourApiService} from "@/Touring/services/tour-api.service.js";
import TouringList from "@/Touring/components/touring-list.component.vue";
import {TouringAssembler} from "@/Touring/services/touringAssembler.js";

export default {
  name: "touringSelectComponent",
  components: {TouringList, HeaderContent},
  data(){
    return {
      tourData : Array[TouringEntity]
    }
  },
  created(){
    this.getTourData().then(tourData=>{
      this.tourData = tourData;
    })
  }
  ,
  methods:{
    /**
     * @function getTourData
     * @description Send a request with TourApiService and then converts to Touring Entity
     */
    async getTourData(){
      try {
        const tourApiService = new TourApiService();
        const toursRaw = await tourApiService.getAllTours();
        return TouringAssembler.ToursFromResponse(toursRaw);
      }
      catch(error){
        console.log(error)
      }
    },
    /**
     * @function createCard
     * @description Push to touring-detail view with tour id
     */
    createCard(){
      this.router.push({name: 'touring-detail', params: {tourId: this.tourData.id}});
    }
  }
}
</script>

<template>
 <header-content></header-content>
  <touring-list
     @selectedTour="createCard" :tourList=tourData></touring-list>
</template>

<style scoped>

</style>