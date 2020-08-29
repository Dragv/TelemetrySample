'use strict'

import Connection from '@/model/Connection';
import Data from '@/model/Data';
// import Axios from 'axios';

let mostUsedAbilitiesData = [];
let damagePerformedByTimeData = [];
let winRateByClassesData = [];

setInterval(() => {
    const {
        getWinRateByClasses,
        damagePeformedByTime,
        mostUsedAbility
    } = Connection.refreshData();

    getWinRateByClasses().then(result => winRateByClassesData = result).catch(error => console.log(error));
    damagePeformedByTime().then(result => damagePerformedByTimeData = result).catch(error => console.log(error));
    mostUsedAbility().then(result => mostUsedAbilitiesData = result).catch(error => console.log(error));
}, 5000);

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: { 
        mostUsedAbilitiesData,
        damagePerformedByTimeData,
        winRateByClassesData
     },

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
        mostUsedAbilitiesData: state => state.mostUsedAbilitiesData,
        damagePerformedByTimeData: state => state.damagePerformedByTimeData,
        winRateByClassesData: state => state.winRateByClassesData
    },
}
