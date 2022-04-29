<template>
    <div>
        <ul>
            <todo-item
                    v-for="todo in todos"
                    :todo="todo"
                    @remove-todo="removeTodo"
            ></todo-item>
        </ul>
    </div>
</template>

<script>
    import TodoItem from '@/components/TodoItem'

    export default {
        props: {
            todos: {
                type: Array
            }
        },
        components: {TodoItem},
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
