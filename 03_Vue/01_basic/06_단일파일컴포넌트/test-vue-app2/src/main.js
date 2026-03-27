// import './assets/main.css' //모듈로서 호출된 전역 CSS
import { createApp } from 'vue'
import App from './App.vue'
// import App from './App1.vue'
// import App from './App2.vue'
// import App from './App3.vue'
// import App from './App4.vue'
// import CheckboxItem from './components/CheckboxItem.vue' // 전역 모듈로 호출 (비권장!)

createApp(App)
.mount('#app')
// createApp(App)
// .component('CheckboxItem', CheckboxItem) // 전역 컴포넌트 등록
// .mount('#app')
