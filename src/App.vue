<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img
          src="./assets/payAndGoLogo.png"
          alt="Logo Pay And Go"
          widht="80em"
          height="35em"
          style="padding-right: 3em"
        />
      </router-link>
      <router-link to="/">Home | </router-link>
      <router-link to="/createuser" v-if="!$store.state.User.userAuth"
        >Crear Usuario |
      </router-link>

      <router-link to="/registervehicle" v-if="$store.state.User.userAuth"
        >Registrar vehiculo |
      </router-link>

      <router-link to="/calcularruta" v-if="$store.state.User.userAuth"
        >Calcular ruta |
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
      <h6>© Pay & Go Team</h6>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "App",
  async created() {
    if (localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      var mail = localStorage.getItem("mail");
      await this.$apollo
        .query({
          query: gql`
            query($username: String!, $token: String!) {
              getUser(username: $username, token: $token) {
                id
                first_name
                last_name
                cedula
                mail
              }
            }
          `,
          variables: {
            username: mail,
            token: token,
          },
        })
        .then((data) => {
          this.$store.dispatch("User/loginUser", data.data.getUser, this.token);
        });
    }
  },
};
</script>

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

#footer h6 {
  font-weight: bold;
  color: #ff5c5c;
}
</style>
