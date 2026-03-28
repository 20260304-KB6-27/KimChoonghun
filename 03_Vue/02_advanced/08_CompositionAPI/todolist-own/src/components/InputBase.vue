<template>
  <div class="d-flex">
    <input type="text" class="form-control"
                    placeholder="할일을 여기에 입력!"
                    v-model.trim="newTodo"
                    @keyup.enter="addTodo"/>
    <button class="btn btn-primary" @click="addTodo">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');

defineProps(['text'])
const emit = defineEmits(['add']);
const addTodo = () => {
    if (newTodo.value.length > 0) {
        console.log(newTodo.value.split('/'))
        emit('add', newTodo.value);
        console.log(newTodo.value)
        newTodo.value = '';
    }
}
</script>

<style scoped>



</style>