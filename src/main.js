import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Button from "primevue/button";

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/base.css';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.component('pv-toolbar', Toolbar)
app.component('pv-card', Card);
app.component('pv-button', Button);
app.mount('#app')
