const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "vozesdoalem-13911.firebaseapp.com",
  projectId: "vozesdoalem-13911",
  storageBucket: "vozesdoalem-13911.firebasestorage.app",
  messagingSenderId: "59809444265",
  appId: "1:59809444265:web:497389a6295b2169a054b8"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();