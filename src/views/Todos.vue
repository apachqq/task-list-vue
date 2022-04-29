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
                todos: [],
                loading: true,
                filter: 'all'
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.todos = json
                        this.loading = false
                    }, 1000)
                })
        },
        computed: {
            filteredTodos() {
                if (this.filter === 'all') {
                    return this.todos
                }

                if (this.filter === 'completed') {
                    return this.todos.filter(t => t.completed)
                }

                if (this.filter === 'not-completed') {
                    return this.todos.filter(t => !t.completed)
                }
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
        background: lightgrey;;
    }
</style>
