<template>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <add-todo
            @add-todo="addTodo"
    ></add-todo>
    <hr>
    <Loader v-if="loading"/>
    <todo-list
            :todos="todos"
            @remove-todo="removeTodo"
            v-else-if="todos.length"
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
                loading: true
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
</style>
