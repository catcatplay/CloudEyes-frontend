import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: () => import('../pages/admin/UserManage.vue')
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: () => import('../pages/user/UserLogin.vue')
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: () => import('../pages/user/UserRegister.vue')
    },
  ],
})

export default router
