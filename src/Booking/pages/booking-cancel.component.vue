<template>
  <div class="booking-cancel-page">
    <header-content />
    <back-button />

    <div class="success-box">
      <h2 class="title">{{$t('booking.cancel.yourcan')}}</h2>
      <p class="info">

      </p>

      <div class="details-grid">
        <div>
          <h3>{{$t('booking.cancel.cancel')}}</h3>
          <p><strong>{{$t('booking.date.startdate')}}:</strong> {{ startDate }}</p>
          <p><strong>{{ $t('booking.date.starthour') }}:</strong> {{ endDate }}</p>
          <p><strong>{{$t('general.bikestation')}}:</strong> {{ station }}</p>
        </div>

        <div>
          <h3>{{$t('booking.time.time')}}</h3>
          <p><strong>{{$t('booking.date.enddate')}}:</strong> {{ startHour }}</p>
          <p><strong>{{$t('booking.date.endhour')}}:</strong> {{ endHour }}</p>
          <p><strong>{{$t('booking.date.duration')}}:</strong> {{ hours }} {{ $t('general.hours') }}</p>
          <p><strong>{{$t('booking.confirmation.cost')}}:</strong> {{ cost }} S/.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";

export default {
  name: "booking-cancel",
  components: { HeaderContent, BackButton },
  data() {
    return {
      startDate: this.$route.query.startDate || "",
      startHour: this.$route.query.startHour || "",
      endDate: this.$route.query.endDate || "",
      endHour: this.$route.query.endHour || "",
      station: this.$route.query.station || "",
      hours: this.$route.query.hours || "",
      cost: this.$route.query.cost || ""
    };
  }
};
</script>

<style scoped>

header-content
.booking-success-page {
  padding: 3rem;
  background-color: #fff;
}

.success-box {
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #003e4d;
}

.info {
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.details-grid {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 2rem;
}

.details-grid h3 {
  margin-bottom: 0.5rem;
  color: #003e4d;
}

.details-grid p {
  margin: 0.3rem 0;
}

.cancel-btn {
  display: block;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

</style>
