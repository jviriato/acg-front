<template>
  <div>
    <div class="title">Enviar ACG</div>
    <div class="align">
      <div class="wrapper" v-if="step == 1">
        <primeiro-passo :name="cName" v-on:fim-primeiro-passo="checkFirstStep" />
      </div>
      <div class="wrapper" v-if="step == 2">
        <segundo-passo :name="cName" v-on:fim-segundo-passo="checkSecondStep"/>
      </div>
      <div class="wrapper fim" v-if="step == 3">
        <icon-success />
        <h1>Parabéns! Sua ACG foi enviada com sucesso!</h1>
      </div>
      <div class="wrapper fim" v-if="step == 4">
        <icon-success />
        <h1>Erro! Ocorreu um problema ao enviar sua acg!</h1>
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
      data: "",
      form: {
        descricao: "",
        tipo: "",
        horas: "",
        local: "",
        data_inicio: "",
        data_final: "",
        files: [],
      },
      user: {},
    };
  },

  mounted() {
    this.getUser();
  },

  computed: {
    cName() {
      if (this.user && this.user.nome) {
        return this.user.nome;
      }
      return "";
    }
  },

  methods: {
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },

    nextStep() {
      const TOTAL_STEPS = 3;
      this.step += 1 % TOTAL_STEPS;
    },

    checkFirstStep(data) {
      if(!data || !data.descricao_atividade || !data.opcaoSelecionada || !data.horasAtividades) {
        alert("preencha todos os campos");
        return;
      }

      this.form.descricao = data.descricao_atividade;
      this.form.tipo = data.opcaoSelecionada;
      this.form.horas = data.horasAtividades;
      this.nextStep();
    },

    checkSecondStep(data) {
      if(!data || !data.localAtividade || !data.dataInicial || !data.dataFinal) {
        alert("preencha todos os campos");
        return;
      }

      this.form.local = data.localAtividade;
      this.form.data_inicio = data.dataInicial;
      this.form.data_final = data.dataFinal;
      this.form.files = data.files;
      this.enviarAcg();
    },

    async enviarAcg() {
      const data_inicial = moment(this.form.data_inicio, "YYYY-MM-DD").format("YYYY-MM-DD");
      const data_final = moment(this.form.data_final, "YYYY-MM-DD").format("YYYY-MM-DD");

      const formData = new FormData();
      formData.append("id_aluno", this.user.id || null);
      formData.append("id_categoria", 2 || null);
      formData.append("horas_requisitadas", this.form.horas || null);
      formData.append("local_atividade", this.form.local || null);
      formData.append("data_inicial", data_inicial || null);
      formData.append("data_final", data_final || null);
      formData.append("descricao", this.form.descricao || null);


      for (let i = 0; i < this.form.files.length; i++) {
        formData.append("files[]", this.form.files[i]);
      }

      try {
        await this.$http.post("/acg", formData);


        this.nextStep();
      } catch (error) {
        console.error(error);
        this.step = 4;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.align {
  text-align: center;
}
.fim {
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 1em;
  line-height: 20px;
  align-items: center;
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