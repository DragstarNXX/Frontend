import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../views/Accueil.vue';
import Informations from '../views/Informations.vue';
import Contact from '../views/Contact.vue';
import AuthService from "../services/auth";

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/informations',
    name: 'Informations',
    component: Informations,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = AuthService.getCurrentUser();

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
