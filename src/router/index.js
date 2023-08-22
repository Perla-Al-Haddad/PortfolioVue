import { createRouter, createWebHistory } from "vue-router"

import ComingSoon from "../views/ComingSoon"
import HomeView from "../views/HomeView"

const routes = [
    {
        path: '/',
        name: "HomeView",
        component: HomeView
    },
    {
        path: "/coming-soon",
        name: "ComingSoon",
        component: ComingSoon
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router