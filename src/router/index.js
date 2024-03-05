import { patch } from 'semver'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //aquí le indicamos a donde debe de ir cuando hagamos click en el header. Que será a la Home. (componente dentro de views)
      path:'/',
      component: Home
     }
  ]
})
