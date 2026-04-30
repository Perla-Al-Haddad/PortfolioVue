import { createRouter, createWebHashHistory } from "vue-router"

import ComingSoon from "../views/ComingSoon"
import HomeView from "../views/HomeView"
import SiriProject from "../views/projects/SiriProject"

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
    },
    {
        path: "/projects/siri",
        name: "SiriProject",
        component: SiriProject
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        resolve();
                    }
                }, 100);
            });
        }
    }
})

export default router