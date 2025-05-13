<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import FormsAuthentication from "@/public/components/forms-authentication.component.vue";
import BackButton from "@/public/components/back-button.component.vue";
import {zodResolver} from "@primevue/forms/resolvers/zod";
import {z} from "zod";

export default {
  name: "edit-profile-page",
  components: {BackButton, FormsAuthentication, HeaderContent},
  data(){
  return {
    resolver: zodResolver(
        z.object({
          username: z.string().min(5, { message: 'Username is required.' }),
          email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Must be a valid email address.' })
        })
    ),
    fields: [
      { name: 'username', type: 'text', inputType: 'text', placeholder: 'Username', initialValue: '' },
      { name: 'email', type: 'text', inputType: 'text', placeholder: 'Email', initialValue: '' },
       ]
  };
},
methods: {
  async onFormSubmit({valid}){
    if (!valid) {
      console.log("failed validation")
      return;
    }
    console.log("Changing Profile")
}}}
</script>

<template>
  <div class="flex flex-column min-h-screen">
    <header-content></header-content>
    <back-button></back-button>
    <div class="flex flex-column align-items-center" style="margin-top: 5rem">
      <h1 class="font-bold m-4">Edit Profile</h1>
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