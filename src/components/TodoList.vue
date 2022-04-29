<template>
    <ul>
        <transition-group name="list">
            <todo-item
                    v-for="(todo, i) in todos"
                    :todo="todo"
                    :key="todo"
                    :index="i"
                    @remove-todo="removeTodo"
            ></todo-item>
        </transition-group>
    </ul>
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

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 0.4s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
</style>
