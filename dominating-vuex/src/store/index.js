import Vue from 'vue'
import Vuex from 'vuex'
import postModule from './post/index'
import userModule from './user/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    postModule: postModule,
    userModule: userModule
  }
})
