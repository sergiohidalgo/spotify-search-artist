<template>
  <div id="app" class="wh100">
      <div class="container h-100">
          <div class="row h-100">
              <div class="col-8 offset-4 d-flex align-items-center h-100">
                  <div class="text-right">
                      <h1>Encuentra a tu artista favorito</h1>
                      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quis!</p>
                      <btn-login @click="clickButton()"></btn-login>
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
        name: 'app',
        methods : {
            showModalLoginSpotify : function () {
                console.log('saddsdadadsa')
            }
        }
    }

</script>

