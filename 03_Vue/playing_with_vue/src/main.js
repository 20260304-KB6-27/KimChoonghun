import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' //추가

const myApp = createApp(App);
myApp.use(router);
myApp.mount('#app')
