<template>
    <div v-for="(val, key, index) in posts">
        <PostItem :item="val" :edit_no=edit_no :show_no=show_no
        @edit="editPost" @remove="removePost" @save="savePost" @toggle="togglePost"></PostItem>
    </div>
</template>
<script setup>
    import PostItem from './postItem.vue';

    const props = defineProps(
        {
            posts: {
                type: Array,
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

    const emit = defineEmits(['editItem', "removeItem", "saveItem", "toggleItem"]);

    const editPost = (no) => {
        emit('editItem', no)
    }

    const togglePost = (no) => {
        emit('toggleItem', no)
    }

    const savePost = (i) => {
        emit('saveItem', {no:i.no, title:i.title, content:i.content})
    }

    const removePost = (no) => {
        emit('removeItem', no)
    }
</script>

<style scoped>



</style>