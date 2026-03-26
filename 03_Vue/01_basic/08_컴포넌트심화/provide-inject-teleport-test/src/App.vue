<script setup>
  import { ref, computed, provide } from 'vue';
  import SongList from './components/SongList.vue';
  import Modal from './components/Modal.vue';

  const songs = ref(
    [
      { id: 1, title: "Blueming", done: true },
      { id: 2, title: "Dynamite", done: true },
      { id: 3, title: "Lovesick Girls", done: false },
      { id: 4, title: "마리아(Maria)", done: false },
    ],
  )

  const isModal = ref(false);

  const icons = ref(
    {
      checked: "far fa-check-circle",
      unchecked: "far fa-circle"
    }
  )

  const doneCount = computed(() => {
    return songs.value.filter((s) => s.done === true).length;
  })

  const changeModal = () => {
    isModal.value = true;
  }


  provide('icons', icons);
  provide('doneCount', doneCount);
</script>

<template>
  <div>
    <h2>최신 인기곡</h2>
    <SongList :songs="songs"/>
    <br/><br/>
    <button @click="changeModal">Teleport를 이용한 Modal 기능</button>
    <teleport to="#modal">
      <Modal v-if="isModal" />
    </teleport>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
