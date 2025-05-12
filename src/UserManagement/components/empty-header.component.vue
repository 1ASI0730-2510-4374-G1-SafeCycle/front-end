<script>

export default {
  name: "empty-header",
  props: {
    buttonText: {
      type: String,
      default: ""
    },
    buttonRoute: {
      type: String,
      default: "/signIn"
    }
}}
</script>

<template>
  <pv-toolbar style="border:  none">

    <template #start>
      <img src="/src/assets/logo.svg" alt="Logo SafeCycle" class="h-2rem">
    </template>
    <template #end>
      <pv-button asChild v-slot="slotProps" size="small" >
        <router-link  :to="buttonRoute" :class="[slotProps.class, 'w-40 text-center']">{{ buttonText }}</router-link>
      </pv-button>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>