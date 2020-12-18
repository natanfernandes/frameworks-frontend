<template>
    <v-container style="margin-left: 1em; margin-top: 3em;">
            <h1> {{ title }} </h1>
            <p> {{ description }} </p>
            <form>
                <v-text-field 
                    class="field"
                    maxlength="25"
                    outlined
                    autofocus
                    :counter="30"
                    :rules="nameRules"
                    required
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
        name: "Form",
        props: ['title', 'description'],
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Nome é obrigatório',
                v => (v && v.length <= 30) || 'Nome deve conter menos que 15 caracteres.',
                v => (v && v.length >= 3) || 'Nome deve conter 3 ou mais caracteres.',
            ],
        }),
        methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
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