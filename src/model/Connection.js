import * as firebase from "firebase/app";
import Axios from 'axios';

import "firebase/auth";
import "firebase/firestore";

const APP_NAME = 'telemetry-tes';
const FUNCTIONS_PORT = 5001;
const REGION = 'us-central1';

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

    // Function to retrieve the data through axios, only works when emulating and having the 
    // functions servies in port 5001 and the project name being telemetry-tes
    refreshData() {
        return {
            getWinRateByClasses: Axios.get(`http://localhost:${FUNCTIONS_PORT}/${APP_NAME}/${REGION}/getWinRateByClasses`),
            damagePeformedByTime: Axios.get(`http://localhost:${FUNCTIONS_PORT}/${APP_NAME}/${REGION}/damagePeformedByTime`),
            mostUsedAbility: Axios.get(`http://localhost:${FUNCTIONS_PORT}/${APP_NAME}/${REGION}/mostUsedAbility`)
        }
    }
}

export default new Connection();
