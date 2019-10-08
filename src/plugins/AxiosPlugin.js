import Vue from "vue";
import axios from "axios";
import EventBus from "./EventBus";
import router from '../router';


Vue.use(EventBus);
const vue = new Vue({});

// const API_URL = "https://acg-api.herokuapp.com/api";
const API_URL = "http://localhost:8000/api";

axios.interceptors.request.use((config) => {
  const usuario = JSON.parse(localStorage.getItem("user"));

  if (!usuario) {
    return router.push('/');
  }
  
  if (config.url.search("local") == -1) {
    config.url = API_URL + config.url;
  }
  return config;
});


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  });

export default V => {
  Object.defineProperties(V.prototype, {
    $http: {
      get() {
        return axios;
      },
      post() {
        return axios;
      },
    },
  });
};
