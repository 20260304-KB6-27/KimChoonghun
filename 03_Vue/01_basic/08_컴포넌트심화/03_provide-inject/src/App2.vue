<script setup>
  import { ref, provide } from 'vue';
  import Modal from './components/Modal.vue';

  const isModal = ref(false);

  const openModal = () => {
    isModal.value = true;
  }
</script>

<template>
  <div>
    <h2>Teleport 테스트</h2>
    <hr/>
    <button @click="openModal">모달 열기</button>
    <!--
      Teleport : 컴포넌트의 일부 HTML을 컴포넌트가 위치한 곳이 아닌 다른 DOM 위치(:to)로 렌더링
      - 컴포넌트 계층 : App 자식으로 남아있음
      - 실제 DOM 랜더링 위치 : to 속성에 정의한 요소 안으로 이동
    -->
    <teleport to="#modal">
      <Modal v-if="isModal" />
    </teleport>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
