import { createPinia } from "pinia";

export const store = createPinia();
// Store pour les utilisateurs
export const useUsersStore = () => {
    return useStore("users", () => {
      return {
        users: [],
      };
    });
  };
  
  // Store pour les automobiles
  export const useAutomobilesStore = () => {
    return useStore("automobiles", () => {
      return {
        automobiles: [],
      };
    });
  };