<template>
  <v-container class="container-form">
    <Form :title="this.title" :description="this.description"/>
  </v-container>
</template>

<script>
import Form from './Form';

export default {
  name: 'Search',

  components: {
    Form,
  },

  data: () => ({
    title: 'O que o IBGE diz sobre seu nome?',
    description: 'Digite-o e descubra.'
  }),
};
</script>

<style>
    .container-form {
        max-width: unset !important;
        height: 30em;
        margin: 2em !important;
    }
</style>
