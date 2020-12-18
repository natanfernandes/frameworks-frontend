<template>
  <Form :title="this.title" :description="this.description"/>
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
