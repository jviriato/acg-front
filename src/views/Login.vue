<template>
  <div class="container-fluid">
    <div class="hero">Portal de ACGs</div>
    <div class="container-login">
      <LoginForm />
    </div>
    <div class="bottom">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L40,160C80,192,160,256,240,261.3C320,267,400,213,480,170.7C560,128,640,96,720,80C800,64,880,64,960,64C1040,64,1120,64,1200,80C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
  }

};
</script>

<style lang="scss" scoped>

.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.hero {
    display: flex;
    justify-content: left;
    align-content: center;
    align-items: center;
    height: 40vh;
    width: 80vw;
    color: #2d2d2d;
    font-family: 'Roboto';
    font-weight: 800;
    font-size: 3em;
    // background: #5c258d;
    // background: -webkit-linear-gradient(to right, #5c258d, #4389a2);
    // background: linear-gradient(to right, #5c258d, #4389a2);
}

.container-login {
  margin-top: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
}

.bottom {
  .wave {
    // height: 15vh;
  }
  position: fixed;
  bottom: 0;
}

</style>
