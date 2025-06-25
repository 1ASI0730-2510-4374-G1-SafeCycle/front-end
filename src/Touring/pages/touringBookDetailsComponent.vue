<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import TouringDetails from "@/Touring/components/touring-details.component.vue";
import {TourBookEntity} from "@/Touring/model/tourBookEntity.js";
import {TourBookApiService} from "@/Touring/services/tour-book-api.service.js";
import {TourBookAssembler} from "@/Touring/services/tourBookAssembler.js";

export default {
  name: "touringBookDetailsComponent",
  components: {TouringDetails, HeaderContent},
  data(){
    return {
      tourBook : TourBookEntity
    }
  },
  created(){
    this.fetchTourBook();
  },
  methods:{
    /**
     * @function fetchTourBook
     * @description Send a request with TourApiService and then converts to Touring Entity
     */
    async fetchTourBook(){
      const tourBookApi = new TourBookApiService();
      const tourRaw = await tourBookApi.getTourBook(1);
      this.tourBook = TourBookAssembler.EntityFromResponse(tourRaw);
    }
  }
}
</script>

<template>
  <header-content></header-content>
  <div class="container">
    <touring-details :booked="tourBook" />
  </div>

</template>

<style scoped>

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
}

</style>