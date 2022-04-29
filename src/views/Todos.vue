<template>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <add-todo
            @add-todo="addTodo"
    ></add-todo>
    <hr>
    <todo-list
            :todos="todos"
            @remove-todo="removeTodo"
            v-if="todos.length"
    ></todo-list>
    <p v-else>No todos!</p>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from '@/components/AddTodo'

    export default {
        data() {
            return {
                todos: []
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    this.todos = json
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
        components: {TodoList, AddTodo},
    }
</script>

<style scoped>
</style>
