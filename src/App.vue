<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <sidebar-menu  v-if="this.$route.path !== '/'" :menu="menu" collapsed="true" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Menu",
          hiddenOnCollapse: true
        },
        {
          href: "/dashboard",
          title: "Dashboard",
          icon: "fa fa-user"
        },
        {
          href: "/status",
          title: "Status",
          icon: "fa fa-chart-area"
        },
        {
          href: "/enviar-formulario",
          title: "Enviar ACG",
          icon: "fa fa-folder"
        }
      ]
    };
  },

  mounted() {
    this.$emit('toggle-collapse');
  }
};
</script>

<style lang="scss">
.v-sidebar-menu .vsm--title {
  padding-left: 0.5em;
  text-align: left;
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
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
</style>
