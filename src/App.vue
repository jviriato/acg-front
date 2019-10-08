<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <template v-if="this.$route.path !== '/'">
      <Slide v-if="cUsuarioNormal">
        <div class="item-menu" id="dashboard" @click="$router.push('/dashboard')">
          <span>Dashboard</span>
        </div>
        <div class="item-menu" id="enviarACG" @click="$router.push('/enviar-formulario')">
          <span>Enviar ACG</span>
        </div>
        <div class="item-menu" id="status" @click="$router.push('/status')">
          <span>Status das ACGs</span>
        </div>
      </Slide>
    </template>
    <router-view />
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide
  },

  data() {
    return {
      user: '',
    };
  },

  mounted() {
    this.$emit("toggle-collapse");
    this.getUserFromLocalStorage();
  },

  computed: {
    cUsuarioNormal() {
      return this.user && this.user.nome != 'secretaria' && this.user.nome != 'colegiado';
    },
  },

  methods: {
    getUserFromLocalStorage() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  background: $background-gray;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $background-color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

.item-menu {
  cursor: pointer;
}
</style>
