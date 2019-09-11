import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import VueProgress from "vue-progress";
import AxiosPlugin from "./plugins/AxiosPlugin";
import { Slide } from 'vue-burger-menu';
import { MdButton, MdContent, MdField, MdCard, MdMenu, MdList, MdDatepicker } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "./registerServiceWorker";
Vue.use(VueProgress);
Vue.use(VeeValidate);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdField);
Vue.use(MdCard);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdDatepicker);
Vue.use(Slide);
Vue.use(AxiosPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
