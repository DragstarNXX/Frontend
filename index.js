import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";
import { store } from "./Store/store.js";
import { createPinia } from "pinia";
import axios from "axios";

const app = createApp(App);


app.config.globalProperties.$http = axios;
app.provide("http", axios);

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : null;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

app.use(router);
app.use(createPinia());
app.use(store);
app.mount("#app");
