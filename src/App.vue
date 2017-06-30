<template>
  <div id="app" class="wh100">
      <div class="container h-100">
          <div class="row h-100">
              <div class="col-8 offset-4 d-flex align-items-center h-100">
                  <div class="text-right">
                      <h1>Encuentra a tu artista favorito</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quis!</p>
                      <button class="btn btn-primary d-inline-flex align-items-center"><icon name="spotify" scale="2" class="mr-3"></icon> Ingresa con Spotify</button>
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

    import Icon from 'vue-awesome/components/Icon.vue'

    export default {
        name: 'app'
    }

</script>

<style lang="sass">
    @import "stylesheets/main"
</style>
