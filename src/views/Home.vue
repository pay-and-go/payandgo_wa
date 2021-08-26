<template>
  <div class="fondo">
    <div class="mt-4">
      <b-card img-alt="Ruta" img-src="../assets/Ruta.jpg" img-left class="mb-3">
        <b-card-text>
          <H2> Busca la ruta hacia tu punto de destino </H2>
        </b-card-text>
      </b-card>

      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-right
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>