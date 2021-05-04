<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/createuser" v-if="!$store.state.User.userAuth"
        >Crear Usuario |
      </router-link>

      <router-link to="/registervehicle" v-if="$store.state.User.userAuth"
        >Registrar vehiculo |
      </router-link>

      <router-link to="/profileuser" v-if="$store.state.User.userAuth"
        >Perfil usuario |
      </router-link>

      <router-link to="/loginuser" v-if="!$store.state.User.userAuth"
        >Iniciar sesion</router-link
      >
      <router-link to="/logoutuser" v-else>Cerrar sesion</router-link>
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
  color: #ebe5d1;
}

.fondo {
  margin-top: -5px;
  padding-top: 25px;
  height: 110vh;
  background-color: #ebe5d1;
  background-size: cover;
}
</style>
