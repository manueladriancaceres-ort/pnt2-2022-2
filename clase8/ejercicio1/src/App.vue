<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/sistema">Sistema</RouterLink> |
        <RouterLink to="/cliente">Clientes</RouterLink>
      </nav>
  </div>
  <RouterView />
</template>

<style scoped>
</style>
