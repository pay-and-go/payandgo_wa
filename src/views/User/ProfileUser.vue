<template>
  <div>
    <b-container class="profileUser"> </b-container>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {};
  },
  methods: {},
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
</style>
>
