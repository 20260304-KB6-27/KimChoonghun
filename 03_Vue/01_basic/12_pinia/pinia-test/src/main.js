import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'; // persistedState 플러그인
// import App from './App.vue' 
import App from './App2.vue'
import router from './router';
// import todoList from './pages/TodoList.vue'

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedState) // persistedState 플러그인 추가한 pinia
// const app = createApp(todoList)
app.use(router)
app.use(pinia)

app.mount('#app')
