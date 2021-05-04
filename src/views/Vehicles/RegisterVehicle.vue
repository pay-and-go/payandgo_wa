<template>
  <div>
    <b-container class="registervehicle">
      <h1 class="title mt-4"><b>Registrar Vehiculo</b></h1>
      <b-form class="form" id="form">
        <!-- Placa -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Placa"
          label-for="placa"
        >
          <b-form-input
            type="text"
            maxlength="6"
            id="placa"
            placeholder="Ingresa la placa del vehiculo"
            v-model="vehicle.placa"
            required
          ></b-form-input
        ></b-form-group>
        <!-- Marca -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Marca"
          label-for="marca"
        >
          <b-form-input
            type="text"
            maxlength="20"
            id="marca"
            placeholder="Ingresa la marca del vehiculo"
            v-model="vehicle.marca"
            required
          ></b-form-input
        ></b-form-group>
        <!-- Color -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Color"
          label-for="color"
        >
          <b-form-input
            type="text"
            maxlength="20"
            id="color"
            placeholder="Ingresa el color del vehiculo"
            v-model="vehicle.color"
            required
          ></b-form-input
        ></b-form-group>

        <!-- Tipo -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Tipo"
          label-for="tipo"
        >
          <b-form-select
            id="tipo"
            v-model="vehicle.tipo"
            :options="options"
            required
          ></b-form-select
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
  name: "RegisterVehicle",
  data() {
    return {
      vehicle: {
        iduser: this.$store.state.User.userAuth.id,
        placa: "",
        marca: "",
        color: "",
        name: this.$store.state.User.userAuth.first_name,
        tipo: null,
      },
      options: [
        { value: null, text: "Selecciona el tipo de tu vehiculo" },
        { value: 1, text: "Automoviles" },
        { value: 2, text: "Camperos" },
        { value: 3, text: "Camionetas" },
      ],
    };
  },

  methods: {
    async onClicked() {
      console.log(this.vehicle);
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($iduser: String!, $name: String!, $placa: String!) {
              createCar(
                car: { idOwner: $iduser, nameOwner: $name, licenseCar: $placa }
              ) {
                idNodeCar
              }
            }
          `,
          variables: {
            iduser: this.vehicle.iduser,
            name: this.vehicle.name,
            placa: this.vehicle.placa,
          },
        })
        .then((data) => {
          this.vehiculos();
        })
        .catch(() => {
          alert("Este vehiculo ya esta creado");
        });
    },
    async vehiculos() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation(
            $iduser: Int!
            $placa: String!
            $marca: String!
            $tipo: Int!
            $color: String!
          ) {
            createVehicle(
              vehicle: {
                iduser: $iduser
                placa: $placa
                marca: $marca
                tipo: $tipo
                color: $color
              }
            )
          }
        `,
        variables: {
          iduser: this.vehicle.iduser,
          placa: this.vehicle.placa,
          marca: this.vehicle.marca,
          tipo: this.vehicle.tipo,
          color: this.vehicle.color,
        },
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.registervehicle {
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
  background: #f6f7eb;
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
