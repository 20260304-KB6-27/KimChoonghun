<template>
  <span style="cursor: pointer;" @click="toggleDone(todoItem.id)">
    {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
  </span>
  <button @click="deleteTodo(todoItem.id)">삭제</button>
</template>

<script setup>
  import { inject } from 'vue';
  import { useTodoListStore } from '@/stores/todoList.js';
  import { useRouter } from 'vue-router';

  defineProps({
    todoItem: {
      Type: Object,
      required: true
    }
  });

  // actions 객체에서 toggleDone 함수 구조분해할당으로 꺼내기
  // const { toggleDone } = inject("actions");  
  const router = useRouter();
  const todoListStore = useTodoListStore();
  const { deleteTodo, toggleDone } = todoListStore;

</script>

<style scoped>



</style>