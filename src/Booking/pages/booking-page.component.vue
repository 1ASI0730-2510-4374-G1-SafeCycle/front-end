<template>
  <div class="booking-page">
    <header-content />
    <back-button />

    <div class="content-wrapper">
      <!-- Formulario -->
      <div class="form-section">
        <h2 class="title">{{ $t('booking.date.enter') }}</h2>

        <div class="row">
          <div class="input-group">
            <label>{{$t('booking.date.startdate')}}</label>
            <DatePicker v-model="startDate" showIcon dateFormat="dd/mm/yy" />
          </div>
          <div class="input-group">
            <label>{{$t('booking.date.starthour')}}</label>
            <DatePicker v-model="startHour" showIcon timeOnly hourFormat="24" />
          </div>
        </div>

        <div class="row">
          <div class="input-group">
            <label>{{$t('booking.date.enddate')}}</label>
            <DatePicker v-model="endDate" showIcon dateFormat="dd/mm/yy" />
          </div>
          <div class="input-group">
            <label>{{$t('booking.date.endhour')}}</label>
            <DatePicker v-model="endHour" showIcon timeOnly hourFormat="24" />
          </div>
        </div>

        <h3 class="subtitle">{{$t('booking.enter')}}</h3>
        <div class="input-group full">
          <pv-select
              v-model="selectedStation"
              :options="stations"
              optionLabel="name"
              :placeholder="$t('general.station')"
              class="w-full"
          />
        </div>

        <button class="calculate-btn" @click="calculate">{{$t('booking.calculate')}}</button>
      </div>

      <!-- Imagen -->
      <div class="image-section">
        <div class="image-wrapper">
          <img :src="bookingImage" alt="Booking Illustration" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import DatePicker from "primevue/datepicker";
import { Select as PvSelect } from "primevue";
import {BikeService} from "@/Renting/services/renting.service.js";

export default {
  name: "booking-page",
  components: { HeaderContent, BackButton, DatePicker, PvSelect },
  data() {
    return {
      startDate: null,
      startHour: null,
      endDate: null,
      endHour: null,
      selectedStation: null,
      stations: [],
      bookingImage: new URL('@/assets/booking2.png', import.meta.url).href
    };
  },
  /**
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
    calculate() {
      if (!this.startDate || !this.endDate || !this.startHour || !this.endHour || !this.selectedStation) {
        alert(this.$t('booking.return.fill'));
        return;
      }

      const start = new Date(this.startDate);
      start.setHours(this.startHour.getHours(), this.startHour.getMinutes());

      const end = new Date(this.endDate);
      end.setHours(this.endHour.getHours(), this.endHour.getMinutes());

      const diffMs = end - start;
      if (diffMs <= 0) {
        alert('booking.return.invalidtime');
        return;
      }

      const hours = Math.ceil(diffMs / 3600000);
      const cost = (hours * 2.5).toFixed(2);

      this.$router.push({
        path: "/booking/confirm",
        query: {
          startDate: this.formatDate(this.startDate),
          startHour: this.formatTime(this.startHour),
          endDate: this.formatDate(this.endDate),
          endHour: this.formatTime(this.endHour),
          station: this.selectedStation.name,
          hours,
          cost,
        }
      });
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-GB");
    },
    formatTime(date) {
      return new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    }
  }
};
</script>

<style scoped>
.booking-page {
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  margin-inline: auto;
  width: 90%;
  max-width: 1200px;
  gap: 3rem;
}

.form-section {
  flex: 1;
  max-width: 500px;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  padding: 0;
  background-color: transparent;
  border-radius: 0;
}

.image-wrapper img {
  width: 500px;
  max-width: 100%;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #003e4d;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: #003e4d;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-group.full {
  width: 100%;
}

.calculate-btn {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #4CAF50;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
}

/* Mejoras visuales para inputs de PrimeVue */
::v-deep(.p-datepicker),
::v-deep(.p-dropdown) {
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  width: 100%;
}
::v-deep(.p-datepicker .p-inputtext),
::v-deep(.p-dropdown .p-dropdown-label) {
  border: none;
  width: 100%;
}

</style>

