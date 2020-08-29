import * as firebase from "firebase/app";
require('firebase/functions');

import "firebase/auth";
import "firebase/firestore";

class Connection {
    constructor() {
        const config = {
            apiKey: "AIzaSyD1wlWn9dXliorAYKcBiwDDCxCWPjngziw",
            authDomain: "telemetry-tes.firebaseapp.com",
            databaseURL: "https://telemetry-tes.firebaseio.com",
            projectId: "telemetry-tes",
            storageBucket: "telemetry-tes.appspot.com",
            messagingSenderId: "371298097752",
            appId: "1:371298097752:web:58669637cedc6977a9482d",
            measurementId: "G-GW3VRQ5P3X"
        };

        firebase.initializeApp(config);

        this.db = firebase.firestore();
        this.functions = firebase.functions();
    }

    async get(modelToFind = '') {
        const snapshot = await this.db.collection(modelToFind).get();

        const data = [];

        snapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    }

    async post(object = {}) {
        const docRef = this.db.collection(object.constructor.name).doc();

        await docRef.set({ ...object });
    }

    refreshData() {
        return {
            getWinRateByClasses: firebase.functions().httpsCallable('getWinRateByClasses'),
            damagePeformedByTime: firebase.functions().httpsCallable('damagePeformedByTime'),
            mostUsedAbility: firebase.functions().httpsCallable('mostUsedAbility')
        }
    }
}

export default new Connection();
