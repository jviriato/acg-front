<template>
  <div class="form-wrapper">
    <md-field>
      <label>Usuário</label>
      <md-input v-validate="'required'" v-model="user" name="user" type="text"></md-input>
    </md-field>
      <span class="error">{{ errors.first('user') }}</span>
    
    <md-field>
      <label>Senha</label>
      <md-input  v-validate="'required'" v-model="password" name="password" type="password"></md-input>
    </md-field>
    <span class="error">{{ errors.first('password') }}</span>

    <md-button class="md-dense md-raised md-primary button" @click="signIn()">Entrar</md-button>
  </div>
</template>

<script>
import VeeValidate from 'vee-validate';

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

  methods: {
    isFormValid () {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid)
    },
    
    signIn() {
      if(this.isFormValid()) {
        console.log('Estou logando. O user é ' + this.user + ' e a senha é: ' + this.password);
      }
    }
  },
};
</script>

<style scoped lang="scss">
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
    font-family: 'Roboto';
    font-weight: bold;
    
  }
}
</style>
