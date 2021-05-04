<template></template>

<script>
export default {
  mounted() {
    this.$store.dispatch("User/logoutUser");
    this.$router.push("/");
  },
};
</script>
