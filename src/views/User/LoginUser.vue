<template>
  <div class="fondo">
    <b-container class="loginUser">
      <h1 class="title mt-4"><b>Login</b></h1>
      <b-form class="form" id="form">
        <!-- Correo -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Correo"
          label-for="mail"
        >
          <b-form-input
            type="text"
            maxlength="30"
            id="mail"
            placeholder="Ingresa el correo"
            v-model="user.mail"
            required
          ></b-form-input
        ></b-form-group>
        <!-- Contraseña -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Contraseña"
          label-for="password"
        >
          <b-form-input
            type="password"
            maxlength="20"
            id="password"
            placeholder="Ingresa su contraseña"
            v-model="user.password"
            required
          ></b-form-input
        ></b-form-group>
        <b-button block class="button-primary mt-4" syze="sm" @click="onClicked"
          >Ingresar</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "LoginUser",
  data() {
    return {
      user: {
        mail: "",
        password: "",
      },
      token: null,
    };
  },
  methods: {
    async onClicked() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($username: String!, $password: String!) {
              login(username: $username, password: $password) {
                token
              }
            }
          `,
          variables: {
            username: this.user.mail,
            password: this.user.password,
          },
        })
        .then((data) => {
          localStorage.setItem("token", data.data.login.token);
          this.token = data.data.login.token;
        });

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
            username: this.user.mail,
            token: this.token,
          },
        })
        .then((data) => {
          localStorage.setItem("mail", this.user.mail);
          this.$store.dispatch("User/loginUser", data.data.getUser, this.token);
        });

      if (this.token === null || this.$store.state.User.userAuth === null) {
        alert("Credenciales incorrectas");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.loginUser {
  padding: 2rem;
}
.button-primary {
  background-color: #141414;
  color: #f6f7eb;
}
.title {
  text-align: center;
  font-size: 2.5em;
  color: #141414;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  background: #e74c4c;
  border-radius: 10px;
  max-width: 540px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  text-align: justify;
}
.light-text {
  color: #141414 !important;
}
</style>
>
