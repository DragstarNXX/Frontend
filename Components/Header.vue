<template>
    <header>
      <h1>Site Automobile</h1>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/informations">Informations</router-link>
        <router-link to="/contact">Nous contacter</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  header {
    text-align: center;
    background-color: white;
    color: black;
    font-family: Arial, sans-serif;
    padding: 1em;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    padding: 1em;
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  