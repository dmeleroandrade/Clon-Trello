import { patch } from 'semver'
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home.vue'
import Board from '@/components/views/board.vue'


Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/board/:id', //:id Esta es una parte dinámica de la ruta que indica que hay un parámetro llamado id. El : indica que id es un parámetro dinámico, lo que significa que su valor puede cambiar. 
      name:'board', //este nombre board es el que le pasamos en el router link del componente boardCard
      component: Board,
      props:true //las propiedades de boardCard pasen como props al componente board
    }
  ]
})
