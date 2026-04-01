<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header></Header>
  <div class="container">
    <RouterView/>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
