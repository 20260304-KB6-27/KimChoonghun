import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue';
import axios from 'axios';

export const useTodoListStore = defineStore('todoList2', () => {
    const uri = '/api/todos';
    // 반응형 상태
    const state = reactive({todoList : []});
    const todoList = computed(() => state.todoList);
    // 계산된 속성 (computed)
    const doneCount = computed(() => {
        return state.todoList.filter((todoItem) => todoItem.completed === true).length;
    });

    //action
    const fetchTodoList = async () => {
        try {
            const response = await axios.get(uri);
            console.log(response)
            if (response.status === 200) {
                console.log(response.data)
                state.todoList = response.data;
                // successCallback();
            } else {
                alert('Todo 삭제 실패');
            }
        } catch (error) {
            alert('에러발생 : ' + error);
        }
    }

    const addTodo = async (todo) => {
        try {
            if (todo == "") {
                return
            }
            const payload = { todo, "completed": false };
            const response = await axios.post(uri, payload);
            if (response.status === 201) {
                state.todoList.push({...response.data, done: false});
                // successCallback();
            } else {
                alert('Todo 추가 실패');
            }
        } catch (error) {
            alert('에러발생 : ' + error);
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(uri + `/${id}`);
            if (response.status === 200) {
                let index = state.todoList.findIndex((todo) => todo.id === id);
                state.todoList.splice(index, 1);
            } else {
                alert('Todo 삭제 실패');
            }
        } catch (error) {
            alert('에러발생 : ' + error);
        }
    }

    const toggleDone = async (id) => {
        try {
            let todo = state.todoList.find((todo) => todo.id === id);
            let payload = {...todo};
            payload.completed = !payload.completed;
            console.log(todo, payload, payload.id);
            const response = await axios.put(uri + `/${payload.id}`, payload);
            console.log(response.data)
            if (response.status === 200) {
                todo.completed = payload.completed;
            } else {
                alert('Todo 완료 변경 실패');
            }
        } catch (error) {
            alert('에러 발생 : ' + error);
        }
    }

    const updateTodo = async ({ id, todo, desc, done }) => {
        try {
            const payload = { id, todo, desc, done };
            const response = await axios.put(uri + `/${id}`, payload);
            if (response.status === 200) {
                let index = state.todoList.findIndex((todo) => todo.id === id);
                state.todoList[index] = payload;
                // successCallback();
            } else {
                alert('Todo 삭제 실패');
            }
        } catch (error) {
            alert('에러발생 : ' + error);
        }
    }

    return { todoList, doneCount, addTodo, deleteTodo, toggleDone, updateTodo, fetchTodoList };
})