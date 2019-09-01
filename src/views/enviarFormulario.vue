<template>
  <div>
    <div class="title">Enviar ACG</div>
    <div class="align">
      <div class="wrapper" v-if="step == 1">
        <primeiro-passo v-on:fim-primeiro-passo="checkFirstStep" />
      </div>
      <div class="wrapper" v-if="step == 2">
        <segundo-passo v-on:fim-segundo-passo="checkFirstStep"/>
      </div>
      <div class="wrapper fim" v-if="step == 3">
        <icon-success />
        <h1>Parabéns! Sua ACG foi enviada com sucesso!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/commons/Input.vue";
import PrimeiroPasso from "@/components/enviarFormulario/primeiroPasso.vue";
import SegundoPasso from "@/components/enviarFormulario/segundoPasso.vue";
import IconSuccess from "@/components/commons/IconSuccess.vue";
import moment from "moment";
export default {
  name: "enviarFormulario",

  components: {
    Input,
    PrimeiroPasso,
    SegundoPasso,
    IconSuccess
  },

  data() {
    return {
      step: 1,
      name: "José",
      matricula: "",
      data: ""
    };
  },

  methods: {
    nextStep() {
      const TOTAL_STEPS = 3;
      this.step += 1 % TOTAL_STEPS;
    },

    checkFirstStep(data) {
      this.nextStep();
    }
  }
};
</script>

<style lang="scss" scoped>
.align {
  text-align: center;
}
@media (min-width: 979px) {
  .wrapper {
    display: inline-block;
    width: 40%;
    align-self: center;
    text-align: center;
  }
  .fim {
    display: inline-block;
  }
}
.fim {
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 1em;
  line-height: 20px;
  align-items: center;
}
.top {
  display: flex;
  justify-content: space-between;
}
.padding {
  padding: 2em;
}
.input {
  width: 100%;
}

.title {
  height: 20vh;
  font-weight: bold;
  padding: 1.5em;
  font-size: 2em;
  color: white;
  background: $primary;
  padding-bottom: 3.5em;
}

.form {
  height: 80vh;
  background: white;
  $radius: 22px;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
  margin-top: -50px;

  .text {
    line-height: 30px;
    font-size: 2em;
    text-align: left;
    font-weight: bold;
  }
  .sub {
    font-size: 1.7em;
  }
  .helper-text {
    text-align: left !important;
  }
  .date {
    align-self: center;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
}
</style>