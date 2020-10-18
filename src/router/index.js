import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    // 页面跳转至登录界面
    path: '/', 
    redirect:'/login'
    
  },
  {

    path:'/login',
    component:()=>import('../views/Login.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About', 
  //   component: () => import('../views/About.vue')
  // },
  {
    path:'/index',
    name:'Home',
    component:()=>import('../views/Home.vue'),
    children:[ 
      {path:'save',component:()=>import('../views/Save.vue')},
      {path:'search',component:()=>import('../views/Search.vue')},
      {path:'double',component:()=>import('../views/Double.vue')},
      {path:'single',component:()=>import('../views/Single.vue')},
    
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由导航守卫,控制页面跳转
// router.beforeEach((to,from,next)=>{
//   if(to.path==='/login') return next()
//   if(!window.sessionStorage.getItem('token')) return next('/login')
//   next()
// })

export default router
