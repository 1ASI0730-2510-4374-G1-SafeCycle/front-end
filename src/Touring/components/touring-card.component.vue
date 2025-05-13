<script>

import {TouringEntity} from "@/Touring/model/touringEntity.js";

export default {
  name: "touring-card",
  props: {
    tour : TouringEntity
  }

}
</script>

<template>
<pv-card style="width: 25rem; overflow: hidden">
  <template #header>
    <img alt="user header"
        :src="tour.img"
        style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;"
    />
  </template>
  <template #title>{{tour.name}}</template>
  <template #content>
    <p class="m-0">
      {{tour.hour}}
    </p>
  </template>
  <template #footer>
    <div class="flex gap-4 mt-1">
      <pv-button label="Go" class="w-full" />
    </div>
  </template>
</pv-card>
</template>

<style scoped>

</style>