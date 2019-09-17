<template>
  <div class="acg-card">
    <div class="percentage">
      <progress-bar type="circle" ref="circle" :options="options"></progress-bar>
    </div>
    <div class="text-wrapper">
      <div class="left-wrapper">
        <div class="title">{{nome}}</div>
      </div>
      <div class="right-wrapper">
        <div class="horas">{{horas}}h/{{totalHoras}}h</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcgCard",
  props: {
    nome: String,
    horas: Number,
    totalHoras: Number,
    cor: String
  },

  data() {
    return {
      options: {
        color: this.cor,
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

  mounted() {
    this.calcPercentage();
  },

  methods: {
    calcPercentage() {
      let pct = Math.round((this.horas * 100) / this.totalHoras);
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

<style lang="scss">

.acg-card {
    margin-top: 1em;
    padding: 1em;
    display: flex;
    background-color: white;
    border-radius: 12px;
    width: 60vw;
    box-shadow: 0 5px 10px rgba(154,160,185,.025), 0 15px 30px rgba(166,173,201,.2);
}

.text-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2em;
    width: 100%;
    .left-wrapper {
        width: 80%;
    }
    .right-wrapper {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
    }
}

.title {
    font-weight: bold;
    font-size: 3em;
    line-height: normal;
}

.percentage {
  width: 150px;
}

@media (max-width: 979px) {
    .acg-card {
        width: 100vw;
        .text-wrapper {
            padding-left: .5em;
        }
        .title {
            font-size: 22px;
            text-align: left;
        }
        .right-wrapper {
            font-size: 15px;
        }
    }
}
</style>