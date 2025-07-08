<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import { BikeService } from "@/Renting/services/renting.service.js";
import {
  GoogleMap as PvGoogleMap,
  InfoWindow as PvGoogleInfoWindow,
  Marker as PvGoogleMarker,
  MarkerCluster as PvGoogleMarkerCluster
} from "vue3-google-map";

export default {
  name: "current-rental-page",
  components: { PvGoogleMarkerCluster, PvGoogleInfoWindow, PvGoogleMarker, PvGoogleMap,BackButton, HeaderContent },
  data() {
    return {
      rental: null,
      rentService: new BikeService(),
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    };
  },
  computed: {
    currentLocation() {
      return this.rental?.bikeStationId?.location || null;
    },
    currentStationName() {
      return this.rental?.bikeStationId?.name || "";
    }
  },
  async created() {
    const userId = localStorage.getItem("user");
    this.rental = (await this.rentService.getCurrentRental(userId)).data;
    console.log(this.rental);
  },
  methods: {
    async deleteRent(){
      const userdata = {
        userId : parseInt(localStorage.getItem("user"))};

      var respose = await this.rentService.removeRent(userdata);
      window.location.reload();
      console.log(respose);
      this.$router.push("/rent")
    }
  }
};
</script>

<template>
  <header-content></header-content>
  <h1 style="font-weight: bolder; text-align: center; margin-bottom: 50px; margin-top: 3rem">
    {{$t('header.smallbox.rentals')}}
  </h1>

  <div v-if="rental" class="flex align-items-center justify-content-center gap-6 flex-wrap">
    <div class="flex flex-column gap-3 w-3 align-items-center">
      <hr class="w-full border" />

      <h2>
        {{$t('booking.time.time')}}:
        {{ Math.floor((new Date(rental.endTime) - new Date(rental.startTime)) / 60000) }}
        {{$t('general.minutes')}}
      </h2>

      <h2>
        {{$t('general.price')}}: S/. {{ rental.paymentId.price }}
      </h2>

      <h2>
        {{$t('rent.paymentmethod')}}:
        {{ rental.paymentId.paymentInformationId.type.toUpperCase() }}
      </h2>

      <h3>
        {{ rental.userId.email }}
      </h3>
      <pv-button label="Delete Rent" severity="danger" @click="deleteRent"></pv-button>
      <hr class="w-full border" />
    </div>

    <div class="flex flex-column gap-3 align-items-center" style="width:40rem">
      <pv-google-map
          v-if="currentLocation"
          :api-key="apiKey"
          style="width: 100%; height: 500px"
          :center="{ lat: currentLocation.latitude, lng: currentLocation.longitude }"
          :zoom="16"
      >
        <pv-google-marker
            :options="{
            position: {
              lat: currentLocation.latitude,
              lng: currentLocation.longitude
            },
            label: currentStationName[0]  // Primera letra del nombre
          }"
        >
          <pv-google-info-window>
            <div>
              <strong>{{ currentStationName }}</strong>
            </div>
          </pv-google-info-window>
        </pv-google-marker>
      </pv-google-map>
    </div>
  </div>

  <div v-else>
    <p style="text-align: center; font-size: 1.2rem;">Cargando información del alquiler...</p>
  </div>
</template>

<style scoped>
</style>