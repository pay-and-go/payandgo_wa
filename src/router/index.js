import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateUser from "../views/User/CreateUser.vue";
import RegisterVehicle from "../views/Vehicles/RegisterVehicle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registervehicle",
    name: "RegisterVehicle",
    component: RegisterVehicle,
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
