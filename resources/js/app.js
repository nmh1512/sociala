import './bootstrap';
import { createApp } from 'vue';
import router from './routes/index.js';
import store from './store/index.js';
import './index.css'
import App from './App.vue';

const app = createApp(App);
app.use(router)
    .use(store)
    .mount("#app");