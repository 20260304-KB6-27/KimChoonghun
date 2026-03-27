<template>
    <div class="w-100 container d-flex justify-content-between border my-1" @click="emit('toggle', todoItem.id)">
        <span class="align-content-center" :class="{'todo-done': todoItem.completed }">
            {{ todoItem.todo }}
        </span>
        <div> 
            <span @click.stop="emit('edit', todoItem.id, todoItem.memo)" class="btn btn-info me-1">
                메모
            </span>  
            <span @click.stop="emit('remove', todoItem.id)" class="btn btn-danger">
                삭제
            </span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    todoItem: {
        type: Object,
        required: true
    },
    memo: Boolean
})

const emit = defineEmits(['remove', 'toggle', 'edit'])

</script>

<style scoped>



</style>