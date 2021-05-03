import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import CreateUser from "../views/User/CreateUser.vue";
import LoginUser from "../views/User/LoginUser.vue";
import ProfileUser from "../views/User/ProfileUser.vue";
import EditUser from "../views/User/EditUser.vue";

import RegisterVehicle from "../views/Vehicles/RegisterVehicle.vue";
import VerMapa from "../views/Routes/VerMapa.vue";

import Vehicle from "../views/Vehicles/Vehicle.vue";
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
    path: "/vehicle",
    name: "Vehicle",
    component: Vehicle,
  },
  {
    path: "/createuser",
    name: "CreateUser",
    component: CreateUser,
  },
  {
    path: "/loginuser",
    name: "LoginUser",
    component: LoginUser,
  },
  {
    path: "/vermapa",
    name: "VerMapa",
    component: VerMapa,
  },
  {
    path: "/profileuser",
    name: "ProfileUser",
    component: ProfileUser,
  },
  {
    path: "/edituser",
    name: "EditUser",
    component: EditUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
