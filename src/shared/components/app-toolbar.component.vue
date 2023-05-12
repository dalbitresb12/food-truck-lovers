<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'app-toolbar',
})
</script>

<template>
  <pv-toolbar>
    <template #start>
      <h1>Food Truck Lovers</h1>
    </template>
    <template #end>
      <RouterLink to="/home">
        <span>Home</span>
      </RouterLink>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.p-toolbar {
  background-color: lightgray;
}
</style>
