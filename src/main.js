import { createApp } from 'vue';

import App from './App.vue'

const app = createApp(App);

app.config.productionTip = false;

import './assets/css/main.css';

app.mount('#app');

