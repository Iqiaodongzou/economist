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
        component:()=>import('@/views/Main')
      },
      {
        path:"weeklyEdition",
        redirect:'/weeklyEdition/archive',
        component:()=>import('@/views/WeeklyEdition'),
        children:[
          {
            path:"archive",
            component:()=>import('@/views/WeeklyEdition/Archive')
          },
          {
            path:":content",
            component:()=>import('@/views/WeeklyEdition/Date')
          },
          {
            path:"",
            component:()=>import('@/views/WeeklyEdition/Date')
          }
        ]
      }, {
        path:"/leaders/:content",
        name:'leaders',
        component:()=>import("@/views/Leaders")
      },
      {
        path:'/404',
        component:()=>import("@/views/404")
      },{
        path:"*",
        redirect: "/404"
      },
    ]
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})
//
// const router = new VueRouter({
//   routes
// })

export default router
