import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador'
import { key, store } from './store'
//import '@fortawsome/fontawsome-free/css/all'

createApp(App).use(roteador).use(store,key).mount('#app')
