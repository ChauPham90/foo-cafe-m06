var firebaseConfig = {
    apiKey: "AIzaSyDAvxkPbYmqzUpWT-Mvt-rNfs_VhZxI0S0",
    authDomain: "chau-pham-portfolio.firebaseapp.com",
    databaseURL: "https://chau-pham-portfolio.firebaseio.com",
    projectId: "chau-pham-portfolio",
    storageBucket: "chau-pham-portfolio.appspot.com",
    messagingSenderId: "1027046703938",
    appId: "1:1027046703938:web:e05375e935da3a0156bedb",
    measurementId: "G-K1Z7PJFLXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const countriesRef = db.collection("chauProperties");
countriesRef.get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
    })
    .catch((error) => {
        console.log("Error getting countries:", error);
    });