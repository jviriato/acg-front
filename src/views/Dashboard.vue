<template>
  <div>
    <Hero :hours="217" :total-hours="290" />
    <div class="button-wrapper">
      <md-button class="md-dense md-raised md-primary button" @click="goToEnviarACG()">Enviar ACG</md-button>
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
import Hero from "@/components/Dashboard/Hero.vue";
export default {
  name: "Dashboard",
  components: {
    AcgCard,
    Hero
  },

  data() {
    return {
      acgs: []
    };
  },

  methods: {
    goToEnviarACG() {
      this.$router.push({ name: "enviarFormulario" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
