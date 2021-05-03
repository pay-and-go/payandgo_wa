<template>
  <div>
    <b-container class="profileUser">
      <b-row>
        <b-col cols="1"> </b-col>
        <b-col cols="10"
          ><b-card
            title="Perfil de usuario"
            img-src="https://image.flaticon.com/icons/png/512/121/121693.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text v-if="$store.state.User.userAuth">
              Nombre:
              {{ $store.state.User.userAuth.first_name }}
              <br />
              Apellido:
              {{ $store.state.User.userAuth.last_name }}
              <br />
              Cedula:
              {{ $store.state.User.userAuth.cedula }}
              <br />
              Correo:
              {{ $store.state.User.userAuth.mail }}
              <br />
              <b-button
                variant="outline-info"
                class="firstButton"
                @click="editUser"
                >Editar usuario</b-button
              >
              <b-button variant="danger" @click="deleteUser"
                >Eliminar usuario</b-button
              >
            </b-card-text>
          </b-card></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "LoginUser",
  data() {
    return {
      id: "",
    };
  },
  methods: {
    editUser() {
      this.$router.push("/edituser");
    },
    async deleteUser() {
      var conf = confirm(
        "Quieres eliminar tu usuario. Esta accion no se podra reversar"
      );
      if (conf === true) {
        await this.$apollo.mutate({
          mutation: gql`
            mutation($id: Int!) {
              deleteUser(id: $id)
            }
          `,
          variables: {
            id: this.id,
          },
        });
        this.$router.push("/");
      }
    },
  },
  created() {
    this.id = this.$store.state.User.userAuth.id;
  },
};
</script>

<style scoped>
.loginUser {
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
  background: #e9cc95;
  border-radius: 10px;
  max-width: 540px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  text-align: justify;
}
.light-text {
  color: #141414 !important;
}

.card-img-top {
  width: 14rem;
  height: 14rem;
  padding: 2rem;
}

.card {
  flex-direction: row;
  justify-content: flex-start;
}

.card-title {
  text-align: center;
}

.card-body {
  text-align: start;
  padding: 1.5rem;
}

.btn {
  margin: 1.5rem;
  margin-left: 0;
}
</style>
