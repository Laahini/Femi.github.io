
var firebaseConfig = {
    apiKey: "AIzaSyDhFvJ1YlK2k5TJee4R30ENbGw2mefU-xs",
    authDomain: "femi-8ac1c.firebaseapp.com",
    projectId: "femi-8ac1c",
    storageBucket: "femi-8ac1c.appspot.com",
    messagingSenderId: "596158044174",
    appId: "1:596158044174:web:427c908353dc573866445f",
    measurementId: "G-Z990EBF9HK"
};

firebase.initializeApp(firebaseConfig);

const auth =firebase.auth()

function signUp(){
  var email = document.getElementById("email2")
  var password = document.getElementById("password2")

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
  location.href = "home.html";
}

function signIn(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  location.href = "home.html";
}

auth.onAuthStateChanged(function(user){
  if(user){
    //is signed in
    var email=user.email;
    alert("Active User ")
  }else{
    alert("No Active User")
  }
});
