import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import navBar from './components/navBar.vue';
import ScrollAnimation from './directives/scrollanimation';
const app = createApp(App);

app.component('navBar', navBar);
app.directive('scrollanimation', ScrollAnimation);
app.use(router).mount('#app');
