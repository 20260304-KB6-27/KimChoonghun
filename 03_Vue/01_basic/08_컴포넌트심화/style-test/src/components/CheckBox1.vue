<script setup>
  defineProps(['id', 'checked', 'label'])
</script>

<template>
  <div>
    <input type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', {id, checked: $event.target.checked })" />
    <span v-if="checked == true" style="color:blue; text-decoration: underline;">
      <i>{{label}}</i>
    </span>
    <span v-else style="color:gray">{{ label }}</span>
  </div>
</template>
<!--컴포넌트를 통해 CSS 정의시 scoped는 권장된다-->
<style scoped> 

</style>
