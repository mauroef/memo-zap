import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import { createPinia } from 'pinia';
import { OhVueIcon } from './plugins/icons';

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.component('v-icon', OhVueIcon);

app.mount('#app');
