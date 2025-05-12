  <script>
  import EmptyHeader from "@/Authentication/components/empty-header.component.vue";
  import { zodResolver } from '@primevue/forms/resolvers/zod';
  import { z } from 'zod';
  import {Form as PvForm} from "@primevue/forms";
  import FormsAuthentication from "@/Authentication/components/forms-authentication.component.vue";
  import {useToast} from "primevue";

  export default {
    name: "sign-up-student",
    components: {FormsAuthentication, PvForm, EmptyHeader},
    data() {

      return {
        resolver: zodResolver(
            z.object({
              educationalEmail:z.string()
            .min(3, { message: 'Educational Peruvian Email is required.' })
            .email({ message: 'Invalid Educational email address.' })
            .refine(val => val.endsWith('.edu.pe'),{
            message: 'Email must be educational (.edu)',
          }),
              username: z.string().min(3, { message: 'Username is required.' }).max(15, { message: 'Username must be under 15 characters.' }),
              password: z.string().min(3, { message: 'Password is required.' }),
              repeatPassword: z.string().min(1, { message: 'Passwords do not match.' }),
            })
                .refine((data) => data.password === data.repeatPassword, {
                  message: 'Passwords do not match.',
                  path: ['repeatPassword'],
                })
        ),
        fields: [
          { name: 'educationalEmail', type: 'text', inputType: 'text', placeholder: 'Educational Email', initialValue: '' },
          { name: 'username', type: 'text', inputType: 'text', placeholder: 'Username', initialValue: '' },
          { name: 'password', type: 'password', inputType: 'password', placeholder: 'Password', initialValue: '' },
          { name: 'repeatPassword', type: 'password', inputType: 'password', placeholder: 'Repeat Password', initialValue: '' }
        ]
      };
    },
    methods: {
      async onFormSubmit({ valid,values  }) {
        if (!valid) {
        console.log("failed validation")
         return;
        }
        const checkResponse = await fetch(`http://localhost:3000/users?email=${values.educationalEmail}`);
        const existingUsers = await checkResponse.json();

        if (existingUsers.length > 0) {
          this.$root.$refs.toast.add({
            severity: 'warn',
            summary: 'A user with this email already exists',
            life: 3000
          });
          console.warn("Email already exists");
          return;
        }

        const studentToSend = {
          id: undefined, // JSON Server lo sobrescribirá automáticamente
          username: values.username,
          email: values.educationalEmail,
          password: values.password,
          repeatPassword: values.repeatPassword,
          type: "student",
          maxDailyReservationHours: 7
        };

        try {
          const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // we are sending a json type file
            },
            body: JSON.stringify(studentToSend), // convertir a json - '{"email":"juan@email.com","password":"1234"}'
          });

          if (!response.ok){ console.error("Failed to register") ; return ;}

          const newUser = await response.json();
          console.log("User created:", newUser);


          this.$router.push("/signIn");

        } catch (err) {
          console.error("Registration failed:", err);
        }
      }
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