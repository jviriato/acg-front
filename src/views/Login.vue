<template>
  <div class="container-fluid">
    <div class="hero">
      <h1>
        Portal de ACGs
      </h1>
      <h2>
        Utilize seu login do NCC para entrar no Portal!
      </h2>
      </div>

    <div class="container-login">
      <LoginForm />
    </div>
    <!-- <div class="bottom">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L40,160C80,192,160,256,240,261.3C320,267,400,213,480,170.7C560,128,640,96,720,80C800,64,880,64,960,64C1040,64,1120,64,1200,80C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div> -->
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
  // background: #5433ff;
  // background: -webkit-linear-gradient(to right, #5433ff, #20bdff, #a5fecb);
  // background: linear-gradient(to right, #5433ff, #20bdff, #a5fecb);
}

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-content: center;
    align-items: flex-start;
    height: 40vh;
    width: 80vw;
    color: #2d2d2d;
    font-family: 'Roboto';
    font-weight: 800;
    font-size: 3em;
    h1 {
      text-align: left;
      font-size: .7em;
    }
    h2 {
      text-align: left;
      font-size: .4em;
      font-weight: 400;
    }
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
