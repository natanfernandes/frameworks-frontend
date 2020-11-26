<template>
  <v-app>
    <v-main>
      <Navbar/>
      <FindName/>
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
  }),
};
</script>
