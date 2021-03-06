import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import CreateUser from "../views/User/CreateUser.vue";
import LoginUser from "../views/User/LoginUser.vue";
import LogoutUser from "../views/User/LogoutUser.vue";

import ProfileUser from "../views/User/ProfileUser.vue";
import EditUser from "../views/User/EditUser.vue";

import RegisterVehicle from "../views/Vehicles/RegisterVehicle.vue";
import CalculateRoute from "../views/Routes/CalculateRoute.vue";

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
    path: "/calcularruta",
    name: "CalculateRoute",
    component: CalculateRoute,
    props: true,
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
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  mode: "history",
  routes,
});

export default router;
