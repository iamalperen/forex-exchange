import { createApp } from 'vue'
import App from './App.vue'
import './assets/normalize.css'
import './assets/currency-flags.css'
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
createApp(App).mount('#app')
