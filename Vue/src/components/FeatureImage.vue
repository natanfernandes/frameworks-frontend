<template>
    <v-app>
        <v-container class="container-img">
            <v-container class="container-text">
                <h1 class="title-decor"> {{ title }} </h1>
                <p class="par-decor"> {{ description }} </p>
            </v-container>
        </v-container>
    </v-app>
</template>

<script>

    export default {
        name: "FeatureImage",
        props: ['title', 'description', 'fromChild']
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

    .container-text {
        text-align: center;
        margin-top: 8em !important;
    }

    .title-decor {
        font-size: 4em;
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    .par-decor {
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
</style>