<script>
import { TourBookEntity } from "@/Touring/model/tourBookEntity.js";

export default {
  name: "touring-details",
  props: {
    booked: TourBookEntity
  }
}
</script>

<template>
  <div style="" class="container">
    <h2 style="font-size: 50px; margin-bottom: 60px;">{{$t('touring.current')}}</h2>

    <div>
      <h3 style="font-size: 30px;">{{$t('general.tour')}} "{{booked.name}}" {{$t('touring.details')}}</h3>
      <div class ="wasa" style="display: flex; gap: 400px; margin-top: 20px;">
        <div>
          <p style=" font-weight: bold;font-size: 30px">{{$t('booking.date.startdate')}}</p>
          <p style="font-size: 20px">{{ booked.start_date }}</p>

          <p style="font-weight: bold;font-size: 30px">{{$t('booking.date.starthour')}}</p>
          <p style="font-size: 20px">{{ booked.start_hour }}</p>

          <p style="font-weight: bold;font-size: 30px">{{$t('general.bikestation')}}</p>
          <p style="font-size: 20px">{{ booked.bike_station }}</p>
        </div>

        <div>
          <h3 style="font-size: 30px;">{{$t('booking.time.time')}}</h3>
          <p style=" font-weight: bold;font-size: 30px">{{$t('booking.time.minhour')}}:</p>
          <p style="font-size: 20px">{{ booked.duration }}</p>

          <p style=" font-weight: bold;font-size: 30px">{{$t('booking.confirmation.cost')}}:</p>
          <p style="font-size: 20px">{{ booked.cost }}</p>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <pv-button style="margin-top: 40px;  border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
          {{$t('touring.cancel')}}
        </pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 40px;
  width: 100%;
}
.wasa{
  width: 100%;
  justify-content: center;
}
</style>
