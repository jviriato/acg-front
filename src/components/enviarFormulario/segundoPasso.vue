<template>
  <div class="form padding">
    <div class="top">
      <p class="text">Olá, {{ name }}!</p>
      <p class="date">{{ data }}</p>
    </div>
    <p class="text sub">Para enviar sua ACG, responda algumas perguntas:</p>
    <div class="md-layout-item">
      <md-field>
        <label>Onde foi o local de atividade?</label>
        <md-input v-model="localAtividade"></md-input>
      </md-field>
    </div>
    <md-datepicker v-model="dataInicial">
      <label>Data inicial</label>
    </md-datepicker>
    <md-datepicker v-model="dataFinal">
      <label>Data final</label>
    </md-datepicker>

    <md-field>
      <label>Inserir Anexos</label>
      <md-file 
        @md-change="adicionaArquivoLista"
        multiple 
      />
    </md-field>
    <template v-for="(file, key) in files">
      <div class="row" :key="key">
        <div class="col-md-12">
          <a title="Remover" v-on:click="removeArquivo( key )">Remover</a>
          {{ file.name }}
        </div>
      </div>
    </template>

    <div class="button-wrapper">
      <md-button class="md-dense md-raised md-primary button" @click="done()">Próximo</md-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "segundoPasso",

  props: {
    name: String,
  },

  data() {
    return {
      data: "",
      localAtividade: "",
      dataInicial: null,
      dataFinal: null,
      files: [],
    };
  },
  mounted() {
    this.data = moment().format("DD/MM/YYYY");
  },

  methods: {
    done() {
      this.$emit("fim-segundo-passo", {
        localAtividade: this.localAtividade,
        dataInicial: this.dataInicial,
        dataFinal: this.dataFinal,
        files: this.files,
      });
    },
    adicionaArquivoLista(files) {
      for(let i = 0; i < files.length; i++ ) {
        this.files.push(files[i]);
      }    
    },
    removeArquivo(posicao) {
      this.files.splice(posicao, 1);
    },
  }
};
</script>

<style lang="scss" scoped>
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