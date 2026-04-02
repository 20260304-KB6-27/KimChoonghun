<script setup>
  import axios from 'axios';

  const url = '/api/todos';
  const data = {
    todo: '놀기',
    desc: '너무 느리지 않게...',
    
  }

  // const requestAxios = () => {
  //   axios.post(url, data).then((response) => {
  //     console.log('[axios] 응답객체 : ', response);
  //     console.log('[axios] 응답객체 : ', response.data);
  //   });
  // };
  
  // async await 적용
  const requestAxios = async () => {
    const response = await axios.post(url, data);
    console.log('[axios] 응답객체 : ', response);
  };
</script>

<template>
  <div>
    <button @click="requestAxios">axios 버튼</button>
    <!-- <button @click="requestFetch">fetch 버튼</button> -->
  </div>
</template>

<style scoped></style>
