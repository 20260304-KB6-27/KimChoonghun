// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 해당 디렉터리에 index.js가 있으면 디렉터리명이 모듈명이 된다.

const app = createApp(App)

app.use(router)
app.mount('#app')
