import login from '../pages/login.vue '
import home from '../pages/home.vue'
import cadastro from '../pages/cadastro.vue'

export default [ 
        { path: '/', component: login },
        { path: '/home', component: home },
        { path: '/cadastro', component: cadastro }
    ]