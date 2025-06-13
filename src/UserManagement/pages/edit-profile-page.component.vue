<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import {zodResolver} from "@primevue/forms/resolvers/zod";
import {z} from "zod";

export default {
  name: "edit-profile-page",
  components: {BackButton, FormsAuthentication, HeaderContent},
  /**
   * @function data
   * @description Defines the reactive properties of the component
   * @returns {Object} Reactive object for form validation and input fields
   */
  data(){
  return {
    resolver: zodResolver(
        z.object({
          username: z.string().min(5, { message: this.$t('user.log.user') }),
          email: z.string().min(1, { message: this.$t('user.log.email') }).email({ message: this.$t('user.log.emailvalid') }),
        })
    ),
    /**
     * @property {Array<Object>} fields
     * @description Defines the structure of form fields to be rendered dynamically
     */
    fields: [
      { name: 'username', type: 'text', inputType: 'text', placeholder: this.$t('general.username'), initialValue: '' },
      { name: 'email', type: 'text', inputType: 'text', placeholder: this.$t('general.email'), initialValue: '' },
    ]
  };
},
methods: {
  /**
   * @function onFormSubmit
   * @description Handles the form submission for editing profile and validates it.
   * @param {boolean} valid - Indicates whether the form is valid.
   */
  async onFormSubmit({valid}){
    if (!valid) {
      console.log(this.$t('user.log.failed'))
      return;
    }
    console.log(this.$t('user.log.success'));
  }}}
</script>

<template>
  <div class="flex flex-column min-h-screen">
    <header-content></header-content>
    <back-button></back-button>
    <div class="flex flex-column align-items-center" style="margin-top: 5rem">
      <h1 class="font-bold m-4">{{$t('user.profile.edit')}}</h1>
      <forms-authentication
          :resolver="resolver"
          :fields="fields"
          :onFormSubmit="onFormSubmit">
        ></forms-authentication>

    </div>
  </div>
</template>

<style scoped>

</style>