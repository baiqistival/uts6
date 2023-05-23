import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../views/DetailsView.vue' //menggunakan satu file untuk di import ke app
// import LivesView from '../views/LivesView.vue'
// import LivesView from '../views/Galery/LivesView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            // component: IndexView //langsung memanggil component, tanpa di panggil dari file view selain app
            component: () => import('../views/IndexView.vue')
        },
        {
            // path: '/detail/:id',
            path: '/lives',
            name: 'lives',
            component: () => import('../views/Galery/LivesView.vue')
        },
        {
            // path: '/detail/:id',
            path: '/detail/:id',
            name: 'detail',
            props: true,
            component: Detail
        }
    ]
})

export default router
