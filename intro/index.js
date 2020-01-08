Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 3,
    todos: [
      {id: 1, task: 'learn', done: true },
      {id: 2, task: 'learn front', done: false },
      {id: 3, task: 'learn vuex', done: true }
    ]
  },

  mutations: {
    incrementCount (state) {
      state.count += 1
    }
  },

  getters: {
    countBy2: state => state.count * 2,
    doneTodos: state => state.todos.filter((todo) => todo.done),
    doneTodosCount: (state, getters) => getters.doneTodos.length,
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }

});


new Vue({
  el: "#app",
  store,

  computed: {
    counter() {
      return this.$store.state.count
    },

    countBy2 () {
      return this.$store.getters.countBy2
    },

    doneTodos () {
      return this.$store.getters.doneTodos
    },

    doneTodosCounter () {
      return this.$store.getters.doneTodosCount
    },

    getTodoById2 () {
      return this.$store.getters.getTodoById(2).task
    }
  },

  methods: {
    increment: function () {
      this.$store.commit('incrementCount');
    }
  }

})
