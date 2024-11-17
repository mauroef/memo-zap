import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import { createPinia } from 'pinia';

import { OhVueIcon } from './plugins/icons';
import BaseHero from '@/components/ui/BaseHero.vue';

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.component('v-icon', OhVueIcon);
app.component('base-hero', BaseHero);

app.mount('#app');
