<script setup>
import { computed } from 'vue';
// import { useCounterStore } from './stores/counter';
import { useCounterPersistStore } from './stores/persist/persist_counter';
import Counter from '@/components/Counter.vue';
import Like from './components/Like.vue';
// import { useLikeStore } from './stores/like';
import { useLikePersistStore } from './stores/persist/persist_like';

// const { count, doubleCount, increment } = useCounterStore();
// 분해 할당하면 상태성을 상실한다!
// const {increment} = useCounterStore(); // 이벤트 함수는 괜찮다
const doubleCount = computed(() => store.doubleCount); // 변수는 computed 사용!
const count = computed(() => store.count);
// const store = useCounterStore();
const store = useCounterPersistStore();
// const likeStore = useLikeStore();
const likeStore = useLikePersistStore();
const like = computed(() => likeStore.like);
console.log(store);
</script>

<template>
  <h1>App</h1>
  <Like></Like>
  <h2>좋아요 : {{ like }}</h2>
  <h2>5배로 보는 좋아요 : {{ likeStore.fiveTime }}</h2>
  <hr/>
  <p>
    App에서 보는 counter: {{ count }} <br/>
  </p>
  <Counter></Counter>
</template>

<style scoped></style>
