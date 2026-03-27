<script setup>
defineProps(['Child1'])
</script>

<template>
  <div class="child">
    <h2>Child1</h2>
  </div>
</template>
<!--컴포넌트를 통해 CSS 정의시 scoped는 권장된다-->
<style scoped> 
.child {
  background-color: yellow;
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
