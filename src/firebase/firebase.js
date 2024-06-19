import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

console.log(config);

firebase.initializeApp(config);

const database = firebase.database();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, GoogleAuthProvider, database as default };

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.val());
// });

// database.ref("expenses").push({
//   description: "Dec Rent",
//   note: "Rent of the Dec Month",
//   amount: 600000,
//   createdAt: 1000
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });
