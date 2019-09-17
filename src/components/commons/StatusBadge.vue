  <template>
    <div class="badge" :class="status">
      <div class="name">{{ name }}</div>
      <div class="status">{{ statusText }}</div>
    </div>
  </template>

<script>
export default {
  name: "StatusBadge",

  props: {
    name: String,
    status: String,
  },

  data() {
    return {
      statusText: "Pendente",
    }
  },

  mounted() {
    this.setStatusText();
  },

  methods: {
    setStatusText() {
      this.statusText = this.status;
    }
  },
}
</script>

  <style lang="scss" scoped>
  $background-Aprovada: #dff7f5;
  $Aprovada: #69b4af;
  $Reprovada: #c36462;
  $Pendente: #e7bf74;
  .badge {
    display: flex;
    font-family: "Roboto";
    color: white;
    font-weight: 700;
    display: flex;
    margin: 0.5em;
    padding: 1em;
    width: 90%;
    background: white;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in;
    &:hover {
      box-shadow: 0 5px 10px rgba(154, 160, 185, 0.025),
        0 15px 30px rgba(166, 173, 201, 0.2);
    }
    .name {
      text-align: left;
    }
  }
  .Aprovada {
    background-color: $Aprovada;
  }

  .Reprovada {
    background-color: $Reprovada;
  }

  .Pendente {
    background-color: $Pendente;
  }
  </style>