import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
    faLink, faBug, faGlobe, faFish, faMeteor, faRocket,
    faAddressCard, faArrowUpRightFromSquare, faUpRightFromSquare,
    faBars
} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faGithub, faLinkedin, faLink, faBug, faGlobe,
    faFish, faMeteor, faRocket, faAddressCard, faArrowUpRightFromSquare,
    faUpRightFromSquare, faBars)


import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
