<template>
    <div id="app">
        <Header />
      <router-view />
        <Footer />
    </div>
  </template>


  <script>
import Header from './Components/Header.vue';
import Footer from './Components/Footer.vue';
import authService from "../services/auth.service";
import rolesService from "../services/roles.service";
import usersService from "../services/users.service";
import automobilesService from "../services/automobiles.service";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Responsive design avec Media Queries */
@media (max-width: 768px) {
  header, footer {
    padding: 0.5rem;
  }

  main {
    padding: 0.5rem;
  }
}
</style>