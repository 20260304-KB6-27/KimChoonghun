<template>
  <div class="post-item" @click="emit('toggle', {no:item.no})">{{item.no}}. {{item.title}}<span class="arrow" v-show="show_no==item.no">▲</span><span class="arrow" v-show="show_no!=item.no">▼</span></div>
    <div class="post-content" v-show="show_no==item.no && edit_no != item.no">
        <h1>{{item.title}}</h1>
        <p>{{item.content}}</p>
        <button @click="editPost(item.no, item.title, item.content)">수정</button>
        <button @click="emit('remove',{no: item.no})">삭제</button>
        <button @click="emit('toggle',{no: 0})">닫기</button>
    </div>
    <div class="post-content edit-content" v-if="show_no==item.no &&  edit_no==item.no">
        <input type="text" v-model="edit_title">
        <textarea v-model="edit_content"></textarea>
        <div>
            <button @click="savePost(item.no)">저장</button>
            <button @click="emit('edit', {no:0})">취소</button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const props = defineProps(
        {
            item: {
                type: Object,
                required: true
            },
            show_no: {
                type: Number,
                required: true
            },
            edit_no: {
                type: Number,
                required: true
            }
        }
    );

    const edit_title = ref("");
    const edit_content = ref("");   

    const emit = defineEmits(['save', 'edit', 'toggle', 'remove']);

    const editPost = (no, title, content) => {
        edit_title.value = title;
        edit_content.value = content;
        emit('edit', {no: no});
    }
    
    const savePost = (no) => {
        emit('save', {no: no, title: edit_title.value, content: edit_content.value})
    }

</script>

<style scoped>



</style>