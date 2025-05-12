<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
export default {
  name: "forms-authentication",
  props: {
    resolver: Object,
    fields: Array,
    onFormSubmit: Function,
  }

}
</script>

<template>
  <div style="display: flex; flex-wrap: wrap-reverse; align-items: center; justify-content: center; gap:5rem; margin-top: 4rem;">
    <div class="card flex justify-center" style="flex-direction: column; gap: 2rem;">

      <h1 class="font-bold" style="font-size: 35px">One more step</h1>
      <pv-form :resolver="resolver" @submit="onFormSubmit" class="flex gap-4 w-full sm:w-56" style="flex-direction: column; max-width: 500px;">
        <pv-form-field v-for="field in fields" :key="field.name" v-slot="$field" as="section" :name="field.name" :initialValue="field.initialValue" class="flex gap-2" style="flex-direction: column">
          <pv-input-text v-if="field.type === 'text'" :type="field.inputType" :placeholder="field.placeholder" />
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