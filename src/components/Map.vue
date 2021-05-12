<template>
  <div>
    <GmapMap id="map" ref="map" :zoom="16" :center="myCoordinates">
      <DirectionsRenderer
        travelMode="DRIVING"
        :origin="origin"
        :destination="destination"
        :waypoints="waypoints"
        :optimizeWaypoints="true"
        :selectedRoute="routeObj"
        :tollsInRoute="tollArr"
      />
    </GmapMap>
  </div>
</template>

<script>
import DirectionsRenderer from "./DirectionsRenderer.js";

export default {
  components: {
    DirectionsRenderer,
  },
  props: {
    route: { type: Object },
    tollsRoute: { type: Array },
  },
  data() {
    return {
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      map: null,
      waypts: [],
      tolls: [],
      sumPago: 0,
    };
  },
  created() {
    this.$getLocation({}).then((coordinates) => {
      this.myCoordinates = coordinates;
    });
  },
  computed: {
    origin() {
      return this.myCoordinates;
    },
    destination() {
      if (!this.route) return null;
      var endC = {
        lat: this.route.latitudeEnd,
        lng: this.route.longitudeEnd,
      };
      return endC;
    },
    waypoints() {
      this.tolls = [];
      if (this.tollsRoute != null) {
        this.tollsRoute.forEach((toll) => {
          this.tolls.push({
            location: { lat: toll.coor_lat, lng: toll.coor_lng },
            stopover: true,
          });
        });
      }
      return this.tolls;
    },
    routeObj() {
      return this.route;
    },
    tollArr() {
      return this.tollsRoute;
    },
  },
  mounted() {},
};
</script>

<style>
.vue-map-container {
  height: 85vh;
  width: 70vw;
}
.vue-map {
  height: 100%;
}
</style>
