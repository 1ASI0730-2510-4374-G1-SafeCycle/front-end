<script>
import EmptyHeader from "@/UserManagement/components/empty-header.component.vue";

import {zodResolver} from "@primevue/forms/resolvers/zod";
import {z} from "zod";
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import {UserService} from "@/UserManagement/services/users.service.js";
import {Tourist} from "@/UserManagement/model/tourist.entity.js";


export default {
  name: "sign-up-tourist",
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
            email: z.string()
                .min(3, { message: this.$t('user.log.email') })
                .email({ message: this.$t('user.log.emailvalid') })
                .refine(val => val.endsWith('.com'),{
                  message: this.$t('user.password.personal'),
                }),
            passport: z.string().min(6, { message: this.$t('user.log.passport') }),
            username: z.string().min(3, { message: this.$t('user.log.user') }).max(15, { message: 'Username must be under 15 characters.' }),
            password: z.string().min(3, { message: this.$t('user.log.password') }),
            repeatPassword: z.string().min(1, { message: this.$t('user.log.repeatPassword') }),
          })
              .refine((data) => data.password === data.repeatPassword, {
                message: this.$t('user.log.repeatPassword'),
                path: ['repeatPassword'],
              })
      ),
      /**
       * @property {Array<Object>} fields
       * @description Defines the structure of form fields to be rendered dynamically
       */
      fields: [
        { name: 'email', type: 'text', inputType: 'text', placeholder: this.$t('general.email'), initialValue: '' },
        { name: 'passport', type: 'text', inputType: 'text', placeholder: this.$t('general.passport'), initialValue: '' },
        { name: 'username', type: 'text', inputType: 'text', placeholder: this.$t('general.username'), initialValue: '' },
        { name: 'password', type: 'password', inputType: 'password', placeholder: this.$t('general.password'), initialValue: '' },
        { name: 'repeatPassword', type: 'password', inputType: 'password', placeholder: this.$t('user.password.repeatpass'), initialValue: '' }
      ]
    };
  },
  created() {
  this.userService = new UserService();
},
  methods: {
    /**
     * @function onFormSubmit
     * @description Handles the registration form submission. Validates input, checks for existing email, and registers a new tourist if everything is valid, then redirects to sign in page.
     *  @param {boolean} valid - Indicates whether the form is valid.
     *  @param {Object} values - The form input values.
     *  @param {string} values.username - The user's chosen username.
     *   @param {string} values.passport - The user's passport.
     *  @param {string} values.email - The user's school email.
     *  @param {string} values.password - The user's password.
     *  @param {string} values.repeatPassword - The repeated password for confirmation.
     */
    async onFormSubmit({ valid, values }) {
      if (!valid) {
        console.log("INVALID TOURIST")
        return;
      }

      const touristToSend = {
        username: values.username,
        identificationUser: values.passport,
        email: values.email,
        typeUser: 'tourist',
        password: values.password,
        maxDailyReservationHour: "12:00:00"
      };

      console.log("Tourist to Send:",touristToSend);

      try {
        const response = await this.userService.create(touristToSend);

        console.log("User created:", response.data);
        this.$router.push("/signIn");
      }catch (e) {
      if (e.response?.status === 401 && e.response?.data === 'NO_EMAIL_FOUND') {
        this.$root.$refs.toast.add({
          severity: 'warn',
          summary: this.$t('user.regist.nothermail'),
          life: 3000
        });
        console.warn("Email already exists");
      } else {
        console.error("Unexpected error during user creation:", e);
        this.$root.$refs.toast.add({
          severity: 'error',
          summary: this.$t('errors.unexpected'),
          life: 3000
        });
}}}}};
</script>

<template>
  <empty-header :button-text="$t('general.signin')" button-route="/signIn" ></empty-header>
  <forms-authentication
      :resolver="resolver"
      :fields="fields"
      :onFormSubmit="onFormSubmit">

    <template #footer-link>
      <p class="text-center mt-4">
        <router-link to="/signIn" class="inline text-sm text-blue-600 hover:underline">
          {{$t('user.regist.already')}}
        </router-link>
      </p>
    </template>

    <template #illustration>
      <div class="mt-6">
        <img src="/assets/authentication/welcome-img.png" alt="Illustration of welcome signup" style="max-width: 540px; width: 100%; height: auto;" />
      </div>
    </template>

  </forms-authentication>
</template>

<style scoped>

</style>