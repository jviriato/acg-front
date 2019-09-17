<template>
  <div class="wrapper-bg">
    <div class="hero">
      <div class="hero-wrapper">
        <h1 class="title">Status das ACGs</h1>
      </div>
    </div>
    <div class="badges-wrapper">
      <div class="badges">
        <template v-if="!loading">
            <template v-for="acg in acgs">
              <status-badge v-bind:key="acg.id" :name="acg.descricao" :status="acg.status" />
            </template>
        </template>
        <template v-else>
          <p>Carregando...</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import StatusBadge from "@/components/commons/StatusBadge.vue";

export default {
  name: "Status",
  components: {
    StatusBadge
  },

  data() {
    return {
      user: {},
      acgs: [],
      loading: false,
    }
  },

  mounted() {
    this.getUserFromLocalStorage();
    this.getHorasAcgs();
  },

  methods: {
    getUserFromLocalStorage() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },

    async getHorasAcgs() {
      try {
        this.loading = true;
        const matricula = this.user.matricula;
        const {data: response} = await this.$http.get(`/acgs-aluno/${matricula}`);
  
        if(response) {
          this.acgs = response;
        }
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
        this.$router.push({name: "login"});
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
  color: white;
  background-color: rgb(0, 82, 204);
  .hero-wrapper {
    width: 60vw;
  }
}
.title {
  line-height: 1;
}
.wrapper-bg {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.badges {
  display: flex;
  padding-top: 2em;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 80vh;
}

.badges-wrapper {
  background-color: white;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  margin-top: -40px;
}
@media (max-width: 979px) {
  .badges {
    width: 100vw;
  }
}
// @media (min-width: 980px) {
//     .wrapper-bg {
//         width: 100vw;
//         display: flex;
//         justify-content: center;
//     }
// }
</style>