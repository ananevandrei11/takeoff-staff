import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/LogIn.vue";
import SingUp from "../views/SingUp.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
  },
  {
    path: "/",
    name: "SingUp",
    component: SingUp
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
});

export default router;
