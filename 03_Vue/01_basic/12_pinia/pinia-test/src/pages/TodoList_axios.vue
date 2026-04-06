<script setup>
import { ref, computed, onMounted } from 'vue';
// import { useTodoListStore } from '../stores/todoList.js';
import { useTodoListStore } from '../stores/todoList2.js';

const todo = ref('');

const todoListStore = useTodoListStore();
const { addTodo, deleteTodo, toggleDone } = todoListStore;
const fetchTodoList = todoListStore.fetchTodoList;
// todoList : 참조 / addTodo, deleteTodo, toggleDone : action 함수
// 기본 타입에 대해서는 계산된 속성을 다시 작성
const doneCount = computed(() => todoListStore.doneCount);
const todoList = computed(() => todoListStore.todoList);

onMounted(() => {
  fetchTodoList();
})


const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = '';
};
</script>

<template>
  <div>
    <h2>TodoList with axios and pinia</h2>
    <hr />
    할일 추가 :
    <input type="text" v-model="todo"/>
    <button @click="addTodoHandler">추가</button>
    <p>완료된 할 일 수 : {{ doneCount }}</p>
    <hr/>
    <ul>
      <li style="border: 1px solid black; padding: 5px; list-style-type: none; display: flex; margin-bottom: 10px; justify-content: space-between;" v-for="todoItem in todoList">
        <span style="cursor: pointer;" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
        </span>
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
