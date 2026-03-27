<script setup>
import GlobalCssDemo from './components/GlobalCssDemo.vue'
import ScopedCssDemo from './components/ScopedCssDemo.vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';
import CssModuleDemo from './components/CssModuleDemo.vue';
</script>

<template>
  <div class="container">
    <!-- <Child1/>
    <Child2/>
    <Child3/> -->
    <h1>Vue CSS 스타일 방법</h1>
    <!-- 전역 CSS -->
    <GlobalCssDemo/>
    <!-- Scoped CSS -->
    <ScopedCssDemo/>
    <!-- CSS Module -->
    <CssModuleDemo/>
</div>
</template>

<!-- scoped를 빼면 전역 상태이다 -->
<!-- App.vue의 <style> : 전역처럼 동작함 -->
<!-- main.css와 역할을 구분하기위해주로 앱의 레이아웃 구성 -->
<style>
.container {
  max-width: 600px;
  margin: 40px auto;
}
</style>
