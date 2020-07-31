import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import Register from '@/views/Register'
import RoleManage from '@/views/RoleManage'

Vue.use(Router)

export default new Router({
  routes: [
    {// 主页面
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {// 登录界面
      path: '/login',
      name: 'Login',
      component: Login
    },
    {// 注册界面
      path: '/register',
      name: 'Register',
      component: Register
    },
    {// 角色管理界面
      path: '/roleManage',
      name: 'RoleManage',
      component: RoleManage,
    },
  ],
  mode: "history"
})
