<template>
    <div id="app">
        <h1>Todo application</h1>
        <hr>
        <todo-list></todo-list>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList'

    export default {
        components: {TodoList}
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
