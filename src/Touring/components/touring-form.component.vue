<script>
import {BikeService} from "@/Renting/services/renting.service.js";

export default {
  name: "touring-form",
  data() {
    return {
      stations: [],
      dateSelected: null,
      startHour: null,
      endHour: null,
      selectedStation: null,
      errors: {
        date: false,
        startHour: false,
        endHour: false,
        station: false,
        hours : false
      }
    };
  },   /**
   * @function created
   * @description Lifecycle hook that runs after the component is created.
   * Fetches all available bike stations from the API for the list.
   */
  async created() {
    const rentingService = new BikeService();

    const response = await rentingService.getBikeStations();
    if (!response.status === "OK") {
      console.error("Failed to fetch stations");
      return;
    }
    this.stations = await response.data;
    console.log(this.stations);
  },
  methods: {

    /**
     * @function sendToSuccess
     * @description Validate that all the sub-components send information
     */
    sendToSuccess() {
      this.errors = {
        date: !this.dateSelected,
        startHour: !this.startHour,
        station: !this.selectedStation
      };

      const hasErrors = Object.values(this.errors).some(e => e);
      if (hasErrors) return;

      else{
        this.errors.hours = false;
      }

      this.$emit("sendToSuccess");
    }
  }
};
</script>

<template>
  <form @submit.prevent="sendToSuccess">
    <div class="form-grid">
      <div class="form-item">
        <label for="fecha" class="form-label">Date</label>
        <pv-date-picker id="fecha" v-model="dateSelected" :minDate="new Date()" showIcon />
        <pv-message v-if="errors.date" severity="error" variant="simple" size="small"> Date is required</pv-message>
      </div>

      <div class="form-item">
        <label for="start-hour" class="form-label">Start Hour</label>
        <pv-date-picker id="start-hour" v-model="startHour" :minDate="new Date()" timeOnly fluid />
        <pv-message v-if="errors.startHour" severity="error" variant="simple" size="small">Start hour is required</pv-message>
      </div>

      <div class="form-item">
        <label for="station" class="form-label">Bike Station</label>
        <pv-select
            id="station"
            v-model="selectedStation"
            :options="stations"
            optionLabel="name"
            placeholder="Select a Station"
        />
        <pv-message v-if="errors.station" severity="error" variant="simple" size="small">Station is required</pv-message>
      </div>
      <div class="final">
        <pv-message v-if="errors.hours" severity="error" variant="simple" size="small">Start Hour cant be greater than End Hour</pv-message>
        <pv-button type="submit" label="Book" class="w-full" />
      </div>

    </div>
  </form>
</template>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
.final{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-item {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
