

import { createApp } from 'vue'
import App from './App.vue'

import Greetings from "./components/Greetings.vue"

let vm = createApp(App);

vm.component("Greetings", Greetings)

vm.mount('#app');
