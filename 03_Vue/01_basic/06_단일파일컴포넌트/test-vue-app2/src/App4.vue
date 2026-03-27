<script setup>
  import InputName from './components/InputBox.vue'
  import {ref} from 'vue';

  // 1. 자식 컴포넌트에서 이벤트 발생 (이벤트 이름 : change-name)
  // 2. 부모 컴포넌트에서 이벤트 감지 (@name-change) -> 이때 이벤트 객체로 데이터를 전달 받을 수 있음
  // 3. 부모 컴포넌트에서 이벤트 핸들러 동작 (nameChangeHandler)
  const parentName = ref('기본값');
  const nameChangeHandler = (event) => {
    parentName.value = event.name;
  }
</script>

<template>
  <div>
    <h2>App Component</h2>
    <hr />
    <InputName @name-change="nameChangeHandler"></InputName>
    <h3>App Data : {{ parentName }}</h3>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
