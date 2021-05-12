import { MapElementFactory } from "vue2-google-maps";

export default MapElementFactory({
  name: "directionsRenderer",
  ctr() {
    return window.google.maps.DirectionsRenderer;
  },
  events: [],
  mappedProps: {},
  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String },
    optimizeWaypoints: { type: Boolean },
    waypoints: { type: Array },
    selectedRoute: { type: Object },
    tollsInRoute: { type: Array },
  },
  data() {
    return {
      markers: [],
    };
  },
  afterCreate(directionsRenderer) {
    let directionsService = new window.google.maps.DirectionsService();
    var infowindow = new google.maps.InfoWindow();
    this.$watch(
      () => [
        this.origin,
        this.destination,
        this.travelMode,
        this.waypoints,
        this.optimizeWaypoints,
      ],
      () => {
        let {
          origin,
          destination,
          travelMode,
          optimizeWaypoints,
          waypoints,
        } = this;
        if (
          !origin ||
          !destination ||
          !travelMode ||
          !optimizeWaypoints ||
          !waypoints
        )
          return;
        directionsService.route(
          {
            origin,
            destination,
            waypoints,
            optimizeWaypoints,
            travelMode,
          },
          (response, status) => {
            if (status !== "OK") return;
            var legs = response.routes[0].legs;
            this.clearMarkers();
            this.createMarkers(legs, infowindow);
            directionsRenderer.setOptions({ suppressMarkers: true });
            directionsRenderer.setDirections(response);
          }
        );
      }
    );
  },
  methods: {
    clearMarkers() {
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },
    createMarkers(legs, info) {
      this.createMarker(
        this.origin,
        "<center><b> TU UBICACIÓN </b> <br>" +
          this.selectedRoute.startCity +
          "</center>",
        this.selectedRoute.startCity,
        info,
        "http://maps.google.com/mapfiles/kml/pal3/icon48.png"
      );
      this.createMarker(
        this.destination,
        "<center><b> DESTINO </b> <br>" +
          this.selectedRoute.arrivalCity +
          "</center>",
        this.selectedRoute.arrivalCity,
        info,
        "http://maps.google.com/mapfiles/kml/pal3/icon32.png"
      );

      for (let i = 0; i < legs.length - 1; i++) {
        this.createMarkerToll(legs[i], info);
      }
    },
    createMarker(latlng, label, title, info, image) {
      var contentString = label;
      var marker = new google.maps.Marker({
        position: latlng,
        map: this.$map,
        icon: image,
        title: title,
      });
      google.maps.event.addListener(marker, "click", function () {
        info.setContent(contentString);
        info.open(this.$map, marker);
      });
      this.markers.push(marker);
    },
    createMarkerToll(leg, info) {
      for (let i = 0; i < this.tollsInRoute.length; i++) {
        if (
          Math.abs(this.tollsInRoute[i].coor_lat - leg.end_location.lat()) <
            0.0005 &&
          Math.abs(this.tollsInRoute[i].coor_lng - leg.end_location.lng()) <
            0.0005
        ) {
          console.log("Hola");
          this.createMarker(
            leg.end_location,
            "<center><b>PEAJE " +
              this.tollsInRoute[i].name +
              "</b></center> <br> Precio del peaje: " +
              this.tollsInRoute[i].price,
            this.tollsInRoute.name,
            info,
            "http://maps.google.com/mapfiles/kml/pal2/icon53.png"
          );
          break;
        }
      }
    },
  },
});
