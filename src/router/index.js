import Vue from 'vue'
import VueRouter from 'vue-router'
import Todolist from '../module/tarefa/todolist/view/todolist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Todolist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
