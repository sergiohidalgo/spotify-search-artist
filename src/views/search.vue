<template>
    <div id="app" class="wh100">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 d-flex align-items-center h-100">
                    <div class="w-100">
                        <h1 class="mb-5">Buscar artista o grupo:</h1>
                        <input class="form-control w-50 m-auto" v-model="artist" placeholder="Ej: Queen"/>
                    </div>

                </div>
            </div>

        </div>

        <footer class="p-4">
            <small>Proyecto sin fines de lucro, demo para Yapo &copy; 2017</small>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'search',
        created(){
           this.token = this.$route.query.code
        },
        data(){
           return {
               token : '',
               artist : ''
           }
        },
        methods : {
            searchArtistInApi(val) {
                console.log(val)
            }
        },
        watch: {
            artist(val){
                this.searchArtistInApi(val)
            }
        }
    }
</script>

<style lang="sass">
    @import "../stylesheets/main"
</style>