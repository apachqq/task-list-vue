import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import TodosPage from '@/pages/TodosPage'
import AboutUsPage from '@/pages/AboutUsPage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/todos',
            component: TodosPage
        },
        {
            path: '/about',
            component: AboutUsPage
        }
    ]
})

export default router
