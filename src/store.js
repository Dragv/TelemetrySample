/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );

// Modules
import DataStore from '@/store/dataStore';

// Store with modules
const store = new Vuex.Store({
    modules: {
        DataStore,
    }
});

export default store;
