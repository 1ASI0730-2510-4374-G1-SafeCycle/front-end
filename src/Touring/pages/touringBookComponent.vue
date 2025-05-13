<script>
import TouringForm from "@/Touring/components/touring-form.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "touringBookComponent",
  components: {HeaderContent, TouringForm}
}
</script>

<template>
  <header-content></header-content>
  <touring-form></touring-form>
</template>

<style scoped>

</style>