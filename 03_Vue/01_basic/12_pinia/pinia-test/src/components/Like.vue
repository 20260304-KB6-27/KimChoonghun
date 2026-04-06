<template>
  <button @click="increment">좋아요</button>
</template>

<script setup>
    // import { useLikeStore } from '@/stores/like';
    import { useLikePersistStore } from '@/stores/persist/persist_like';

    // const likeStore = useLikeStore()
    const likeStore = useLikePersistStore()
    const { increment } = likeStore;
</script>

<style scoped>



</style>