<template>
  <div>
      <div class="title">
        Enviar ACG
      </div>
      <div class="form">
          <div>
            Nome: {{ name }}
          </div>
          <div>
              Matrícula: {{ matricula }}
          </div>
          <dir>
              {{ data }}
          </dir>
      </div>
  </div>
</template>

<script>
export default {
    name: "enviarFormulario",

    data() {
        return {
            name: '',
            matricula: '',
            data: '',
        }
    }
}
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