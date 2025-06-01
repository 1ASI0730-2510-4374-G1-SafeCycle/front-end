<template>
  <div class="booking-confirm-page">
    <header-content />
    <back-button />

    <div class="confirm-box">
      <div class="grid-box">
        <div class="details">
          <h2 class="section-title">Booking Details</h2>
          <div class="row">
            <div class="column">
              <p><strong>Start Date</strong><br>{{ startDate }}</p>
              <p><strong>End Date</strong><br>{{ endDate }}</p>
            </div>
            <div class="column">
              <p><strong>Start Hour</strong><br>{{ startHour }}</p>
              <p><strong>End Hour</strong><br>{{ endHour }}</p>
            </div>
          </div>
          <p><strong>Bike Station</strong><br>{{ station }}</p>

          <h3 class="section-title">Time</h3>
          <div class="row">
            <div class="column">
              <p><strong>Hours o Minutes:</strong> {{ hours }} hours</p>
            </div>
            <div class="column">
              <p><strong>Cost:</strong> {{ cost }} S/.</p>
            </div>
          </div>

          <button class="confirm-btn" @click="confirmBooking">Book It</button>
        </div>

        <div class="image">
          <img src="@/assets/booking2.png" alt="Booking Confirm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContent from '@/public/components/header-content.component.vue';
import BackButton from '@/public/components/back-button.component.vue';

export default {
  name: 'booking-confirm',
  components: { HeaderContent, BackButton },
  data() {
    return {
      startDate: this.$route.query.startDate,
      startHour: this.$route.query.startHour,
      endDate: this.$route.query.endDate,
      endHour: this.$route.query.endHour,
      station: this.$route.query.station,
      hours: this.$route.query.hours,
      cost: this.$route.query.cost,
    };
  },
  methods: {
    confirmBooking() {
      this.$router.push({
        path: '/booking/success',
        query: {
          startDate: this.startDate,
          startHour: this.startHour,
          endDate: this.endDate,
          endHour: this.endHour,
          station: this.station,
          hours: this.hours,
          cost: this.cost,
        }
      });
    }
  }
};
</script>

<style scoped>
.booking-confirm-page {
  font-family: 'Arial', sans-serif;
}

.confirm-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.grid-box {
  display: flex;
  max-width: 900px;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;
}

.details {
  flex: 1;
}

.section-title {
  color: #003e4d;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.row {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.column {
  flex: 1;
}

p {
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
}

.confirm-btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
}

.confirm-btn:hover {
  background-color: #45a049;
}

.image img {
  width: 350px;
  max-width: 100%;
  object-fit: contain;
}

</style>
