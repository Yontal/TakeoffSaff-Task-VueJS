import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',

    component: () => import('../views/Main.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== "Login" && store.state.token !== 1){
    next({name: "Login"});
  } else if (to.name === "Login" && store.state.token === 1) {
    next({name: "Main"});
  } else {
    next(); 
  }
})

export default router
