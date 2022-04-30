<template>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <add-todo
            @add-todo="addTodo"
    ></add-todo>
    <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <todo-list
            :todos="filteredTodos"
            @remove-todo="removeTodo"
            v-else-if="filteredTodos.length"
    ></todo-list>
    <p v-else>No todos!</p>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from '@/components/AddTodo'
    import Loader from '@/components/Loader'

    export default {
        data() {
            return {
                loading: true,
                filter: this.$store.state.filter
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.$store.state.todos = json
                        this.loading = false
                    }, 1000)
                })
        },
        computed: {
            filteredTodos() {
                return this.$store.getters.filteredTodos
            },
            todos() {
                return this.$store.getters.todos
            }
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id)
            },
            addTodo(todo) {
                this.todos.push(todo)
            }
        },
        components: {TodoList, AddTodo, Loader},
    }
</script>

<style scoped>
    select {
        background: lightgrey;
    }
</style>
