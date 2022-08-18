import { createApp } from "vue";

import App from "./App.vue"
import router from "./router"
import pinia from "./reducer"
import Antd from 'ant-design-vue';
import './assets/main.css'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Antd);

app.mount('#app')