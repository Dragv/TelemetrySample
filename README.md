# Telemetry test app

Vue test app for telemetry data analisis using Firebase cloud functions and firestore.

## Project setup
To install the project, use any node package manager to install
```
yarn install
```

### Firebase CLI
In order for the app to run, we require the Firebase CLI, make sure to install it and initialise the emulators for this project.

Once create a few modifications to the code will be needed.
In the file found in the path `src/model/Connection.js` change the functions request variables to accomodate to the testing project:
```javascript
const APP_NAME = 'telemetry-tes'; // The test app name
const FUNCTIONS_PORT = 5001;      // The test app cloud functions service emulator port
const REGION = 'us-central1';     // The test app region
```

To initialize the data for the application with dummy data, request a cloud function cloud with the following structure:
```
http://127.0.0.1:FUNCTIONS_PORT/APP_NAME/REGION/populateStore
```
You can perform this through the browser, it requieres no query parameters.

### Compiles and hot-reloads for development
```
yarn serve
```

## Further development

Many improvements can be added to the project, both for coding standards (eliminate coding repetition), and execution since the method of updating is through polling.
- If mainting the cloud function aspect of the project, it would be better to work with the Pub/Sub system provided by Google.
- Moving the application to an enviroment in which a backend API and a relational database, hooks can be added to the update or creation of new entries to notify the front end app to update the necessary data, websockets could also be implemented to achieve a realtime data analisis.
