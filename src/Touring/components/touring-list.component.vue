<script>
import {TouringEntity} from "@/Touring/model/touringEntity.js";
import TouringCard from "@/Touring/components/touring-card.component.vue";


export default {
  name: "touring-list",
  components: {TouringCard},
  props:{
    tourList:{
      type:Array[TouringEntity],
      required: true
    }
  },
  methods:{
    /**
     * @function selectTour
     * @description Send to another view and create a query with tourId
     */
    selectTour(tourId){
      this.$router.push({ name: 'touring-detail', params: { id: tourId } });
    }
  }
}
</script>

<<template>
  <div class="card-container">
    <touring-card
        @send-id = "selectTour"
        v-for="tour in tourList"
        :key="tour.name"
        :tour="tour"
    />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 70vh;
  padding: 2rem;
}
</style>