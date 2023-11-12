<template>
    <a :href="pathDiploma" download>
        <button>DESCARGAR</button>
    </a>
</template>

<script>
export default {
    data(){
        return{
            id: ""
        }
    },
    computed: {
        pathDiploma(){
            return process.env.NODE_ENV === 'production'
            ? `assets/src/assets/${this.id}`
            : `assets/${this.id}`;
        }
    },
    created() {
        this.id = this.$route.params.id + '.pdf'
    }
}
</script>
