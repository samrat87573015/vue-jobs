import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import Pagination from 'v-pagination-3';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);

app.use(router);
app.use(Pagination);
app.use(Toast, {
    position: "top-right",
    theme: "colored",

});

app.mount('#app');
