<template>
  <div class="badge" :class="status">
      <div class="name"> {{ name }} </div>
      <div class="status"> {{ statusText }} </div>
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
            statusText: "Em Análise",
        }
    },

    mounted() {
        this.setStatusText();
    },

    methods: {
        setStatusText() {
            console.log(this.status);
            switch(this.status) {
                case 'success':
                    this.statusText = "Aprovada";
                    break;
                case 'failure':
                    this.statusText = "Rejeitada";
                    break;
                case 'review':
                    this.statusText = "Em Análise";
                    break;
                default:
                    this.statusText = "Em Análise";
            }
        }
    },
}
</script>

<style lang="scss" scoped>
$background-success: #dff7f5;
$success: #69b4af;
$failure: #c36462;
$review: #e7bf74;
.badge {
    display: flex;
    font-family: 'Roboto';
    color: white;
    font-weight: 700;
    display: flex;
    margin: .5em;
    padding: 1em;
    width: 90%;
    background: white;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in;
    &:hover {
        box-shadow: 0 5px 10px rgba(154,160,185,.025), 0 15px 30px rgba(166,173,201,.2);
    }
    .name {
        text-align: left;
    }
}
.success {
    background-color: $success;
}

.failure {
    background-color: $failure;

}

.review {
    background-color: $review;
}

</style>