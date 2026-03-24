<template>
    <li 
        class="list-group-item"
        :class="{ 'list-group-item-success': todoItem.completed }"
        @click="toggleComplete(todoItem.id)"
    >
        <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
            {{  todoItem.todo }} {{  todoItem.completed ? '(완료)' : '' }}
        </span>
        <span 
            class="float-end badge bg-secondary pointer"
            @click="deleteTodo(todoItem.id)"
        >삭제</span>
    </li>
</template>
<script setup>
    const emit = defineEmits(['delete-todo', 'toggle-completed'])
    const props = defineProps({
        todoItem: {
            type: Object,
            required: true
        }
    })

    const deleteTodo = (id) => {
        console.log(id)
        emit('delete-todo', id)
    }

    const toggleComplete = (id) =>{
        emit('toggle-completed', id)
    }
</script>