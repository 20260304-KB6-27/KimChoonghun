<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingComp from './components/LoadingComp.vue'
import ErrorComp from './components/ErrorComp.vue'

  // 옵션 없이 사용
  // const AsyncComp = defineAsyncComponent( () => import('./components/AsyncComponent.vue') );

  /*
  defineAsyncComponent 사용 시점
  - 초기 로딩 속도 개선이 필요할때
  - 무겁거나(차트, 에디터) 자주 사용하지 않는 컴포넌트
  */

  // 옵션 적용
  const AsyncComp = defineAsyncComponent({
    // loader: () => import('./components/AsyncComponent.vue'),
    loader: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/AsyncComponent.vue'));
      }, 30000)
    }),
    loadingComponent: LoadingComp, // delay 이후 로딩 중에 표시
    errorComponent: ErrorComp,
    delay: 200, // 표시 지연
    timeout: 3000, // 3초 지나면 ErrorComponent
  })

</script>

<template>
  <div>
    <h2>비동기 테스트</h2>
    <AsyncComp></AsyncComp>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
