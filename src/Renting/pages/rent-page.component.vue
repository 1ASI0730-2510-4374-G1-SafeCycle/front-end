<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import {zodResolver} from "@primevue/forms/resolvers/zod";
import {z} from "zod";
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import {http} from "@/shared/services/http-common.js";
import {BikeService} from "@/Renting/services/renting.service.js";

export default {
  name: "rent-page",
  components: {FormsAuthentication, HeaderContent},
  /**
   * @function data
   * @description Defines the reactive properties of the component
   * @returns {Object} Reactive object for form validation and input fields
   */
  data() {
    return {
      resolver: zodResolver(
          z.object({
            minutes : z.coerce.number({
              required_error: "Minutes to rent is required",
            }).int().gte(5,"You must rent more than 5 minutes"),
          })
      ),
      /**
       * @property {Array<Object>} fields
       * @description Defines the structure of form fields to be rendered dynamically
       */
      fields: [
        { name: 'minutes', type: 'number', inputType: 'number', placeholder: this.$t('rent.minutes'), initialValue: '' }
      ],
      rentingService: new BikeService()
    };
  },
  methods: {
    /**
     * @function onFormSubmit
     * @description Handles form submission. If valid, navigates to the rent-choose page with minutes as query param.
     * @param {boolean} valid - Indicates if the form is valid with the resolver
     * @param {Object} values - the minutes entered
     */
    async onFormSubmit({valid, values}) {
      if (!valid) {
        console.log("❌ MINUTOS INVÁLIDOS");
        return;
      }

      const canRent = await this.canMakeMoreRent(); // ⚠️ IMPORTANTE: usar await

      if (canRent) {
        console.log("✅ Puede alquilar");
        this.$router.push({
          path: "/rent/choose",
          query: {minutes: values.minutes}
        });
      } else {
        console.log("⚠️ Ya tiene una renta activa");
        this.$root.$refs.toast.add({
          severity: 'warn',
          summary: this.$t('rent.text.nomorerents'),
          life: 3000
        });
      }
    },


    async canMakeMoreRent() {
      const id = localStorage.getItem("user");

      try {
        const res = await this.rentingService.getCurrentRental(id);
        console.log("✅ Tiene renta activa:", res.data);
        return false;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("✅ No tiene renta activa (404)");
          return true;
        }

        console.error("❌ Error inesperado al verificar rentas:", error);
        return false;
      }
    },

  }}
</script>

<template>
  <div class="flex flex-column min-h-screen">
    <header-content />
    <h1 class="font-bold m-5">{{$t('rent.title1')}}</h1>
    <div class="flex-1 flex align-items-center justify-content-center">
      <div class="flex flex-column justify-center gap-2">
        <h1 class="font-bold">{{$t('rent.text.total')}}</h1>
        <p>{{$t('rent.text.access')}}</p>
        <forms-authentication
            :resolver="resolver"
            :fields="fields"
            :onFormSubmit="onFormSubmit"
        />
      </div>
    </div>

    <pv-stepper value="1" linear class="w-6 mb-7 align-self-center ">
      <pv-step-list>
        <pv-step value="1">{{$t('rent.step1')}}</pv-step>
        <pv-step value="2">{{$t('rent.step2')}}</pv-step>
        <pv-step value="3">{{$t('rent.step3')}}</pv-step>
        <pv-step value="4">{{$t('rent.step4')}}</pv-step>
      </pv-step-list>
    </pv-stepper>
  </div>

</template>

<style scoped>
</style>