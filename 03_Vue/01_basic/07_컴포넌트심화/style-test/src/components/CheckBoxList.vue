<script setup>
  defineProps(['items'])
  defineEmits(['check-changed'])
</script>

<template>
  <div v-for="item in items" :key="item.id">
    <slot name="icon" :checked="item.checked"></slot>
    <input 
      type="checkbox"
      :value="item.id"
      :checked="item.checked"
      @change="$emit('check-changed', {id: item.id, checked: $event.target.checked })" />
    <slot :checked="item.checked" :label="item.label"></slot> <!--부모가 전달한 템플릿을 여기에 배치-->
  </div>
</template>
<!--컴포넌트를 통해 CSS 정의시 scoped는 권장된다-->
<style scoped> 

</style>
