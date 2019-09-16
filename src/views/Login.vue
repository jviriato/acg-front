<template>
  <div class="container-fluid">
    <div class="container-login">
      <h1>Portal de ACGs</h1>
      <h2>Utilize seu login do NCC para entrar no Portal!</h2>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(0deg, rgb(0, 82, 204) 20%, rgb(38, 132, 255) 80%) !important;
  // background: #5433ff;
  // background: -webkit-linear-gradient(to right, #5433ff, #20bdff, #a5fecb);
  // background: linear-gradient(to right, #5433ff, #20bdff, #a5fecb);
}
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 480px;
  text-align: left;
  border-radius: 8px;
  background-color: $background-gray;
  padding: 1em;
  h2 {
    font-weight: 400;
  }
  box-shadow: 0 12px 18px 2px rgba(34,0,51,.04),0 6px 22px 4px rgba(7,48,114,.12),0 6px 10px -4px rgba(14,13,26,.12);
}

@media only screen and (max-width : 440px) {
  .container-login {
    width: 80vw;
  }
}
</style>
