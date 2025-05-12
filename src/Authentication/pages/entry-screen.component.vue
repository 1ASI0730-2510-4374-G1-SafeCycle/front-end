<script>

import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import EmptyHeader from "@/Authentication/components/empty-header.component.vue";

export default {
  name: 'app-entry-screen',
  components: {EmptyHeader},
  data() {
    return {
      initialValues: {
        typeOfUser: ''
      },
      resolver: zodResolver(
          z.object({
            typeOfUser: z.string().min(1, { message: 'User Type is required.' })
          })
      )
    }
  },
  methods: {
      onFormSubmit({ valid, values }) {
        if (valid) {
          const userType = values.typeOfUser.toLowerCase(); // 'student' o 'tourist'
          this.$router.push(`/signup/${userType}`);
        }
      }
    }}

</script>

<template>

<empty-header button-text="Sign In" button-route="/signIn" ></empty-header>

  <div style="width: 100%; display: flex; flex-wrap: wrap-reverse; align-items: center; justify-content: center; gap:5rem; margin-top: 9rem;">
    <div style="display: flex; flex-direction: column;align-items: center;">
      <h1 class="font-bold">Welcome</h1>
      <p>First. Let's get to know each other!</p>
      <div class="card flex flex-col items-center gap-5 m-4">

        <div class="card flex justify-center">
          <pv-form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" style="display:flex; flex-direction: column; gap:2rem; align-items: center">
            <div class="flex gap-2" style="flex-direction: column">
              <pv-radio-button-group name="typeOfUser" class="flex flex-wrap gap-5">
                <div class="flex items-center gap-2">
                  <pv-radio-button inputId="student" value="Student" />
                  <label for="Student">Student</label>
                </div>
                <div class="flex items-center gap-2">
                  <pv-radio-button inputId="tourist" value="Tourist" />
                  <label for="tourist">Tourist</label>
                </div>
              </pv-radio-button-group>
              <pv-message v-if="$form.typeOfUser?.invalid" severity="error" size="small" variant="simple">{{ $form.typeOfUser.error?.message }}</pv-message>
            </div>
            <pv-button type="submit" severity="secondary" label="Submit" />
          </pv-form>
        </div>
      </div>
    </div>
    <img src="/assets/authentication/welcome-img.png" alt="Illustration for Sign Up Screen" style="max-width: 540px; width: 100%;height: auto;">
  </div>
</template>

<style >
a{
  text-decoration: none;
  width: 7rem;
}
img{
  max-width: 90%;
}
</style>