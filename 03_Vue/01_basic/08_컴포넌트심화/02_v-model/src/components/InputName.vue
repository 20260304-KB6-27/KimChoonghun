<template>
    <input
        type="text"
        :value="name"
        @input="$emit('update:name', $event.target.value)"
    />
</template>

<script setup>
    // import { defineProps, defineEmits} from 'vue' 
    defineEmits(['update:name'])
    defineProps(['name'])
</script>

<style lang="scss" scoped>

</style>