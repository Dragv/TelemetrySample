const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const cors = require('cors');
cors({origin: true});

// Pie Chart
exports.getWinRateByClasses = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('winRateByClasses').get();

  res.set('Access-Control-Allow-Origin', '*');
  // return cors(req, res, () => {
    console.log('getWinRateByClasses');
    res.status(200).json({currentScore: readResult});
  // });
});

// Line Chart
exports.damagePeformedByTime = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('damagePerformedByTime').get();
  console.log('damagePeformedByTime');
  res.set('Access-Control-Allow-Origin', '*');
  res.json({currentScore: readResult});
});

// Bar Chart
exports.mostUsedAbility = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('mostUsedAbilities').get();
  console.log('mostUsedAbility');
  res.set('Access-Control-Allow-Origin', '*');
  res.json({currentScore: readResult});
});
