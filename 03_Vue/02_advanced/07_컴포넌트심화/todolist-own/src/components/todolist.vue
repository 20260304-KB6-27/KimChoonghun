<template>
    <todoListItem v-for="item in todoList" :todoItem="item" @remove="deleteTodo" @toggle="toggleTodo" @edit="editTodo"/>
</template>

<script setup>
import { ref } from 'vue';
import todoListItem from './todoListItem.vue';

const props = defineProps(
    {
        todoList: {
            type: Array,
            required: true
        }
    }
)

const emit = defineEmits(['del', 'tog', 'ed'])

const deleteTodo = (id) => {
    emit('del', id)
}

const toggleTodo = (id) => {
    emit('tog', id)
}

const editTodo = (id, memo) => {
    emit('ed', id, memo)
}

</script>

<style scoped>

</style>