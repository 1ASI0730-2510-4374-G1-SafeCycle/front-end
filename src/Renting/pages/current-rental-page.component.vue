<script>
import HeaderContent from "@/public/components/header-content.component.vue";
import BackButton from "@/public/components/back-button.component.vue";

export default {
  name: "current-rental-page",
  components: {BackButton, HeaderContent}
}
</script>

<template>
  <header-content></header-content>
  <h1 style="font-weight: bolder; text-align: center; margin-bottom: 50px; margin-top: 3rem">Current Rental</h1>
  <div class="flex align-items-center justify-content-center gap-6 flex-wrap">
    <div class="flex flex-column gap-3 w-3 align-items-center">
      <hr class="w-full border">
      <h2>Time:  minutes</h2>
      <h2>Price: S/.</h2>
      <h2>Payment Method: VISA</h2>
      <h3>A confirmation email has been sent</h3>
      <hr class="w-full border">
    </div>
    <div class="flex flex-column gap-3 align-items-center" style="width:40rem">
      <img src="https://i.ibb.co/ZpQJn7Vq/image-2025-05-12-170659856.png" alt="Map Image">
    </div>
  </div>
</template>

<style scoped>

</style>