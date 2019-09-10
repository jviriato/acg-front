<template>
  <div>
    <Hero :hours="217" :total-hours="290" />
    <div class="button-wrapper">
      <md-button class="md-dense md-raised md-primary button" @click="goToEnviarACG()">Enviar ACG</md-button>
    </div>
    <div class="acg-wrapper">
        <acg-card nome="Participação em Eventos" horas="20" totalHoras="90" cor="#008F7A"/>
        <acg-card nome="Projeto de Pesquisa" horas="80" totalHoras="120" cor="#2C73D2"/>
        <acg-card nome="Monitoria" horas="90" totalHoras="90" cor="#845EC2"/>
        <acg-card nome="Participação em Eventos" horas="20" totalHoras="90" cor="#008F7A"/>
        <acg-card nome="Participação em Eventos" horas="20" totalHoras="90" cor="#008F7A"/>
        <acg-card nome="Participação em Eventos" horas="20" totalHoras="90" cor="#008F7A"/>
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
.acg-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
