<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">  
        <v-navigation-drawer
          v-model="drawer"
          app
          clipped
        >
          <v-list dense>
            <v-list-item link v-for="(item, index) in navMenu" :key="index" :to="{ name: item.section }">
              <v-list-item-title>
                {{ item.section }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
          app
          clipped-left
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Telemetry app</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <router-view />
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>

  import Controller from '../lib/controller'


    class AppController extends Controller {

    constructor( name, subComponentList = []) {
      super( name, subComponentList );
      this.vm = {
        drawer: null,
        navMenu:[
          { section: "Home" },
          { section: "Admin" },
        ]
      }
    }
  }

  export default new AppController('pgApp');
</script>
