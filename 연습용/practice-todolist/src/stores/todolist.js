import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useTodoListStore = defineStore('todolist', () => {
  const todoList = ref([]);
  const totalItemsNum = computed(() => todoList.value.length);
  const totalFinishNum = computed(() => {
      let i = 0;
      for (var x = 0; x < todoLists.value.length; x++) if (todoList.value[x].finished) i++;
      return i;
  })

  return {
    todoList,
    totalFinishNum,
    totalFinishNum
  }
})
