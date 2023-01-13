import login from '../pages/login.vue'
import home from '../pages/home.vue'
import cadastro from '../pages/cadastro.vue'
import novoChamado from '../pages/novoChamado.vue'
import meusChamados from '../pages/meusChamados.vue'


export default [ 
        { path: '/', component: login },
        { path: '/home', component: home },
        { path: '/cadastro', component: cadastro },
        { path: '/novoChamado', component: novoChamado },
        { path: '/meusChamados', component: meusChamados }
    ]