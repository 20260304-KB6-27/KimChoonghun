// import './assets/main.css' //모듈로서 호출된 전역 CSS
import { createApp } from 'vue'
// import App from './App.vue'
import App from './App2.vue'
// import CheckboxItem from './components/CheckboxItem.vue' // 전역 모듈로 호출

createApp(App).mount('#app')
// createApp(App)
// .component('CheckboxItem', CheckboxItem) // 전역 컴포넌트 등록
// .mount('#app')
