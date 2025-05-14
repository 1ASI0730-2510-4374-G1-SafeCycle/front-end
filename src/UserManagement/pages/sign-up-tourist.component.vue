<script>
import EmptyHeader from "@/UserManagement/components/empty-header.component.vue";

import {zodResolver} from "@primevue/forms/resolvers/zod";
import {z} from "zod";
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import {UserService} from "@/UserManagement/services/users.service.js";
import {Student} from "@/UserManagement/model/student.entity.js";
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
                .min(3, { message: 'Email is required.' })
                .email({ message: 'Invalid email address.' })
                .refine(val => val.endsWith('.com'),{
                  message: 'Email must be personal - end with .com',
                }),
            passport: z.string().min(6, { message: 'Passport is required.' }),
            username: z.string().min(3, { message: 'Username is required.' }).max(15, { message: 'Username must be under 15 characters.' }),
            password: z.string().min(3, { message: 'Password is required.' }),
            repeatPassword: z.string().min(1, { message: 'Passwords do not match.' }),
          })
              .refine((data) => data.password === data.repeatPassword, {
                message: 'Passwords do not match.',
                path: ['repeatPassword'],
              })
      ),
      /**
       * @property {Array<Object>} fields
       * @description Defines the structure of form fields to be rendered dynamically
       */
      fields: [
        { name: 'email', type: 'text', inputType: 'text', placeholder: 'Email', initialValue: '' },
        { name: 'passport', type: 'text', inputType: 'text', placeholder: 'Passport', initialValue: '' },
        { name: 'username', type: 'text', inputType: 'text', placeholder: 'Username', initialValue: '' },
        { name: 'password', type: 'password', inputType: 'password', placeholder: 'Password', initialValue: '' },
        { name: 'repeatPassword', type: 'password', inputType: 'password', placeholder: 'Repeat Password', initialValue: '' }
      ]
    };
  },created() {
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

      const checkResponse = await this.userService.getByEmail(values.email);

      if (checkResponse.data.length > 0) {
        this.$root.$refs.toast.add({
          severity: 'warn',
          summary: 'A user with this email already exists',
          life: 3000
        });
        console.warn("Email already exists");
        return;
      }

      const touristToSend = new Tourist({
        id: 0, // or undefined if your class allows it
        username: values.username,
        passport: values.passport,
        email: values.email,
        password: values.password,
        paymentInformation: {
          cardNumber: "",
          type: "",
          holder: ""
        }
      });

      try {
        const response = await this.userService.create(touristToSend);
        console.log("User created:", response.data);
        this.$router.push("/signIn");


      } catch (err) {
        console.error("Registration failed:", err);
      }}
  }
};
</script>

<template>
  <empty-header button-text="Sign In" button-route="/signIn" ></empty-header>
  <forms-authentication
      :resolver="resolver"
      :fields="fields"
      :onFormSubmit="onFormSubmit">

    <template #footer-link>
      <p class="text-center mt-4">
        <router-link to="/signIn" class="inline text-sm text-blue-600 hover:underline">
          Already a member? Sign In
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