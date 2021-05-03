<template>
  <div>
    <b-container class="registervehicle">
      <h1 class="title mt-4"><b>Editar Vehiculo</b></h1>
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
        <!-- idusuario -->
        <b-form-group
          class="light-text"
          label-class="font-weight-bold"
          label="Id"
          label-for="iduser"
        >
          <b-form-input
            type="text"
            maxlength="20"
            id="iduser"
            placeholder="Ingresa el ID del usuario"
            v-model="vehicle.iduser"
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
          >Editar</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "EditVehicle",
  data() {
    return {
      vehicle: {
        iduser: "",
        placa: "",
        marca: "",
        color: "",
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
    },
  },
};
</script>
