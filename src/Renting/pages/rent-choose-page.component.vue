<script>
import BackButton from "@/public/components/back-button.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";
import {Select as PvSelect} from "primevue";
import {BikeService} from "@/Renting/services/renting.service.js";

const rentingService = new BikeService();

export default {
  name: "rent-choose-page",
  components: {PvSelect, HeaderContent, BackButton},

  /**
   * @function data
   * @description Defines the reactive properties of the component
   * @returns {Object} Reactive object containing selected station and list of stations
   */

  data() {
    return {
      selectedStation: null,
      stations: [],
    };
  },

  /**
   * @function mounted
   * @description Lifecycle hook that runs after the component is created.
   * Fetches all available bike stations from the API for the list.
   */
  async mounted() {
    const minutes = this.$route.query.minutes;
    console.log("Minutes from previous page:", minutes);

      const response = await rentingService.getBikeStations();
      if (!response.status === "OK") {
        console.error("Failed to fetch stations");
        return;
      }
      this.stations = await response.data;
  }
  ,
  methods: {
    /**
     * @function onRentClick
     * @description Handles the bike rental process when the user clicks to rent.
     * Fetches available bikes for the selected station and navigates to the success page if bikes are available.
     */
    noBikesAvailable() {
      console.log("No bikes in Station.");
      this.$root.$refs.toast.add({
        severity: 'warn',
        summary: 'No bikes in Station, Please choose another one',
        life: 3000
      });
    },

    async onRentClick(){
      try {
        const bikesInStation = await rentingService.getAvailableBikesByStationId(this.selectedStation.id);
        console.log(bikesInStation)
        if (!bikesInStation.status === "OK") {
        console.error("Failed to fetch bikes");
        return;
        }
        console.log("Bikes found:", bikesInStation.data);

        if(bikesInStation.data.length === 0){
          this.noBikesAvailable();
        }
        else{
          // First available bike selected
          const bike = bikesInStation.data[0];
          const minutes = this.$route.query.minutes;
          const price = ((minutes * 0.045) + 1).toFixed(2);

          // Navigation to the success rent page with query params to access data
          this.$router.push({
            path: "/rent/successRent",
            query: {
              minutes,
              price: price,
              bikeId: bike.id
            }})
        }
      }catch (error) {
        if (error.response.status === 404) {
          this.noBikesAvailable();
          console.log("No bikes in Station (404).");
      }
    }
  }
}}
</script>

<template>

  <header-content></header-content>
  <back-button></back-button>
  <div class="flex align-items-center justify-content-center gap-6 flex-wrap">
  <div class="flex flex-column gap-3 w-3 align-items-center">
    <hr class="w-full border">
      <h2>Time: {{ $route.query.minutes }} minutes</h2>
      <h2>Price: {{ (($route.query.minutes * 0.045)+1).toFixed(2)  }} S/.</h2>
    <hr class="w-full border">
    <h3>2 SafeCycles centrals near you</h3>
    <pv-button label="Rent" :disabled="!selectedStation" @click="onRentClick()"></pv-button>
  </div>
    <div class="flex flex-column gap-3 align-items-center" style="width:40rem">
    <img src="https://i.ibb.co/ZpQJn7Vq/image-2025-05-12-170659856.png" alt="Map Image">
    <pv-select v-model="selectedStation" :options="stations" optionLabel="name" placeholder="Select a Station" class="w-full"></pv-select>
    </div>
  </div>
</template>

<style scoped>

</style>