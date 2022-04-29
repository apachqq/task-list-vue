<template>
    <div id="app">
        <h1>Todo application</h1>
        <hr>
        <todo-list
                :todos="todos"
                @remove-todo="removeTodo"
        ></todo-list>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList'

    export default {
        data() {
            return {
                todos: [
                    {id: 1, title: 'Купить хлеб', completed: false},
                    {id: 2, title: 'Купить масло', completed: false},
                    {id: 3, title: 'Купить сыр', completed: false}
                ]
            }
        },
        components: {TodoList},
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id)
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
