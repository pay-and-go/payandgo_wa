<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/createuser">CreateUser </router-link> |
      <router-link to="/registervehicle">Register Vehicle</router-link> |
      <router-link to="/profileuser">Profile</router-link> |
      <router-link to="/loginuser">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #ee4646;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #d3d61d;
}

.fondo {
  margin-top: -5px;
  padding-top: 50px;
  height: 110vh;
  background-color: #ebe5d1;
  background-size: cover;
}
</style>
