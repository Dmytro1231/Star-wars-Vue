import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './scss/__typo.scss'

const app = createApp(App)
app.use(store).mount("#app")

// createApp(App).use(store).mount('#app')

