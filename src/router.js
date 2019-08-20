import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import enviarFormulario from "./views/enviarFormulario.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/enviar-formulario",
      name: "enviarFormulario",
      component: enviarFormulario,
    }
  ]
});
