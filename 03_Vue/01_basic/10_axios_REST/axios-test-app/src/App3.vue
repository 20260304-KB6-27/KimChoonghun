<script setup>
  import axios from 'axios';

  const requestAPI = () => {
    // const url = "http://localhost:3000/todos/6"; // json-server의 주소
    // const url = "/api/todos"; // json-server의 주소
    const url = "/api/todos/2"; // json-server의 주소
    const response = axios.get(url);
    console.log("# 응답객체 : ", response);
  };

  requestAPI();
</script>

<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<style scoped></style>
