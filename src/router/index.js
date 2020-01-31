import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Teste from '@/components/Teste';
import Clipboard from '@/components/Clipboard';
import Clipboard2 from '@/components/Clipboard2';

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
        },{
            path: '/Clipboard',
            name: 'Clipboard',
            component: Clipboard
        },{
            path: '/Clipboard2',
            name: 'Clipboard2',
            component: Clipboard2
        }
    ]
})