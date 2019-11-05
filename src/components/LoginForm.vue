<template>
  <div class="form-wrapper">
    <md-field>
      <label>Usuário</label>
      <md-input v-validate="'required'" v-model="user" name="user" type="text"></md-input>
    </md-field>
      <span class="error">{{ errors.first("user") }}</span>
    
    <md-field>
      <label>Senha</label>
      <md-input  v-validate="'required'" v-model="password" name="password" type="password"></md-input>
    </md-field>
    <span class="error">{{ errors.first("password") }}</span>
    <div class="button-wrapper">
      <md-button class="md-dense md-raised md-primary button" @click="signIn()">Entrar</md-button>
    </div>
  </div>
</template>

<script>
import VeeValidate from "vee-validate";

export default {
  name: "LoginForm",

  components: {
    VeeValidate
  },
  
  data() {
    return {
      user: "",
      password: ""
    };
  },

  mounted() {
    this.removeUserFromLocalStorage();
  },

  methods: {
    isFormValid () {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid)
    },

    async getUsuario(resultado) {
      try {
        console.log(resultado);
        
        if (resultado.matricula == '') {
          localStorage.usuario = JSON.stringify(resultado);
          this.redirecionarUsuario(resultado);
          return;
        }

        const {data: response} = await this.$http.get(`/aluno/${resultado.matricula}`);
  
        if(response) { 
          localStorage.usuario = JSON.stringify(response);
          this.redirecionarUsuario(resultado);
        }
      } catch (error) {
        console.error(error);
      }
    },

    redirecionarUsuario(response) {
      if (response.nome == 'secretaria') {
        return this.$router.push({name: "adminPanel"});
      }

      if (response.nome == 'colegiado') {
        return this.$router.push({name: "colegiadoPanel"});
      }

      return this.$router.push({name: "dashboard"});
    },
    
    async signIn() {
      if (!this.isFormValid()) {
        return;
      }

      try {
        const body = {
          'nome': this.user,
          'senha': this.password,
        };

        const { data: response } = await this.$http.post('/login', body);

        this.getUsuario(response);
      } catch (error) {
        console.error(error);
        return this.$swal('Atenção!', 'Usuário ou senha inválidos.', 'error');
      }
    },

    removeUserFromLocalStorage() {
      if (localStorage.usuario) {
        localStorage.removeItem("usuario");
      }
    }

  }
};
</script>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: flex-end;
  background: transparent;
}
.error {
  text-align: left;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;

  .button {
    border-radius: 22px !important;
    background: $primary !important;
    color: white !important;
    font-family: "Roboto";
    font-weight: bold;
  }
}
</style>
