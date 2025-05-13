<script>
export default {
  name: "touring-form",
  data() {
    return {
      fechaSeleccionada: null,
      startHour: null,
      endHour: null,
      selectedStation: null,
      errors: {
        fecha: false,
        startHour: false,
        endHour: false,
        station: false,
        hours : false
      }
    };
  },
  methods: {
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
        <pv-message v-if="errors.fecha" severity="error" variant="simple" size="small"> Date is required</pv-message>
      </div>

      <div class="form-item">
        <label for="start-hour" class="form-label">Start Hour</label>
        <pv-date-picker id="start-hour" v-model="startHour" :minDate="new Date()" timeOnly fluid />
        <pv-message v-if="errors.startHour" severity="error" variant="simple" size="small">Start hour is required</pv-message>
      </div>

      <div class="form-item">
        <label for="end-hour" class="form-label">End Hour</label>
        <pv-date-picker id="end-hour" v-model="endHour" :minDate="new Date()" timeOnly fluid />
        <pv-message v-if="errors.endHour" severity="error" variant="simple" size="small">End Hour is required </pv-message>
      </div>

      <div class="form-item">
        <label for="station" class="form-label">Bike Station</label>
        <pv-select
            id="station"
            v-model="selectedStation"
            :options="['Centro civico', 'San Isidro']"
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
  color: #fff;
  margin-bottom: 0.5rem;
}
</style>
