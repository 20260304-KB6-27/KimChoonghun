<template>
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input type="text" class="form-control"
                    placeholder="할일을 여기에 입력!"
                    v-model.trim="todo"
                    @keyup.enter="addTodo"/>
                <span class="btn btn-primary input-group-addon"
                    @click="addTodo">추가</span>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const todo = ref('');

    const emit = defineEmits(['add']);

    const addTodo = (e) => { // 할일 추가하는 메서드
        if (todo.value === '') return;
        emit('add', {
            id: new Date().getTime(), 
            todo: todo.value, 
            completed: e.ctrlKey ? true : false
        }); // todolist에 추가
        todo.value = ""; // 초기화
    }
</script>