import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// from https://flowbite.com/docs/getting-started/vue/
// Could also possibly just add the Tailwind directives to the main.css file.
// also from https://tailwindcss.com/docs/installation
import './input.css'

//oPCDS-vue-tailwind % npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
