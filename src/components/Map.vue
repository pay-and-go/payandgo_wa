<template>
  <div>
    <GmapMap
      :center="myCoordinates"
      :zoom="15"
      style="width: 640px; height: 500px; margin: 32px auto"
    >
    </GmapMap>
  </div>
</template>

<script>
//import gql from "graphql-tag";

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
