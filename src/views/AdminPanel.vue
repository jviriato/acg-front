<template>
  <div class="wrapper">
    <div class="hero">Painel Administrativo</div>
    <div class="stats">
      <div class="sub" v-for="(item, key, index) in stats" :key="index">
        <h3>
        {{key}}:  
        </h3>
        <h3>
         {{item}}h
        </h3>
      </div>
    </div>
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
      data: [],
      stats: {
        'Total': 0,
        'Atividades de extensão': 0,
        'Monitoria': 0,
        'Outras atividades': 0,
        'Estágios extra-curriculares': 0,
        'Atuação em núcleo temático': 0,
        'Atividades de iniciação científica': 0,
        'Participação em órgãos colegiados e diretórios acadêmicos': 0,
        'Publicação de trabalhos': 0,
        'Participação em eventos': 0,
      }
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
      data.forEach(e => {
        let aluno = {
          nome: e.aluno.nome,
          matricula: e.aluno.matricula,
          categoria: e.categoria.tipo,
          status: e.status,
          horas_requisitadas: e.horas_requisitadas,
          horas_efetivadas: e.horas_efetivadas
        };
        this.stats[e.categoria.tipo] += e.horas_efetivadas;
        this.stats['Total'] += e.horas_efetivadas;
        this.data.push(aluno);
      });
          // this.calcData();

    },

    // calcData() {
    //   if(this.data) {
    //     this.data.forEach(d => {
    //       this.stats[d.categoria] += d.horas_efetivadas;
    //       this.stats.total += d.horas_efetivadas;

    //       console.log(d.categoria, this.stats[d.categoria] += d.horas_efetivadas)
    //     })
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.stats {
  height: 30vh;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .sub {
    margin: 1em;
    display: flex;
    flex-direction: column;
  }
}
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