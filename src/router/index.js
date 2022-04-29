import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Todos from '@/views/Todos'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: Todos
        }
    ]
})

export default router
