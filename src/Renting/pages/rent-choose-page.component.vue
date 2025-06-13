<script>
import BackButton from "@/public/components/back-button.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";
import {BikeService} from "@/Renting/services/renting.service.js";
import {
  GoogleMap as PvGoogleMap,
  InfoWindow as PvGoogleInfoWindow,
  Marker as PvGoogleMarker,
  MarkerCluster as PvGoogleMarkerCluster
} from "vue3-google-map";

export default {
  name: "rent-choose-page",
  components: {PvGoogleMarkerCluster, PvGoogleInfoWindow, PvGoogleMarker, PvGoogleMap, HeaderContent, BackButton},

  /**
   * @function data
   * @description Defines the reactive properties of the component
   * @returns {Object} Reactive object containing selected station and list of stations
   */

  data() {
    return {
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      selectedStation: null,
      stations: [],
      currentLocation: null
    };
  },

  /**
   * @function created
   * @description Lifecycle hook that runs after the component is created.
   * Fetches all available bike stations from the API for the list.
   */
  async created() {
    const rentingService = new BikeService();

    const minutes = this.$route.query.minutes;
    console.log("Minutes from previous page:", minutes);

      const response = await rentingService.getBikeStations();
      if (!response.status === "OK") {
        console.error("Failed to fetch stations");
        return;
      }

    this.stations = await response.data;

    this.getLocation()

  }
  ,
  methods: {
    /**
     * @function noBikesAvailable
     * @description Toast of warning for events of a station not having bikes available
     */
    noBikesAvailable() {
      console.log("No bikes in Station.");
      this.$root.$refs.toast.add({
        severity: 'warn',
        summary: this.$t('rent.text.nobikes'),
        life: 3000
      });
    },

    /**
     * @function onRentClick
     * @description Handles the bike rental process when the user clicks to rent.
     * Fetches available bikes for the selected station and navigates to the success page if bikes are available.
     */
    async onRentClick(){
      try {
        const bikesInStation = await this.rentingService.getAvailableBikesByStationId(this.selectedStation.id);
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
          const bike = bikesInStation.data[0];
          const minutes = this.$route.query.minutes;
          const price = ((minutes * 0.045) + 1).toFixed(2);

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
  },
    /**
     * @function getLocation
     * @description Petition of users location, if denied a default address is given for
     * Google Maps to read
     */
  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          position => {
            console.log("Lat:", position.coords.latitude, "Long:", position.coords.longitude);
            this.currentLocation = position.coords;
            console.log(position.coords);
          },
          error => {
            console.log(error);
            this.currentLocation = {latitude: -12.083318209925721, longitude: -76.96892884700749};
          }
      );
    }
  },
    /**
     * @function getInitialsOfStation
     * @description Returns a string of the Initials of a Bike Station
     */
  getInitialsOfStation(stationName){
    let tempStation = stationName.split(' ')
    if (tempStation.length === 1) return tempStation[0][0];
    else return tempStation[0][0] + tempStation[1][0]
  }
}}
</script>

<template>

  <header-content></header-content>
  <back-button></back-button>
  <div class="flex align-items-center justify-content-center gap-6 flex-wrap">
  <div class="flex flex-column gap-3 w-3 align-items-center">
    <hr class="w-full border">
      <h2>{{$t('booking.time.time')}}: {{ $route.query.minutes }} minutes</h2>
      <h2>{{$t('booking.confirmation.cost')}}: {{ (($route.query.minutes * 0.045)+1).toFixed(2)  }} S/.</h2>
    <hr class="w-full border">
    <h3>2 {{$t('rent.text.centrals')}}</h3>
    <pv-button :label="$t('header.buttons.rent')" :disabled="!selectedStation" @click="onRentClick()"></pv-button>
  </div>
    <div class="flex flex-column gap-3 align-items-center" style="width:40rem">

<pv-google-map
      v-if="currentLocation"
      :api-key="apiKey"
      style="width: 100%; height: 500px"
      :center="{ lat: this.currentLocation.latitude, lng: this.currentLocation.longitude }"
      :zoom="16">

        <pv-google-marker-cluster>
          <pv-google-marker
              v-for="(station, index) in stations"
              :key="index"
              :options="{ position: { lat: station.lat, lng: station.lng }, label: getInitialsOfStation(station.name)}"
          >
            <pv-google-info-window>
              <div>
                <strong>{{ station.name }}</strong>
              </div>
            </pv-google-info-window>
          </pv-google-marker>
        </pv-google-marker-cluster>
      </pv-google-map>



    <pv-select v-model="selectedStation" :options="stations" optionLabel="name" :placeholder="$t('rent.text.select')" class="w-full"></pv-select>
    </div>
  </div>
</template>

<style>

</style>