<template>
    <h3>{{  counter.count }}</h3>
    <h3>{{  count  }}</h3>
    <button @click="increment">증가</button>
    <button @click="reset">초기화</button>
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter';
    import { useCounterPersistStore } from '@/stores/persist/persist_counter';

    // State를 꺼낼 때는 구조 분해 할당을 하게 되면, 반응형이 깨짐
    // const counter = useCounterStore(); // 객체 자체를 꺼내 쓰는 방식
    const counter = useCounterPersistStore(); // 객체 자체를 꺼내 쓰는 방식
    // const { count, increment, reset } = useCounterStore(); // 구조 분해 할당으로 꺼내는 방식
    const { count, increment, reset } = useCounterPersistStore(); // 구조 분해 할당으로 꺼내는 방식
</script>

<style scoped>



</style>