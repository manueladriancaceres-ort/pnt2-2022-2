<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/carrito">Carrito de compras</RouterLink> |
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
