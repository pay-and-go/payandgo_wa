<template>
  <div>
    <b-container class="vehiculos">
      <b-row cols="2">
        <div v-for="vehicle in vehicleByIdUser" :key="vehicle.iduser">
          <b-card title="Vehiculo">
            <b-card-text>
              Placa: {{ vehicle.placa }} Marca: {{ vehicle.marca }} Tipo:
              {{ vehicle.tipo }} Color: {{ vehicle.color }}
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Vehicle",
  data() {
    return {
      iduser: "",
    };
  },
  apollo: {
    vehicleByIdUser: {
      query: gql`
        query($iduser: Int!) {
          vehicleByIdUser(iduser: $iduser) {
            id
            iduser
            placa
            marca
            tipo
            color
            createdAt
            updatedAt
          }
        }
      `,
      variables() {
        return {
          iduser: 2,
        };
      },
    },
  },
};
</script>
