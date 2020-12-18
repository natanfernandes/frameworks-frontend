<template>
    <v-container class="container">
        <h1> {{ title }} </h1>
        <p> {{ description }} </p>
        <form>
            <v-row>
                <v-col>
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
                </v-col>
                <v-col>
                    <v-btn
                        color="primary"
                        dark
                        large
                    >
                    Buscar
                    </v-btn>
                </v-col>
            </v-row>
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
    .field {
       width: 100%;
    }
</style>