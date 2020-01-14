import Vue from 'vue'
import Vuex from 'vuex'
import postModule from './post/index'
import userModule from './user/index'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // if process.env.NODE_ENV !== 'production' 
  modules: {
    postModule: postModule,
    userModule: userModule
  }
})
