<template></template>

<script>
export default {
  mounted() {
    this.$store.dispatch("User/logoutUser");
    localStorage.clear();
    this.$router.push("/");
    location.reload();
  },
};
</script>
