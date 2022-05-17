import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import TodosPage from '@/pages/TodosPage'
import AboutUsPage from '@/pages/AboutUsPage'
import LoginPage from '@/pages/LoginPage'
import PageNotFound from '@/pages/PageNotFound'
import index from '@/store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'HomePage', component: HomePage},
        {path: '/todos', name: 'TodosPage', component: TodosPage},
        {path: '/about', name: 'AboutUsPage', component: AboutUsPage},
        {path: '/login', name: 'LoginPage', component: LoginPage},
        {path: '/:notFound(.*)', name: 'PageNotFound', component: PageNotFound}
    ]
})

router.beforeEach((to, from, next) => {
    if (!index.state.isAuth && to.name === 'TodosPage') {
        alert('To access the list of tasks, please log in')
        next('/login')
    } else {
        next()
    }
})

export default router
