import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Search from './components/Search'

Vue.use(Router)

export const routes = [
    {path:'', name: 'home', component: App},
    {path:'/pesquisar', name: 'pesquisar', component: Search}
];