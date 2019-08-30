<template>
  <div>
      <div class="hero">
          <div class="button-wrapper">
            <md-button class="md-dense md-raised md-primary button" 
                       @click="goToEnviarACG()">Enviar ACG
            </md-button>
          </div>
      </div>
      <div class="acg-wrapper">
          <div class="acg-card">
              <div class="percentage"></div>
              <div class="title"></div>
              <div class="hours"></div>
              <div class="text"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            acgs: []
        }
    },

    methods: {
        goToEnviarACG() {
            this.$router.push({name: 'enviarFormulario'});
        }
    }
}
</script>

<style>

</style>