<template>
  <v-app>
    <v-main>
      <Navbar :appTitle="appTitle"/>
      <FindName :title="title" :description="description"/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import FindName from './components/FindName';

export default {
  name: 'App',

  components: {
    Navbar,
    FindName,
  },

  data: () => ({
    appTitle: 'About my name',
    title: 'About my name',
    description: 'Informe seu nome e encontre as coisas mais legais sobre ele diretamente do site do IBGE'
  }),
};
</script>
