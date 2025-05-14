<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import {z} from "zod";

export default {
  name: "change-password-page",
  components: {FormsAuthentication, BackButton, HeaderContent},
  /**
   * @function data
   * @description Defines the reactive properties of the component
   * @returns {Object} Reactive object for form validation and input fields
   */
  data() {
    return {
      resolver: zodResolver(
          z.object({
            newPassword: z.string().min(3, { message: 'Password is required.' }),
            repeatPassword: z.string().min(1, { message: 'Passwords do not match.' }),
          })
              .refine((data) => data.newPassword === data.repeatPassword, {
                message: 'Passwords do not match.',
                path: ['repeatPassword'],
              })
      ),
      /**
       * @property {Array<Object>} fields
       * @description Defines the structure of form fields to be rendered dynamically
       */
      fields: [
        { name: 'currentPassword', type: 'password', inputType: 'password', placeholder: 'Current Password', initialValue: '' },
        { name: 'newPassword', type: 'password', inputType: 'password', placeholder: 'New Password', initialValue: '' },
        { name: 'repeatPassword', type: 'password', inputType: 'password', placeholder: 'Repeat New Password', initialValue: '' }
      ]
    };
  },
  methods: {
    /**
     * @function onFormSubmit
     * @description Handles the form submission for changing password and validates it.
     *  * @param {boolean} valid - Indicates whether the form is valid.
     */
    async onFormSubmit({valid}){
      if (!valid) {
        console.log("failed validation")
        return;
      }

    }
  }
}
</script>

<template>
  <div class="flex flex-column min-h-screen">
    <header-content></header-content>
    <back-button></back-button>
    <div class="flex flex-column align-items-center" style="margin-top: 5rem">
      <h1 class="font-bold m-4">Change Password</h1>
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