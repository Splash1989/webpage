import IE from './components/IE.vue'
import Startpage from './components/Startpage.vue'
import Impressum from './components/Impressum.vue'

export default [{
        path: '/',
        component: Startpage
    },
    {
        path: '/IE',
        component: IE
    },
    {
        path: '/impressum',
        component: Impressum
    },
]