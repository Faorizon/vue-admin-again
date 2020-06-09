import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:'login',
    hidden:true,
    meta:{
      name:"主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden:true,
    meta:{
      name:"登录"
    },
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/console",
    name: "Console",
    meta:{
      name:"控制台"
    },
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path:'/index',
        name:"Index",
        meta:{
          name:"首页"
        },
        component:() => import ("../views/Console/index.vue")
      }
    ]
  },
  /**
   * 信息管理
   */
  {
    path: "/info",
    name: "Info",
    meta:{
      name:"信息管理"
    },
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path:'/infoIndex',
        name:"InfoIndex",
        meta:{
          name:"信息列表"
        },
        component:() => import ("../views/Info/index.vue")
      },
      {
        path:'/infoCategory',
        name:"InfoCategory",
        meta:{
          name:"信息分类"
        },
        component:() => import ("../views/Info/category.vue")
      }
    ]
  },
  /**
   * 用户管理
   */
  {
    path: "/user",
    name: "User",
    meta:{
      name:"用户管理"
    },
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path:'/userIndex',
        name:"UserIndex",
        meta:{
          name:"用户列表"
        },
        component:() => import ("../views/User/index.vue")
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
