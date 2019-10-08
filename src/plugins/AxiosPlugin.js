import Vue from "vue";
import axios from "axios";
import EventBus from "./EventBus";


Vue.use(EventBus);
const vue = new Vue({});

// const API_URL = "https://acg-api.herokuapp.com/api";
const API_URL = "http://localhost:8000/api";

axios.interceptors.request.use((config) => {
  config.url = API_URL + config.url;
  
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
