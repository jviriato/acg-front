<template>
  <div class="form padding">
    <div class="top">
      <p class="text">Olá, {{ name }}!</p>
      <p class="date">{{ data }}</p>
    </div>
    <p class="text sub">Para enviar sua ACG, responda algumas perguntas:</p>
    <div class="md-layout-item">
      <md-field>
        <label for="opcoes">Qual é a categoria da ACG?</label>
        <md-select v-model="opcaoSelecionada" name="opcaoSelecionada" id="opcaoSelecionada">
          <md-option v-for="opcao in opcoes" v-bind:key="opcao" :value="opcao">{{ opcao }}</md-option>
        </md-select>
      </md-field>
    </div>
    <md-field>
      <label>Dê uma descrição da atividade realizada</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
    <div class="carga-horaria">
      Carga horária:
      <div class="input">
        <md-field>
          <md-input v-model="horasAtividades"></md-input>
        </md-field>
      </div>
      <p>horas</p>
    </div>

    <div class="button-wrapper">
      <md-button class="md-dense md-raised md-primary button" @click="done()">Próximo</md-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "primeiroPasso",

  data() {
    return {
      name: "José",
      matricula: "",
      data: "",
      textarea: "",
      opcoes: [
        "Participação em eventos",
        "Atuação em núcleos temáticos",
        "Atividades de extensão",
        "Estágios extra-curriculares",
        "Atividades de iniciação científica e de pesquisa",
        "Publicação de trabalhos",
        "Participação em órgãos colegiados",
        "Monitoria",
        "Outras Atividades"
      ],
      opcaoSelecionada: "",
      horasAtividades: ""
    };
  },
  mounted() {
    this.data = moment().format("DD/MM/YYYY");
  },

  methods: {
    done() {
      this.$emit("fim-primeiro-passo", {
        opcaoSelecionada: this.opcaoSelecionada,
        descricao_atividade: this.textarea
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.carga-horaria {
  display: flex;
  font-size: 1.5em;
  align-items: center;
  .input {
    margin: 0 .3em;
    width: 50px;
    overflow: hidden;
  }
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
    font-weight: 400;
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
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
}
</style>