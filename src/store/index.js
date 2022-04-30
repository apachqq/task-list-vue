import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [],
        filter: 'all'
    },
    getters: {
        filteredTodos(state) {
            if (state.filter === 'all') {
                return state.todos
            }
            if (state.filter === 'completed') {
                return state.todos.filter(t => t.completed)
            }

            if (state.filter === 'not-completed') {
                return state.todos.filter(t => !t.completed)
            }
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
