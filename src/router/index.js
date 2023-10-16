import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:()=>import("@/views/Home"),
    children:[
      {
        path:'/',
        name:"Main",
        component:()=>import('@/views/Main/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
