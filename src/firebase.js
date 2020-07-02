import firebase from "firebase/app";

import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig: object = {
  apiKey: "AIzaSyBbnhKWNReUhU9K-EpCTJh3Yr8Yt00s7bw",
  authDomain: "yalantistest-576f1.firebaseapp.com",
  databaseURL: "https://yalantistest-576f1.firebaseio.com",
  projectId: "yalantistest-576f1",
  storageBucket: "yalantistest-576f1.appspot.com",
  messagingSenderId: "688095118980",
  appId: "1:688095118980:web:cb3bd510e4d075d488e4d1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
