<template>
  <div class="fondo">
    <div class="mt-5">
      <b-container>
        <b-row class="mt-5" align-v="center">
          <b-col cols="12" md="4">
            <b-card
              border-variant="dark"
              img-src="https://www.beetrack.com/hubfs/Rutas%20punto%20a%20punto.jpg"
              img-alt="Ruta"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Busca la ruta hacia tu punto de destino
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" md="4">
            <b-card
              border-variant="dark"
              img-src="https://pob.com.co/wp-content/uploads/2019/04/image006.jpg"
              img-height="190em"
              img-alt="peaje"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Encuentra los peajes que se ubican en esta ruta
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" md="4">
            <b-card
              border-variant="dark"
              img-src="https://blog.hotmart.com/blog/2019/08/BLOG_receber-pagamentos-online-670x419.png"
              img-alt="pago"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Paga los peajes de tu ruta desde el momento de planear tu viaje
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
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