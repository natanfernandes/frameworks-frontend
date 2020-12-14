<template>
    <v-app>
        <v-container class="container-img">
            <h1>{{ fromChild }}</h1>
            <Form :title="title" 
            :description="description"
            />
        </v-container>
    </v-app>
</template>

<script>
    import Form from './Form';

    export default {
        name: "FindName",
        props: ['title', 'description', 'fromChild'],
        components: {
            Form,
        }
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