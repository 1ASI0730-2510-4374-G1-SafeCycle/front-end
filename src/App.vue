<script>

import {defineComponent} from "vue";
import HeaderContent from "@/public/components/header-content.component.vue";

export default defineComponent({
  components: {HeaderContent},
  data() {
    return{
      drawerVisible: false,
    }
  },
  created() {
//cuando se inicia
  },
  methods: {
  }
})

</script>

<template>
<header-content></header-content>
</template>

<style>
body {
  font-family: "Inria Sans", sans-serif;
}
</style>