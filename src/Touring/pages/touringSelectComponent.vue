<script>
import TouringCard from "@/Touring/components/touring-card.component.vue";
import {TouringEntity} from "@/Touring/model/touringEntity.js";

export default {
  name: "touringSelectComponent",
  components: {TouringCard},
  data(){
    return {
      tourData: new TouringEntity(
          "City Tour",
          "10:00 AM",
          "https://www.infobae.com/resizer/v2/JIJZTMOTYNGSHGI7S22JZSJ65A.jpg?auth=d32c05c95ae4fe628d89d320ab0b13ff30b55cf004f437c5fd575b9fabee1f70&smart=true&width=1200&height=675&quality=85",
          "2h 30m"
      ),
      
    }
  }
}
</script>

<template>

  <touring-card :tour="tourData"></touring-card>
</template>

<style scoped>

</style>