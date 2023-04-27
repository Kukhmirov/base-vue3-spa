import {createApp} from 'vue';
import App from './App.vue';
import router    from './router/routes';
import isMobile from './utils/mobileDetector';

const app = createApp(App);
app.use(isMobile);
app.use(router);
app.mount('#app');
