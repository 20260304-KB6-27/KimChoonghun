<template>
    <div class="new-post">
        <input type="text" placeholder="새 게시글 제목" v-model="new_title">
        <input type="text" placeholder="새 게시글 내용" v-model="new_content">
        <button @click="addPost">작성</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const new_title = ref('');
    const new_content = ref('');

    const emit = defineEmits(['add']);

    const addPost = (e) => {
        if (new_title.value == '' || new_content == '') return;
        emit('add', new_title.value,
           new_content.value
        );
        new_title.value = '';
        new_content.value = '';
    };
</script>

<style scoped>



</style>