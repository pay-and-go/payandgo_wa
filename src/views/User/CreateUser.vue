<template>
  <div class="fondo">
    <!-- <Card
      style="
        margin: 0 auto;
        width: 25rem;
        margin-bottom: 2em;
        text-align: center;
      "
    >
      <template slot="title"> Crear Usuario </template>
      <template slot="content">
        <h5>Nombre:</h5>
        <InputText style="width: 100%" type="text" v-model="user.first_name" />
        <h5>Apellido:</h5>
        <InputText style="width: 100%" type="text" v-model="user.last_name" />
        <h5>Cedula:</h5>
        <InputText style="width: 100%" type="text" v-model="user.cedula" />
        <h5>Correo:</h5>
        <InputText style="width: 100%" type="text" v-model="user.mail" />
        <h5>Contraseña:</h5>
        <InputText
          style="width: 100%"
          type="password"
          v-model="user.password"
        />
      </template>
      <template slot="footer">
        <Button icon="pi pi-check" label="Agregar usuario" />
      </template>
    </Card> -->
    <div v-for="route in allRoutes" :key="route.idRoute">
      {{ route.idRoute }}
      {{ route.startCity }}
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const ALLROUTES = gql`
  query {
    allRoutes {
      idRoute
      startCity
      arrivalCity
      description
      latitudeStart
      longitudeStart
      latitudeEnd
      longitudeEnd
    }
  }
`;

export default {
  name: "CreateUser",
  apollo: {
    allRoutes: ALLROUTES,
  },

  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        cedula: "",
        mail: "",
        password: "",
      },
    };
  },
  methods: {},
};
</script>

<style>
.p-card-content {
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0vw 1.8vw 1vw 1.8vw !important;
  text-align: left;
}
</style>
