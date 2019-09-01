<template>
  <div>
    <div class="hero">
      <div class="hero-content">
        <div class="progress-bar-wrapper">
          <progress-bar type="circle" ref="line" :options="options"></progress-bar>
        </div>
        <p class="text">
          Você tem
          <b>217</b> horas de
          <b>290</b>.
        </p>
      </div>
      <div class="button-wrapper">
        <md-button class="md-dense md-raised md-primary button" @click="goToEnviarACG()">Enviar ACG</md-button>
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
    AcgCard
  },

  data() {
    return {
      options: {
        color: "#007AFF",
        strokeWidth: 10,
        text: {
          value: "75%",
          style: {
            fontSize: "2em",
            fontWeight: "bold",
            position: "absolute",
            left: "50%",
            top: "50%",
            padding: 0,
            margin: 0,
            transform: {
              prefix: true,
              value: "translate(-50%, -50%)"
            }
          }
        }
      },
      acgs: []
    };
  },

  mounted() {
    this.$refs.line.animate(.75);
  },

  methods: {
    goToEnviarACG() {
      this.$router.push({ name: "enviarFormulario" });
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  background: $blue-gradient;
  .hero-content {
    display: flex;
    background-color: $background-gray;
    padding: 1em;
    border-radius: 8px;
    width: 40%;
    margin: 1em;
    .progress-bar-wrapper {
      width: 150px;
    }
    .text {
      font-family: "Roboto", sans-serif;
      font-size: 2rem;
      font-weight: 0;
      line-height: 1;
      text-align: left;
      padding-left: 1em;
    }
  }
}
@media (max-width: 979px) {
  .hero {
      height: 100vh !important;
      align-content: flex-start;
      justify-content: flex-start;
  }
  .hero-content {
    margin-top: 5em !important;
    width: 90vw !important;
    flex-direction: column !important;
    justify-content: center ;
    align-items: center;
  }
  .text {
      font-size: 1.4rem;
      padding: 1em !important;
      text-align: center !important;
      margin: 0 !important;
  }
  .progress-bar-wrapper {
    width: 100%;
  }
}

</style>
