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

    async getHorasTotais() {
      try {
        const matricula = 200663849;
        const {data: response} = await this.$http.get(`/aluno/${matricula}`);
  
        if(response) {
          localStorage.user = JSON.stringify(response);
          return true;
        }

        return false;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    verificarSecretaria() {
      return this.user == 'secretaria' && this.password == '1542';
    },

    verificarColegiado() {
      return this.user == 'colegiado' && this.password == '1542';
    },
    
    signIn() {
      if (!this.isFormValid()) {
        return;
      }

      if (this.verificarSecretaria()) {
        localStorage.user = JSON.stringify({nome: 'secretaria'});
        setTimeout(() => {
          this.$router.push({name: "adminPanel"});
        }, 1000);
        return;
      }

      if (this.verificarColegiado()) {
        localStorage.user = JSON.stringify({nome: 'colegiado'});
        setTimeout(() => {
          this.$router.push({name: " colegiadoPanel"});
        }, 1000);
        return;
      }

      if(this.isFormValid() && this.getHorasTotais()) {
        setTimeout(() => {
          this.$router.push({name: "dashboard"});
        }, 1000);
      }
    },

    removeUserFromLocalStorage() {
      if (localStorage.user) {
        localStorage.removeItem("user");
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
