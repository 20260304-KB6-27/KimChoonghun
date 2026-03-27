<script setup>
  defineProps(['id', 'checked', 'label'])
</script>

<template>
  <div>
    <input type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', {id, checked: $event.target.checked })" />
    <slot>Item</slot> <!--부모가 전달한 템플릿을 여기에 배치-->
  </div>
</template>
<!--컴포넌트를 통해 CSS 정의시 scoped는 권장된다-->
<style scoped> 

</style>
