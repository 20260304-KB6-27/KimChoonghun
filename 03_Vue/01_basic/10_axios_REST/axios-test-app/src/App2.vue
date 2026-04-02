<script setup>
  import axios from 'axios';

  const requestAPI = async () => {
    const url = "/api/todos"; // json-server의 주소
    let todoList;
    let response = await axios.get(url); // json-server의 주소
   todoList = response.data;
    console.log("# TodoList : ", todoList)
    for (let i = 0; i < todoList.length; i++) {
      response = await axios.get(url+`/${todoList[i].id}`);
      console.log(`# ${i+1}번째 Todo : `, response.data);
    }
  };

  requestAPI();
</script>

<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<style scoped></style>
