<script>
export default {
  name: "forms-authentication",
  props: {
    resolver: Function,
    fields: Array,
    onFormSubmit: Function,
  }

}
</script>

<template>
  <div style="display: flex; flex-wrap: wrap-reverse; align-items: center; justify-content: center; gap:5rem;">
    <div class="flex flex-column justify-content-center" >
      <pv-form :resolver="resolver" @submit="onFormSubmit" class="flex flex-column gap-4 w-full ">
        <pv-form-field v-for="field in fields" :key="field.name" v-slot="$field" as="section" :name="field.name" :initialValue="field.initialValue" class="flex flex-column">
          <pv-input-text v-if="field.type === 'text' || field.type === 'number'" :type="field.inputType" :placeholder="field.placeholder" />
          <pv-password v-if="field.type === 'password'" :type="field.inputType" :placeholder="field.placeholder" :feedback="false" toggleMask fluid />
          <pv-message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</pv-message>
        </pv-form-field>
        <pv-button type="submit" severity="secondary" label="Submit" />
      </pv-form>
      <slot name="footer-link"></slot>
    </div>
    <slot name="illustration"></slot>
  </div>
</template>

<style scoped>

</style>