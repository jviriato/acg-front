import Vue from "vue";
import axios from "axios";
import EventBus from "./EventBus";

Vue.use(EventBus);

const vue = new Vue({});

const API_URL = "http://localhost:8000/v1";

axios.interceptors.request.use((config) => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (config.url.search("local") == -1) {
        config.url = API_URL + config.url;
    }
    if (usuario) {
        config.headers.common['Authorization'] = `Bearer ${usuario.access_token}`;
    }
    return config;
});


axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        vue.$events.$emit("logout");
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
