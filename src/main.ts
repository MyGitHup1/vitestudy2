import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
const modules = import.meta.glob('./common/*.vue')
var app=createApp(App)
for (const path in modules) {
    modules[path]().then((mod) => {
        app.component(mod.default.name,mod.default)
    })
}
app.use(router)
app.mount('#app')
