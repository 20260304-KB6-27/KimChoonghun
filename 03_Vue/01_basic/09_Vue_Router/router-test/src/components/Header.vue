<template>
    <div>
        <RouterLink to="/">Home</RouterLink>
        |
        <RouterLink to="/members">members</RouterLink>
        |
        <RouterLink :to="{ name: 'members-nested' }">members-nested</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>



</style>