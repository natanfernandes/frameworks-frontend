<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">
            {{ appTitle }}
        </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template> 

<script>
    export default {
        name: "App",
        data(){
            return {
            appTitle: 'About my name'
            }
        },
    };
</script>