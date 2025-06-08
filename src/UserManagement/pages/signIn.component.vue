<script>

import EmptyHeader from "@/UserManagement/components/empty-header.component.vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import {UserService} from "@/UserManagement/services/users.service.js";

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
                .min(3, { message: this.$t('user.log.email') })
                .email({ message: this.$t('user.log.emailvalid') })
                .refine(
                    val => val.endsWith('.com') || val.endsWith('.edu.pe'),
                    {
                      message: this.$t('user.log.invalidemail'),
                    }
                ),
            password: z.string().min(3, { message: this.$t('user.log.password') }),
          })
      ),
      /**
       * @property {Array<Object>} fields
       * @description Defines the structure of form fields to be rendered dynamically
       */
      fields: [
        { name: 'email', type: 'text', inputType: 'text', placeholder: this.$t('general.email'), initialValue: '' },
        { name: 'password', type: 'password', inputType: 'password', placeholder: this.$t('general.password'), initialValue: '' }
      ]
    };
  }, created() {
    this.userService = new UserService();
  },
  methods: {
    /**
     * @function noEmailRegistered
     * @description handles the toast for no registered email
     *  **/
    noEmailRegistered(){
      this.$root.$refs.toast.add({
        severity: 'warn',
        summary: this.$t('user.regist.notemail'),
        life: 3000
      });
      console.warn("Email doesnt exist");

    },
    /**
     * @function noEmailRegistered
     * @description handles the toast for wrong password
     *  **/
    wrongPassword(){
      this.$root.$refs.toast.add({
        severity: 'warn',
        summary: this.$t('user.password.wrong'),
        life: 3000});
      console.warn("wrong password");
    },
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
      try {


      const checkResponse = await this.userService.getByEmail(values.email);

      if(checkResponse.data.length === 0) {
        this.noEmailRegistered();
        return;
      }
      }catch(err) {
        this.noEmailRegistered();
        return;
      }
      try {
      const checkPassResponse = await this.userService.getUserByEmailAndPassword(values.email, values.password);
      if(checkPassResponse.data.length === 0) {
        this.wrongPassword();
        return;
      }}
      catch(err){
        this.wrongPassword();
        return;
      }
      this.$router.push("/rent");
    }}
};
</script>

<template>

  <empty-header :button-text="$t('general.signin')" button-route="/signUp" ></empty-header>
  <forms-authentication
      :resolver="resolver"
      :fields="fields"
      :onFormSubmit="onFormSubmit">

    <template #footer-link>
      <p class="text-center mt-4">
        <router-link to="/signUp" class="inline text-sm text-blue-600 hover:underline">
          {{$t('user.regist.unalready')}}
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