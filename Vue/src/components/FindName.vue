<template>
    <v-app>
        <v-container class="container-img">
            <Form/>
        </v-container>
    </v-app>
</template>

<script>
    import Form from './Form';

    export default {
        name: "App",
        components: {
            Form,
        }, 
        data(){
            return {
            }
        },
    };
</script>

<style>
    .container-img {
        max-width: unset !important;
        height: 30em;
        margin: 0 !important;
        background-image: url('../book-2592729_1920.jpg');
        background-position: center;  
    }
</style>