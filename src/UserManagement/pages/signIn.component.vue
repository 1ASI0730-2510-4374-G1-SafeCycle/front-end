<script>

import EmptyHeader from "@/UserManagement/components/empty-header.component.vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";

export default {
  name: "signIn",
  components: {FormsAuthentication, EmptyHeader},
  /**
   * @function data
   * @description Defines the reactive properties of the component
   * @returns {Object} Reactive object for form validation
   */
  data() {
    return {
      resolver: zodResolver(
          z.object({
            email: z
                .string()
                .min(3, { message: 'Email is required.' })
                .email({ message: 'Invalid email address.' })
                .refine(
                    val => val.endsWith('.com') || val.endsWith('.edu.pe'),
                    {
                      message: 'Email must end with .com or .edu.pe',
                    }
                ),
            password: z.string().min(3, { message: 'Password is required.' }),
          })
      ),
      /**
       * @property {Array<Object>} fields
       * @description Defines the structure of form fields to be rendered dynamically
       */
      fields: [
        { name: 'email', type: 'text', inputType: 'text', placeholder: 'Email', initialValue: '' },
        { name: 'password', type: 'password', inputType: 'password', placeholder: 'Password', initialValue: '' }
      ]
    };
  },
  methods: {
    /**
     * @function onFormSubmit
     * @description Handles the registration form submission. Validates input, checks for existing email, and logs in a user if everything is valid.
     *  @param {boolean} valid - Indicates whether the form is valid.
     *  @param {Object} values - The form input values.
     *  @param {string} values.email - The user's school email.
     *  @param {string} values.password - The user's password.
     */
    async onFormSubmit({ valid, values }) {
      if (!valid) {
        console.log("INVALID USER")
      }
      const checkResponse = await fetch(`http://localhost:3000/users?email=${values.email}`);
      const existingUsers = await checkResponse.json();

      if(existingUsers.length === 0) {
        this.$root.$refs.toast.add({
          severity: 'warn',
          summary: 'No registered email found',
          life: 3000
        });
        console.warn("Email doesnt exist");
        return;
      }

      const checkPassResponse = await fetch(`http://localhost:3000/users?email=${values.email}&password=${values.password}`);

      const existingUserswithPass = await checkPassResponse.json();

      if(existingUserswithPass.length === 0) {
        this.$root.$refs.toast.add({
          severity: 'warn',
          summary: 'Wrong Password',
          life: 3000});
          console.warn("wrong passwore");
      }
      else{
        this.$router.push("/rent");
      }
    }}
};
</script>

<template>

  <empty-header button-text="Sign Up" button-route="/signUp" ></empty-header>
  <forms-authentication
      :resolver="resolver"
      :fields="fields"
      :onFormSubmit="onFormSubmit">

    <template #footer-link>
      <p class="text-center mt-4">
        <router-link to="/signUp" class="inline text-sm text-blue-600 hover:underline">
          Not a member yet? Sign Up
        </router-link>
      </p>
    </template>

    <template #illustration>
      <div class="mt-6">
        <img src="/assets/authentication/sign_in-img.png" alt="Illustration of welcome sign in" style="max-width: 540px; width: 100%; height: auto;" />
      </div>
    </template>

  </forms-authentication>

</template>

<style scoped>

</style>