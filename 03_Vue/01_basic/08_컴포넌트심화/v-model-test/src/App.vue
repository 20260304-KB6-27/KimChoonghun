<script setup>
import {ref} from 'vue'
import InputName from './components/InputName.vue';

const searchName = ref('John')

</script>

<template>
  <div>
    <InputName v-model:name="searchName"/>
    <h3>검색어 : {{ searchName }}</h3>
  </div>
</template>

<style scoped></style>
