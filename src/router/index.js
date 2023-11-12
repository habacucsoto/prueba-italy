import { createRouter, createWebHashHistory } from 'vue-router'
import NoPageFound from '../views/NoPageFound'
import DiplomaView from '../views/DiplomaView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: NoPageFound
  },
  {
    path: '/diploma/:id',
    name: 'diploma',
    component: DiplomaView
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NoPageFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
