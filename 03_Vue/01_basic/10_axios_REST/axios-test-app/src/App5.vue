<script setup>
  import axios from 'axios';

  const requestAPI = async () => {
    const url = "/api/todos"; // json-server의 주소    // const url = "/api/todos/2"; // json-server의 주소
    try {
      const response = await axios.get(url, {timeout: 900});
      console.log("# 응답객체 : ", response.data);
    } catch (e) {
      console.log("## 다음 오류가 발생했습니다.");
      if (e instanceof Error) console.log(e.message);
      else console.log(e);
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
