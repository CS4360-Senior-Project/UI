import { createStore } from 'vuex'
import app from './app'

/* Create vuex store for project */
export const store = createStore({
    modules: {
        app
    }
  })