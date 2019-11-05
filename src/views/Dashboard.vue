<template>
  <div>
    <Hero :hours="acgs.total_aprovado" :total-hours="totalHoras" :loading="loading"/>
    <div class="button-wrapper">
      <md-button class="md-dense md-raised md-primary button" @click="goToEnviarACG()">Enviar ACG</md-button>
    </div>
    <div class="acg-wrapper">
      <template v-if="!loading">
        <template v-for="(acg, index) in acgs.por_categoria">
          <acg-card v-bind:key="acg.efetivadas" :nome="index" :horas="acg.efetivadas" :totalHoras="acg.requisitadas" :cor="randomColor()"/>
        </template>
      </template>
      <template v-else>
        <p>Carregando...</p>
      </template>
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
      totalHoras: 0,
      acgs: [],
      loading: true,
      usuario: {},
    }
  },

  mounted() {
    this.$events.$emit('login');
    this.getUserFromLocalStorage();
    setTimeout(() => {
      this.getHorasTotais();
      this.getHorasAcgs();
    }, 1000);
  },

  methods: {
    goToEnviarACG() {
      this.$router.push({ name: "enviarFormulario" });
    },

    getUserFromLocalStorage() {
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
      console.log('this.usuario dashboard');
      console.log(this.usuario);
      
    },

    async getHorasAcgs() {
      try {
        this.loading = true;
        const matricula = this.usuario.matricula;
        const {data: response} = await this.$http.get(`/acgs-horas/${matricula}`);
  
        if(response) {
          this.acgs = response;
        }
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
        this.$router.push({name: "login"});
      }
    },

    async getHorasTotais() {
      try {
        this.loading = true;
        const matricula = this.usuario.matricula;
        const {data: response} = await this.$http.get(`/aluno/${matricula}`);
  
        if(response) {
          this.totalHoras = Number(response.curso.qtd_horas_totais_acg);
        }

        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
        this.$router.push({name: "login"});
      }
    },

    randomColor() {
      return ("hsl(" + 320 * Math.random() + ", " +
                 "100%," +
                 (40 + 13 * Math.random()) + "%)");
    },
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
