<template>
  <div class="fondo">
    <b-container class="createUser">
      <h1 class="title mt-4"><b>Registrar usuario</b></h1>
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
            maxlength="6"
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
            maxlength="20"
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
        <!-- Verificar contraseña -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Contraseña"
          label-for="verifyPassword"
        >
          <b-form-input
            type="password"
            maxlength="20"
            id="verifyPassword"
            placeholder="Repita su contraseña"
            v-model="verifyPassword"
            required
          ></b-form-input
        ></b-form-group>
        <b-button
          block
          class="button-primary mt-4"
          syze="sm"
          type="submit"
          @click="onClicked"
          >Registrar</b-button
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
        first_name: "",
        last_name: "",
        cedula: "",
        mail: "",
        password: "",
      },
      vehicle: {
        nameOwner: "Pedro",
        idOwner: "1230",
        licenseCar: "CDD130",
      },
      verifyPassword: "",
      response: null,
    };
  },
  methods: {
    async onClicked() {
      if (this.user.password === this.verifyPassword) {
        await this.$apollo
          .mutate({
            mutation: gql`
              mutation(
                $first_name: String!
                $last_name: String!
                $cedula: Int!
                $mail: String!
                $password: String!
              ) {
                createUser(
                  user: {
                    first_name: $first_name
                    last_name: $last_name
                    cedula: $cedula
                    mail: $mail
                    password: $password
                  }
                ) {
                  first_name
                  last_name
                }
              }
            `,
            variables: {
              first_name: this.user.first_name,
              last_name: this.user.last_name,
              cedula: this.user.cedula,
              mail: this.user.mail,
              password: this.user.password,
            },
          })
          .then((data) => {
            alert(
              "Usuario: " +
                data.first_name +
                " " +
                data.last_name +
                "agregado correctamente"
            );
          })
          .catch(() => {
            alert("El usuario ya existe en el sistema");
            this.user.first_name = "";
            this.user.last_name = "";
            this.user.cedula = "";
            this.user.mail = "";
            this.user.password = "";
          });
      } else {
        this.user.password = "";
        this.verifyPassword = "";
        alert("Las contraseñas no coinciden");
      }
    },

    async prb() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation($name: String!, $license_car: String!, $id_owner: String!) {
            createCar(
              car: {
                licenseCar: $license_car
                nameOwner: $name
                idOwner: $id_owner
              }
            ) {
              idNodeCar
            }
          }
        `,
        variables: {
          name: this.vehicle.nameOwner,
          license_car: this.vehicle.licenseCar,
          id_owner: this.vehicle.idOwner,
        },
      });
    },
  },
  created() {
    console.log(this.$store.state.User.userAuth);
  },
};
</script>

<style scoped>
.createUser {
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
