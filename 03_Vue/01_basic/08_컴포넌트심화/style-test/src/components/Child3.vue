<script setup>
  defineProps(['Child3'])
</script>

<template>
  <div :class="$style.child">
    <h2>Child3</h2>
  </div>
</template>

<style module>
.child {
  background-color: rgb(255, 98, 0);
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
