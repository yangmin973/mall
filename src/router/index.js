import Vue from "vue"
import vueRouter from "vue-router"

Vue.use(vueRouter)

const Home = () => import("../views/home/Home")
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },{
    path:"/cart",
    component:Cart
  },{
    path:"/category",
    component:Category
  },{
    path:"/profile",
    component:Profile
  },
]

const router = new vueRouter({
  routes,
  //mode:"history"
})

export default router
