import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateUser from "../views/User/CreateUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createuser",
    name: "CreateUser",
    component: CreateUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
