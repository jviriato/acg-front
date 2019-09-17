<template>
  <div class="wrapper">
    <div class="hero">Painel Administrativo</div>
    <div class="table-wrapper">
        <table style="width:100%">
        <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Horas Requisitadas</th>
            <th>Horas Efetivadas</th>
        </tr>
        <tr v-for="(d, index) in data" :key="index">
            <td>{{d.nome}}</td>
            <td>{{d.matricula}}</td>
            <td>{{d.categoria}}</td>
            <td>{{d.status}}</td>
            <td>{{d.horas_requisitadas}}</td>
            <td>{{d.horas_efetivadas}}</td>
        </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminPanel",
  data() {
    return {
      data: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      let request = await this.$http.get("/acgs").then(d => (request = d));
      const data = request.data;
      let dados = [];
      console.log(data);
      data.forEach(e => {
        let aluno = {
          nome: e.aluno.nome,
          matricula: e.aluno.matricula,
          categoria: e.categoria.tipo,
          status: e.status,
          horas_requisitadas: e.horas_requisitadas,
          horas_efetivadas: e.horas_efetivadas
        };
        this.data.push(aluno);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.hero {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 20vh;
  width: 100vw; 
  background: $blue-gradient;
  color: white;
  font-weight: bold;
  font-size: 2em;
}
.table-wrapper {
    margin-top: -2em;
    width: 80%;
    background: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
th {
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 20px;
  text-align: left;
}

tr {
    margin: 1em;
    text-align: left;
    font-size: 18px;

}

 tr:nth-child(even) {
  background-color: $background-gray;
}
</style>