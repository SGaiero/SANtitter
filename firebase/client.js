import {initializeApp, getApps} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBE8yNcC6Mwo7Wg_y-4xhi2yqP9QsLGqHg",
  authDomain: "santitter-1e431.firebaseapp.com",
  databaseURL: "https://santitter-1e431-default-rtdb.firebaseio.com",
  projectId: "santitter-1e431",
  storageBucket: "santitter-1e431.appspot.com",
  messagingSenderId: "921891692721",
  appId: "1:921891692721:web:1c66f3f31210b7768c8290",
  measurementId: "G-11D6698MYP"
};

if(!getApps().length) {
  initializeApp(firebaseConfig)
}
