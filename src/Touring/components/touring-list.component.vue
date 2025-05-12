<script>
import {TouringEntity} from "@/Touring/model/touringEntity.js";

export default {
  name: "touring-list",
  props:{
    tourList:{
      type:Array[TouringEntity],
      required: true
    }
  }
}
</script>

<template>
  <pv-card v-for="tour in tourList" :tour=tour></pv-card>
</template>

<style scoped>

</style>