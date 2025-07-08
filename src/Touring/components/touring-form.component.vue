<script>
import {BikeService} from "@/Renting/services/renting.service.js";

export default {
  name: "touring-form",
  data() {
    return {
      fechaSeleccionada: null,
      startHour: null,
      endHour: null,
      selectedStation: null,
      stationService: new BikeService(),
      stations: [],
      errors: {
        fecha: false,
        startHour: false,
        endHour: false,
        station: false,
        hours : false
      }
    };
  },
  async created() {
    try {
      const res = await this.stationService.getBikeStations();
      const rawStations = res.data || res;
      this.stations = rawStations.map(station => ({
        label: station.name,
        value: station.id
      }));
      console.log("Estaciones cargadas:", this.stations);
    } catch (error) {
      console.error("Error al cargar estaciones:", error);
    }
  },
  methods: {

    /**
     * @function sendToSuccess
     * @description Validate that all the sub-components send information
     */
    sendToSuccess() {
      this.errors = {
        fecha: !this.fechaSeleccionada,
        startHour: !this.startHour,
        endHour: !this.endHour,
        station: !this.selectedStation
      };

      const hasErrors = Object.values(this.errors).some(e => e);
      if (hasErrors) return;

      if (this.endHour < this.startHour) {
        this.errors.hours = true;
        return;
      }
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
        <pv-date-picker id="fecha" v-model="fechaSeleccionada" :minDate="new Date()" showIcon />
        <pv-message v-if="errors.fecha" severity="error" variant="simple" size="small"> {{$t('touring.form.date')}}</pv-message>
      </div>

      <div class="form-item">
        <label for="start-hour" class="form-label">Start Hour</label>
        <pv-date-picker id="start-hour" v-model="startHour" :minDate="new Date()" timeOnly fluid />
        <pv-message v-if="errors.startHour" severity="error" variant="simple" size="small">{{$t('touring.form.start')}}</pv-message>
      </div>

      <div class="form-item">
        <label for="end-hour" class="form-label">End Hour</label>
        <pv-date-picker id="end-hour" v-model="endHour" :minDate="new Date()" timeOnly fluid />
        <pv-message v-if="errors.endHour" severity="error" variant="simple" size="small">{{$t('touring.form.end')}} </pv-message>
      </div>

      <div class="form-item">
        <label for="station" class="form-label">Bike Station</label>
        <pv-select
            id="station"
            v-model="selectedStation"
            :options="stations"
            optionLabel="label"
            optionValue="value"
            :placeholder="$t('touring.form.select')"
        />
        <pv-message v-if="errors.station" severity="error" variant="simple" size="small">{{$t('touring.form.station')}}</pv-message>
      </div>
      <div class="final">
        <pv-message v-if="errors.hours" severity="error" variant="simple" size="small">{{$t('touing.cant')}}</pv-message>
        <pv-button type="submit" :label="$t('touring.book')" class="w-full" />
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
  color: #fff;
  margin-bottom: 0.5rem;
}
</style>
