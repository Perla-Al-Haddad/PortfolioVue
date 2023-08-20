import { createRouter, createWebHistory } from "vue-router"

import ComingSoon from "../views/ComingSoon"
import Home from "../views/Home"

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
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