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
          <div>
              <acg-card />
          </div>
      </div>
  </div>
</template>

<script>
import AcgCard from "@/components/commons/AcgCard.vue";
export default {
    name: "Dashboard",
    components: {
        AcgCard,
    },

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