<template>
    <!-- <li><input type="checkbox" :checked="checked">{{ id }} - {{ name }}</li> -->
    <li><input type="checkbox" v-model="checked"> 옵션</li>
</template>

<script>
    import { ref } from 'vue';
    export default {
        name: 'CheckboxItem',
        setup() {
            const checked = ref(false);
            return {
                checked
            }
        }
    }
</script>

<style lang="scss" scoped></style>