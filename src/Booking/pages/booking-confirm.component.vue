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
              <p><strong>Start Date:</strong> {{ startDate }}</p>
              <p><strong>End Date:</strong> {{ endDate }}</p>
            </div>
            <div class="column">
              <p><strong>Start Hour:</strong> {{ startHour }}</p>
              <p><strong>End Hour:</strong> {{ endHour }}</p>
            </div>
          </div>
          <p><strong>Bike Station:</strong> {{ station }}</p>

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
  padding: 0;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 5rem 4rem;
  flex-wrap: wrap;
  gap: 3rem;
}

.left-section {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.image-wrapper {
  padding: 0;
  border-radius: 0;
  background: none;
}

.image-wrapper img {
  width: 480px;
  max-width: 100%;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #003e4d;
  margin-bottom: 2rem;
}

.subtitle {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.row {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.column {
  flex: 1;
  font-size: 1.05rem;
}

.confirm-btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.confirm-btn:hover {
  background-color: #45a049;
}
</style>