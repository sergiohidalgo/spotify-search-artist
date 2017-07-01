<template>
    <button
            class="btn btn-primary d-inline-flex align-items-center"
            @click="clickButton">
        <icon name="spotify" scale="2" class="mr-3"></icon>
        Ingresa con Spotify
    </button>
</template>

<script>
    export default {
        name: 'btn-login',
        methods : {
            clickButton() {
                let client_id = process.env.CLIENT_ID;
                let redirect_uri = process.env.REDIRECT_URI;
                location.href = `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;
            }
        }
    }
</script>