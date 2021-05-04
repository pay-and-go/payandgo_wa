import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import CreateUser from "../views/User/CreateUser.vue";
import LoginUser from "../views/User/LoginUser.vue";
import LogoutUser from "../views/User/LogoutUser.vue";

import ProfileUser from "../views/User/ProfileUser.vue";
import EditUser from "../views/User/EditUser.vue";

import RegisterVehicle from "../views/Vehicles/RegisterVehicle.vue";
import VerMapa from "../views/Routes/VerMapa.vue";

import EditVehicle from "../views/Vehicles/EditVehicle.vue";
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
  {
    path: "/loginuser",
    name: "LoginUser",
    component: LoginUser,
  },
  {
    path: "/logoutuser",
    name: "LogoutUser",
    component: LogoutUser,
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
  {
    path: "/editvehicle",
    name: "EditVehicle",
    component: EditVehicle,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
