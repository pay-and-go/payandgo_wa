<template>
  <div class="fondo">
    <b-container class="editUser">
      <h1 class="title mt-4"><b>Editar usuario</b></h1>
      <b-form class="form" id="form">
        <!-- Nombre -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Nombre"
          label-for="first_name"
        >
          <b-form-input
            type="text"
            id="first_name"
            placeholder="Ingresa su nombre"
            v-model="user.first_name"
            required
          ></b-form-input
        ></b-form-group>
        <!-- Apellido -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Apellido"
          label-for="last_name"
        >
          <b-form-input
            type="text"
            maxlength="20"
            id="last_name"
            placeholder="Ingresa sus apellidos"
            v-model="user.last_name"
            required
          ></b-form-input
        ></b-form-group>
        <!-- Color -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Cedula"
          label-for="cedula"
        >
          <b-form-input
            type="text"
            maxlength="20"
            id="cedula"
            placeholder="Ingresa su documento de identificacion"
            v-model="user.cedula"
            required
          ></b-form-input
        ></b-form-group>
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
        <b-button
          block
          class="button-primary mt-4"
          syze="sm"
          type="submit"
          @click="onClicked"
          >Modificar</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CreateUser",
  apollo: {},

  data() {
    return {
      user: {
        id: "",
        first_name: "",
        last_name: "",
        cedula: "",
        mail: "",
      },
    };
  },
  methods: {
    async onClicked() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation(
              $id: Int!
              $first_name: String!
              $last_name: String!
              $cedula: Int!
              $mail: String!
              $password: String!
            ) {
              updateUser(
                id: $id
                user: {
                  first_name: $first_name
                  last_name: $last_name
                  cedula: $cedula
                  mail: $mail
                  password: $password
                }
              ) {
                id
                cedula
                first_name
                last_name
                mail
                password
              }
            }
          `,
          variables: {
            id: this.user.id,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            cedula: this.user.cedula,
            mail: this.user.mail,
            password: this.user.password,
          },
        })
        .then((data) => {
          console.log(data.data.updateUser);
          this.$store.dispatch("User/loginUser", data.data.updateUser);
          this.$router.push("/profileuser");
        });
    },
  },
  created() {
    this.user.first_name = this.$store.state.User.userAuth.first_name;
    this.user.last_name = this.$store.state.User.userAuth.last_name;
    this.user.mail = this.$store.state.User.userAuth.mail;
    this.user.cedula = this.$store.state.User.userAuth.cedula;
    this.user.password = this.$store.state.User.userAuth.password;
    this.user.id = this.$store.state.User.userAuth.id;
  },
};
</script>

<style scoped>
.editUser {
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
