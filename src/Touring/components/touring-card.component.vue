<script>

import {TouringEntity} from "@/Touring/model/touringEntity.js";

export default {
  name: "touring-card",
  props: {
    tour : TouringEntity,
    showCard : {
      type: Boolean,
      default: true
    }
  },
  methods:{
    sendId(){
      this.$emit("send-id", this.tour.id);
    }
  }

}
</script>

<template>
  <pv-card class="tour-card">
    <template #header>
      <img :src="tour.img" alt="tour image" class="tour-img" />
    </template>

    <template #title>
      <h2 class="tour-title">{{ tour.name }}</h2>
    </template>

    <template #content>
      <p class="tour-desc">{{ tour.hour }}</p>
    </template>

    <template #footer>
      <div class="flex gap-4 mt-1">
        <pv-button v-if="showCard" @click="sendId" label="Go" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.tour-card {
  width: 25rem;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
}
.tour-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
}
.tour-title {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
}

.tour-desc {
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem 0;
}
</style>

