import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Teste from '@/components/Teste'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            path: '/Teste',
            name: 'Teste',
            component: Teste
        }
    ]
})