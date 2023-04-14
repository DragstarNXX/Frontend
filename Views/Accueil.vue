<template>
    <div>
      <h2>Accueil</h2>
      <p>Bienvenue sur le site de notre entreprise automobile ! Nous sommes spécialisés dans la fabrication et la vente de véhicules électriques et hybrides.</p>
      <h1>Inscription</h1>
    <Form @submit="onSubmit">
      <div>
        <label for="prenom">Prénom :</label>
        <Field id="prenom" name="prenom" type="text" v-model="form.prenom" rules="required" />
        <ErrorMessage name="prenom" />
      </div>

      <div>
        <label for="nom">Nom :</label>
        <Field id="nom" name="nom" type="text" v-model="form.nom" rules="required" />
        <ErrorMessage name="nom" />
      </div>

      <div>
        <label for="email">Email :</label>
        <Field id="email" name="email" type="email" v-model="form.email" rules="required|email" />
        <ErrorMessage name="email" />
      </div>

      <div>
        <label for="password">Mot de passe :</label>
        <Field id="password" name="password" type="password" v-model="form.password" rules="required|min:8" />
        <ErrorMessage name="password" />
      </div>

      <button type="submit">S'inscrire</button>
    </Form>

    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>

    </div>
  </template>
  
  <script>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthService from "../services/auth";

  export default {
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const form = ref({
      prenom: "",
      nom: "",
      email: "",
      password: "",
    });

    const onSubmit = async () => {
      console.log("Formulaire soumis :", form.value);
      // Traitez le formulaire ici en utilisant les services pour envoyer les données au backend
    };

    return {
      form,
      onSubmit,
    };
  },
  name: "Accueil",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const user = await AuthService.login(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
  </script>
  
  <style scoped>
  h2 {
    color: black;
    font-family: Arial, sans-serif;
  }
  </style>
  