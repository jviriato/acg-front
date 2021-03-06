<template>
  <div class="hero">
    <div class="hero-content">
      <template v-if="!loading">
        <div class="progress-bar-wrapper">
          <progress-bar type="circle" ref="circle" :options="options"></progress-bar>
        </div>
        <p class="text">
          Você tem
          <b>{{hours}}</b> horas de
          <b>{{totalHours}}</b>.
        </p>
      </template>
      <template v-else>
        <p>Carregando...</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    hours: Number,
    totalHours: Number,
    loading: Boolean,
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
      }
    };
  },

  watch: {
    loading() {
      if(!this.loading) {
        this.calcPercentage();
      }
    }
  },

  updated() {
    this.calcPercentage();
  },

  methods: {
    calcPercentage() {
      if(!this.hours || !this.totalHours) {
        return;
      }

      if(this.hours > this.totalHours) {
        this.setPercentage(100 * 0.01);
        this.setTextPercentage(100 + "%");
        return;
      }

      let pct = Math.round((this.hours * 100) / this.totalHours);
      this.setPercentage(pct * 0.01);
      this.setTextPercentage(pct + "%");
    },

    setPercentage(pct) {
      this.$refs.circle.animate(pct);
    },

    setTextPercentage(pct) {
      this.$refs.circle.setText(pct);
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
    height: 60vh !important;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .hero-content {
    margin-top: 5em !important;
    width: 90vw !important;
    flex-direction: column !important;
    justify-content: center;
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