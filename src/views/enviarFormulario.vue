<template>
  <div>
    <div class="title">Enviar ACG</div>
    <div class="form">
      <div>Nome: {{ name }}</div>
      <div>Matrícula: {{ matricula }}</div>
      <div>{{ data }}</div>
      <div class="md-layout-item">
        <md-field>
          <label for="opcoes">Escolha uma Categoria...</label>
          <md-select v-model="opcaoSelecionada" name="opcaoSelecionada" id="opcaoSelecionada">            
            <md-option v-for="opcao in opcoes" v-bind:key="opcao" value="fight-club">{{ opcao }}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "enviarFormulario",

  data() {
    return {
      name: "",
      matricula: "",
      data: "",
      opcoes: ['Participação em eventos',
               'Atuação em núcleos temáticos',
               'Atividades de extensão',
               'Estágios extra-curriculares',
               'Atividades de iniciação científica e de pesquisa',
               'Publicação de trabalhos',
               'Participação em órgãos colegiados',
               'Monitoria',
               'Outras Atividades'],
      opcaoSelecionada: ''
    };
  }
};
</script>

<style lang="scss" scoped>
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
}
</style>