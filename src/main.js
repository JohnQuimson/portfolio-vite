import { createApp } from 'vue';
import App from './App.vue';
// CSS entry point
import './assets/scss/style.scss';
// JS entry point
import './assets/js/main';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Vue App
createApp(App).mount('#app');
