import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('/src/router/views/Main.vue'),
    },
    {
        path:"/add",
        name:"add",
        component:()=> import("/src/router/views/Add.vue"),
    },
    {
        path:"/details/:no",
        name:"details",
        component:()=> import("/src/router/views/Details.vue"),
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
