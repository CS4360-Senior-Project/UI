import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { store } from './store/store'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app
    .use(router)
    .use(vuetify)
    // .use(store)

app.mount('#app')
