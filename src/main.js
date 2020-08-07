'use strict';

import Vue from 'vue'

import store from '@/store'
import router from '@/router'

//This is were we register every components that is instantiated in this Main Root Component.
import App from '@/App.vue'

import vuetify from './plugins/vuetify';

// Main entry point of the application
document.addEventListener('DOMContentLoaded', () => {

    const app = new Vue({
        router,
        store,
        components: { App },
        vuetify,
        render: h => h( App )
    });
    app.$mount('#app');
});
