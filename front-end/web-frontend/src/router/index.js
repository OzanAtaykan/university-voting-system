import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

import IntroductionView from '../views/IntroductionView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: IntroductionView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
