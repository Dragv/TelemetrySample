import * as firebase from "firebase/app";
import Axios from 'axios';

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
        // this.functions = firebase.functions();
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
            getWinRateByClasses: Axios.get('http://localhost:5001/telemetry-tes/us-central1/getWinRateByClasses'),
            damagePeformedByTime: Axios.get('http://localhost:5001/telemetry-tes/us-central1/damagePeformedByTime'),
            mostUsedAbility: Axios.get('http://localhost:5001/telemetry-tes/us-central1/mostUsedAbility')
        }
    }
}

export default new Connection();
