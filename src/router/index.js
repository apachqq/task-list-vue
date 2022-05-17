import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import TodosPage from '@/pages/TodosPage'
import AboutUsPage from '@/pages/AboutUsPage'
import LoginPage from '@/pages/LoginPage'
import PageNotFound from '@/pages/PageNotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/todos', component: TodosPage},
        {path: '/about', component: AboutUsPage},
        {path: '/login', name: 'LoginPage', component: LoginPage},
        {path: '/:notFound(.*)', component: PageNotFound}
    ]
})

export default router
