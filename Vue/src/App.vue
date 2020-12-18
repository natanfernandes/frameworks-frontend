<template>
  <v-app>
    <v-main>
      <Navbar :appTitle="appTitle"/>
      <FeatureImage :title="title" :description="description"/>
      <Search />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import FeatureImage from './components/FeatureImage';
import Search from './components/Search';

export default {
  name: 'App',

  components: {
    Navbar,
    FeatureImage,
    Search,
  },

  data: () => ({
    appTitle: 'Home',
    title: 'About my name',
    description: 'Informe seu nome e encontre as coisas mais legais sobre ele diretamente do site do IBGE'
  }),
};
</script>

<style>
    body {
      background-color: #f5f5f5;
      color: #282828;
    }
</style>