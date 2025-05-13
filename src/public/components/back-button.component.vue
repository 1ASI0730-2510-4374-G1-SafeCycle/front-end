<script>
export default {
  name: "back-button",
  methods: {
    onButtonClick() {
      history.back()
    }
  }
}
</script>

<template>


  <i class="pi pi-arrow-left" @click="onButtonClick()"></i>

</template>

<style scoped>
i{
  cursor: pointer;
  padding:12px;
}
</style>