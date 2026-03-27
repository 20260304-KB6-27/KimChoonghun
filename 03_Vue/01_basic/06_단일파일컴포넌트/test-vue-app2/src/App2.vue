<template>
  <div>
    <h2>App Components</h2>
    <hr />
    <ul>
      <CheckboxItem 
        v-for="idol in idols"
        :idol="idol"
      />
    </ul>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import CheckboxItem from './components/CheckboxItem2.vue'

  const idols = ref([
      {id:1, name: 'BTS', checked: true},
      {id:2, name: 'Black Pink', checked: false},
      {id:3, name: 'EXO', checked: false},
      {id:4, name: "ITZY", checked: false},
  ]);

</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
