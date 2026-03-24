<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem
                    v-for="todoItem in todoList"
                    :key="todoItem.id"
                    :todoItem="todoItem"
                    @delete-todo="deleteTodo"
                    @toggle-completed="toggleCompleted"
                />
            </ul>
        </div>
    </div>
</template>
<script setup>
    import TodoListItem from './TodoListItem2.vue';
    const emit = defineEmits(['toggle', 'delete'])

    const toggleCompleted = (id) => {
        emit('toggle', id);
    }
    const deleteTodo = (id) => {
        emit('delete', id);
    }
    
    const props = defineProps(
        {
            todoList: Array
        }
    )
</script>