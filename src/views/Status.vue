<template>
  <div class="wrapper-bg">
    <div class="hero">
      <div class="hero-wrapper">
        <h1 class="title">Status das ACGs</h1>
      </div>
    </div>
    <div class="badges-wrapper">
      <div class="badges">
        <status-badge name="V Semana Acadêmica da Informática" status="success" />
        <status-badge name="III Game JAM" status="review" />
        <status-badge name="IV Game JAM" status="failure" />
        <status-badge name="Copa do Mundo 2014" status="success" />
        <status-badge name="XXI Jogos Olímpicos" status="review" />
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
  }
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
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