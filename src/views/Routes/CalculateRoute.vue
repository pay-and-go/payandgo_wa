<template>
  <div class="fondo">
    <b-container fluid class="profileUser">
      <b-row>
        <b-col cols="3">
          <h3 class="title mt-4"><b>Seleccionar inicio</b></h3>
          <b-form class="form" id="form">
            <b-form-group
              class="light-text"
              label-class="font-weight-bold"
              label="Tipo"
              label-for="tipo"
            >
              <b-form-select id="tipo" v-model="modelRoute.start" required
                ><b-form-select-option value="" disabled
                  >-- Please select an option --</b-form-select-option
                >
                <b-form-select-option
                  v-for="option in optionsStart"
                  :key="option.value"
                  :value="option.value"
                  >{{ option.text }}</b-form-select-option
                >
              </b-form-select></b-form-group
            >
            <h3 class="title mt-4"><b>Seleccionar fin</b></h3>
            <b-form-group
              class="light-text"
              label-class="font-weight-bold"
              label="Tipo"
              label-for="tipo"
            >
              <b-form-select
                id="tipo"
                v-model="modelRoute.end"
                required
                @change="reDoQuery"
                ><b-form-select-option value="" disabled
                  >-- Please select an option --</b-form-select-option
                >
                <b-form-select-option
                  v-for="route in allRoutes"
                  :key="route.idRoute"
                  :value="route.arrivalCity"
                  >{{ route.arrivalCity }}</b-form-select-option
                ></b-form-select
              >
            </b-form-group>
          </b-form>
        </b-col>
        <b-col cols="9">
          <Map :route="getRoute" :tollsRoute="getTolls" v-if="mapBool" />
          <b-spinner
            style="margin-top: 20rem; width: 3rem; height: 3rem"
            variant="danger"
            label="Spinning"
            v-else
          ></b-spinner>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
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
  name: "calculateRoute",
  components: {
    Map,
  },
  apollo: {
    allRoutes: ALLROUTES,
    tollsInARouteByIdComplete: {
      query: gql`
        query tollsInARouteByIdComplete($routeId: String!) {
          tollsInARouteByIdComplete(route: $routeId) {
            coor_lat
            coor_lng
            name
            price
            sector
            territory
            tollId
          }
        }
      `,
      variables() {
        return {
          routeId: this.route.idRoute,
        };
      },
      skip() {
        return [];
      },
    },
  },
  data() {
    return {
      modelRoute: {
        start: "",
        end: "",
      },
      optionsStart: [{ value: "Bogota", text: "Bogota" }],
      route: null,
      mapBool: true,
    };
  },
  created() {
    this.$apollo.queries.tollsInARouteByIdComplete.skip = true;
  },
  computed: {
    getRoute() {
      if (this.modelRoute.start == "" || this.modelRoute.end == "") return null;
      this.allRoutes.forEach((element) => {
        if (
          element.startCity == this.modelRoute.start &&
          element.arrivalCity == this.modelRoute.end
        ) {
          this.route = element;
        }
      });
      return this.route;
    },
    getTolls() {
      return this.tollsInARouteByIdComplete;
    },
  },
  methods: {
    async reDoQuery() {
      if (this.modelRoute.start != "") {
        this.mapBool = false;
        this.$apollo.queries.tollsInARouteByIdComplete.skip = false;
        await this.$apollo.queries.tollsInARouteByIdComplete.refetch();
        this.$apollo.queries.tollsInARouteByIdComplete.skip = true;
        this.mapBool = true;
      }
    },
  },
};
</script>

<style scoped></style>
