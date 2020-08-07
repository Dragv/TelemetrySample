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
              <v-list-item link>
                <v-list-item-title avatar>
                  Home
                </v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title avatar>
                  Admin
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
          <v-container
            class="fill-height"
            fluid
          >
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
        drawer: null
      }
    }
  }

  export default new AppController('pgApp');
</script>
