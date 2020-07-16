// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLtRjdoIldrjrw3bpq5dGizyBJJE9gqOg",
    authDomain: "fooduko-52514.firebaseapp.com",
    databaseURL: "https://fooduko-52514.firebaseio.com",
    projectId: "fooduko-52514",
    storageBucket: "fooduko-52514.appspot.com",
    messagingSenderId: "1022530810768",
    appId: "1:1022530810768:web:6ac6f712fa9a080996f915",
    measurementId: "G-1VN6L7EEKN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    const signUp = auth.createUserWithEmailAndPassword(email.value, password.value);
    signUp.catch(e => alert(e.message));
    alert("Sign Up Successful ! " + email.value);
}

function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    const signUp = auth.signInWithEmailAndPassword(email.value, password.value);
    signUp.catch(e => alert(e.message));
    // alert("Login Successful ! \n with Email id " + email.value);
}

function signOut() {
    auth.signOut();
    alert("Signed out Successfully !");
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        // If user is already logged in
        var email = user.email;
        alert("Logged In User " + email);
    } else {
        // If we have no user
        alert("You haven't Logged in yet !");
    }
});