'use strict'

import Connection from '@/model/Connection';
import Data from '@/model/Data';

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: { },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        sendData({ commit }, params ) {
            commit('SEND_DATA', params);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SEND_DATA: ( _, params ) => { Connection.post(new Data(params)) },
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        getData: () => Connection.get('Data'),
    },
}
