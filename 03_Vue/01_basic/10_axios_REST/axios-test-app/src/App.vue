<script setup>
  import axios from 'axios';

  // const requestAPI = () => {
  //   // const url = "http://localhost:3000/todos/6"; // json-server의 주소
  //   const url = "/api/todos/1"; // json-server의 주소
  //   axios.get(url).then((response) => {
  //     console.log('# 응답객체 : ', response)
  //     console.log(typeof response.data) //Object
  //   });
  // };

  const url = '/api/todos';
  const response = axios.get(url);
  console.log('response', response);

  const requestAxios = () => {
    axios.get(url).then((response) => {
      console.log('[axios] 응답객체 : ', response);
      console.log('[axios] 응답객체 : ', response.data);
    });
  };

  const requestFetch = () => {
    fetch(url).then((response) => response.json())
    .then((data) => {
      console.log('[fetch] 응답 : ', data);
    })
  }
  // requestAPI();
</script>

<template>
  <div>
    <button @click="requestAxios">axios 버튼</button>
    <button @click="requestFetch">fetch 버튼</button>
  </div>
</template>

<style scoped></style>
