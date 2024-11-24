// css
import './assets/main.css';
// vue
import { createApp } from 'vue';
import App from './App.vue';
// router
import router from './router';
// pinia
import { createPinia } from 'pinia';
import { useAuthStore } from '@/store';
// icons
import { OhVueIcon } from '@/plugins/icons';
// components
import BaseHero from '@/components/ui/BaseHero.vue';
import BaseToast from '@/components/ui/BaseToast.vue';

const app = createApp(App);

app.use(createPinia());

const authStore = useAuthStore();
authStore.initAuthListener();

app.use(router);

app.component('v-icon', OhVueIcon);

app.component('base-hero', BaseHero);
app.component('base-toast', BaseToast);

app.mount('#app');
