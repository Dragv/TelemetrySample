const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const cors = require('cors');
cors({origin: true});

// TODO: Abstract the following three methods by passing the desired collection through query params
// Pie Chart
exports.getWinRateByClasses = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('winRateByClasses').get();
  const data = [];

  readResult.forEach((doc) => {
      data.push(doc.data());
  });
  
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.status(200).json({currentScore: data});
});

// Line Chart
exports.damagePeformedByTime = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('damagePerformedByTime').get();
  const data = [];

  readResult.forEach((doc) => {
    data.push(doc.data());
  });

  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.status(200).json({currentScore: data});
});

// Bar Chart
exports.mostUsedAbility = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('mostUsedAbilities').get();
  const data = [];

  readResult.forEach((doc) => {
    data.push(doc.data());
  });

  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.status(200).json({currentScore: data});
});

// Function to populate the firestore with test data
// This could be done using the importing and exporting with the firebase CLI
exports.populateStore = functions.https.onRequest(async (req, res) => {
  const winRateByClassesDocRef = admin.firestore().collection('winRateByClasses');
  const damagePerformedByTimeDocRef = admin.firestore().collection('damagePerformedByTime');
  const mostUsedAbilitiesDocRef = admin.firestore().collection('mostUsedAbilities');

  await winRateByClassesDocRef.doc('class1').set({ value: [ 'class1', 0.31] });
  await winRateByClassesDocRef.doc('class2').set({ value: [ 'class2', 0.29] });
  await winRateByClassesDocRef.doc('class3').set({ value: [ 'class3', 0.50] });

  console.log('winRateByClassesDocRef');

  await damagePerformedByTimeDocRef.doc('0:30').set({ value: [ '0:30', 100 ] });
  await damagePerformedByTimeDocRef.doc('1:00').set({ value: [ '1:00', 120 ] });
  await damagePerformedByTimeDocRef.doc('1:30').set({ value: [ '1:30', 210 ] });
  await damagePerformedByTimeDocRef.doc('2:00').set({ value: [ '2:00', 300 ] });

  console.log('damagePerformedByTimeDocRef');

  await mostUsedAbilitiesDocRef.doc('ability1').set({ value: [ 'ability1', 100 ] });
  await mostUsedAbilitiesDocRef.doc('ability2').set({ value: [ 'ability2', 120 ] });
  await mostUsedAbilitiesDocRef.doc('ability3').set({ value: [ 'ability3', 210 ] });
  await mostUsedAbilitiesDocRef.doc('ability4').set({ value: [ 'ability4', 300 ] });

  console.log('mostUsedAbilitiesDocRef');

  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.status(200).json({currentScore: 'good'});
});
