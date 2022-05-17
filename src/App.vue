<template>
    <the-navbar></the-navbar>
    <router-view></router-view>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from '@/components/AddTodo'
    import TheNavbar from '@/components/TheNavbar'

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
        components: {TodoList, AddTodo, TheNavbar},
    }
</script>

<style>
    #app {
        padding-top: 30px;
        text-align: center;
    }
</style>
