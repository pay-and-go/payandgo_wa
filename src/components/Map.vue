<template>
  <div>
    <GmapMap
      :center="myCoordinates"
      :zoom="15"
      style="width: 640px; height: 500px; margin: 32px auto"
    >
      <GmapMarker
        v-for="marker in allRoutes"
        :key="marker.idRoute"
        :position="{ lat: marker.latitudeStart, lng: marker.longitudeStart }"
      />
      <GmapMarker
        v-for="marker in allRoutes"
        :key="marker.idRoute"
        :position="{ lat: marker.latitudeEnd, lng: marker.longitudeEnd }"
      />
    </GmapMap>
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
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      markers: [],
    };
  },
  apollo: {
    allRoutes: ALLROUTES,
  },
  created() {
    this.$getLocation({}).then((coordinates) => {
      this.myCoordinates = coordinates;
    });
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
