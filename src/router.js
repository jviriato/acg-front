import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import enviarFormulario from "./views/enviarFormulario.vue";
import Dashboard from "./views/Dashboard.vue";
import Status from "./views/Status.vue";
import adminPanel from "./views/AdminPanel.vue";
import colegiadoPanel from "./views/ColegiadoPanel.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/status",
      name: "status",
      component: Status
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/enviar-formulario",
      name: "enviarFormulario",
      component: enviarFormulario
    },
    {
      path: "/admin-panel",
      name: "adminPanel",
      component: adminPanel
    },
    {
      path: "/colegiado-panel",
      name: "colegiadoPanel",
      component: colegiadoPanel
    }
  ]
});
