import { defineStore } from 'pinia'
import { reactive, computed } from 'vue';
// import axios from 'axios';

export const useTodoListStore = defineStore('todoList', () => {
    // 반응형 상태
    const state = reactive({todoList : []});
    const todoList = computed(() => state.todoList);
    // 계산된 속성 (computed)
    const doneCount = computed(() => {
        return state.todoList.filter((todoItem) => todoItem.done === true).length;
    });

    //action
    const addTodo = (todo) => {
        state.todoList.push( { id: new Date().getTime(), todo, done: false });
    }
    
    const deleteTodo = (id) => {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList.splice(index, 1);
    }

    const toggleDone = (id) => {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[index].done = !state.todoList[index].done;
    }

    return { todoList, doneCount, addTodo, deleteTodo, toggleDone };
})