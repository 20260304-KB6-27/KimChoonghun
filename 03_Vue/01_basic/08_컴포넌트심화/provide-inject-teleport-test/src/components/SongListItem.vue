<template>
    <li>
        <i :class="song.done ? icons.checked : icons.unchecked"></i>
        {{ song.title }}
    </li>
</template>

<script setup>
    import { inject } from 'vue';
    const icons = inject('icons');
    defineProps(['song']);
</script>

<style scoped>

</style>