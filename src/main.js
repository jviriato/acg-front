import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import { MdButton, MdContent, MdField, MdCard, MdMenu, MdList, MdDatepicker } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "./registerServiceWorker";

Vue.use(VeeValidate);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdField);
Vue.use(MdCard);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdDatepicker);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
