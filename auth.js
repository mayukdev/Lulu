// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB9w7bkg53wU30uEH71PoAgQZHY-eZtbk",
  authDomain: "electra-prime.firebaseapp.com",
  projectId: "electra-prime",
  storageBucket: "electra-prime.appspot.com",
  messagingSenderId: "398159720259",
  appId: "1:398159720259:web:aeb608912c4df8091a09f6",
  measurementId: "G-85D79V2P5P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup Function
document.getElementById("signup-btn").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account Created Successfully!");
            console.log("User:", userCredential.user);
            window.location.href = "music.html"; // Redirect to Music Page
        })
        .catch((error) => {
            alert(error.message);
            console.error("Error:", error);
        });
});

// Login Function
document.getElementById("login-btn").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            console.log("User:", userCredential.user);
            window.location.href = "music.html"; // Redirect to Music Page
        })
        .catch((error) => {
            alert(error.message);
            console.error("Error:", error);
        });
});

// Logout Function
document.getElementById("logout-btn")?.addEventListener("click", function () {
    auth.signOut().then(() => {
        alert("Logged Out Successfully!");
        window.location.href = "login.html"; // Redirect to Login Page
    }).catch((error) => {
        console.error("Error:", error);
    });
});

// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is logged in:", user.email);
    } else {
        console.log("No user is logged in.");
    }
});
