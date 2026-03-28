<template>
  <div id="app">
    <div class="card card-body container">
      <div class="title">::TodoList with Composition</div>
      <div class="card-default card-borderless">
        <div class="card-body">
          <InputBase @add="addTodo"/>
          <todoList :todoList="lists" @del="delete_Todo" @tog="toggle_Todo" @ed="edit_memo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputBase from './components/InputBase.vue';
import todoList from './components/todolist.vue';

let ts = new Date().getTime()

const lists = ref([
    { id: ts, todo: "자전거 타기", memo: "10분 타기", completed:false, toggle: false},
    { id: ts+1, todo: "딸과 공원 산책", memo: "내일 비 안 옴", completed:false, toggle: false},
    { id: ts+2, todo: "일요일 애견 카페", memo: "개껌 사기", completed:false, toggle: false},
    { id: ts+3, todo: "Vue 원고 집필", memo: "빨리해야 함", completed:false, toggle: false},
  ]);


const addTodo = (newTodo) => lists.value.push({id:new Date().getTime(), todo: newTodo, completed: false})
const delete_Todo = (id) => {
  // console.log(id)
  let index = lists.value.findIndex((item) => id === item.id);
  console.log(index);
  lists.value.splice(index, 1);
  // console.log(lists.value.length);
}
const toggle_Todo = (id) => {
  // console.log(id)
  let index = lists.value.findIndex((item) => id === item.id);
  console.log(index);
  lists.value[index].completed = !lists.value[index].completed;
}
const edit_memo = (id, memo) => {
  let index = lists.value.findIndex((item) => id === item.id);
  lists.value[index].memo = memo;
}
</script>

<style scoped>



</style>