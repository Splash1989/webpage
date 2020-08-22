import IE from './components/IE.vue'
import Startpage from './components/Startpage.vue'
import Impressum from './components/Impressum.vue'
import Voter from './components/Voter.vue'

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
    {
        path: '/voter',
        component: Voter
    },
]