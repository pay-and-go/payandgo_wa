<template>
  <div id="app">
    <div id="nav">
      <a href="#/"
        ><img
          src="./assets/payAndGoLogo.png"
          alt="Logo Pay And Go"
          widht="80em"
          height="35em"
      /></a>
      <router-link to="/">Home</router-link> |
      <router-link to="/createuser" v-if="!$store.state.User.userAuth"
        >Crear Usuario |
      </router-link>

      <router-link to="/registervehicle" v-if="$store.state.User.userAuth"
        >Registrar vehiculo |
      </router-link>

      <router-link to="/calcularruta" v-if="$store.state.User.userAuth"
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
    <div id="bodyMain">
      <router-view />
    </div>
    <div id="footer" class="container-fluid text-center fixed-bottom">
      <h7>© Pay & Go Team</h7>
    </div>
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
  padding: 20px;
  background-color: #404361;
  position: fixed;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #ff5c5c;
}

#nav a.router-link-exact-active {
  color: #ebe5d1;
}

#bodyMain {
  padding-top: 4em;
}

.fondo {
  margin-top: -5px;
  padding-top: 25px;
  height: 110vh;
  background-color: #edf2f4;
  background-size: cover;
}

#footer {
  align: center;
  padding: 0.7em;
  background-color: #404361;
}

#footer h7 {
  font-weight: bold;
  color: #ff5c5c;
}
</style>
