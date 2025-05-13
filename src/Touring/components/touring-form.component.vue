<script>
export default {
  name: "touring-form",
  data() {
    return {
      fechaSeleccionada: null,
      startHour: null,
      endHour: null,
      selectedStation: null
    };
  }
};
</script>

<template>
  <div class="form-grid">
    <div class="form-item">
      <label for="fecha" class="form-label">Date</label>
      <pv-date-picker id="fecha" v-model="fechaSeleccionada" showIcon />
    </div>

    <div class="form-item">
      <label for="start-hour" class="form-label">Start Hour</label>
      <pv-date-picker id="start-hour" v-model="startHour" timeOnly fluid />
    </div>

    <div class="form-item">
      <label for="end-hour" class="form-label">End Hour</label>
      <pv-date-picker id="end-hour" v-model="endHour" timeOnly fluid />
    </div>

    <div class="form-item">
      <label for="station" class="form-label">Bike Station</label>
      <pv-select
          id="station"
          v-model="selectedStation"
          :options="['Centro civico', 'San Isidro']"
          placeholder="Select a Station"
      />
    </div>
    <pv-button label="Book" class="w-full" />
  </div>
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
