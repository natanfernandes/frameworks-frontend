<template>
    <v-container style="margin-left: 1em; margin-top: 3em;">
            <h1> {{ title }} </h1>
            <p> {{ description }} </p>
            <form>
                <v-text-field 
                    class="field"
                    autofocus
                >
                </v-text-field>

                <v-btn
                    color="primary"
                    dark
                    large
                >
                Buscar
                </v-btn>
            </form>
        </v-container>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
            title: 'About my name',
            description: 'Informe seu nome e encontre as coisas mais legais sobre ele diretamente do site do IBGE'
            }
        },
    };
</script>

<style>
    h1 {
        font-size: 4em;
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    p {
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    .field {
       margin-top: 1em !important;
       width: 50em;
    }
</style>