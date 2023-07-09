import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js'; 
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyANpqYZQLwgxqzditbvoj5U8gxZ6ZGXSqQ",
    authDomain: "letmehack-v3.firebaseapp.com",
    projectId: "letmehack-v3",
    storageBucket: "letmehack-v3.appspot.com",
    messagingSenderId: "481243386525",
    appId: "1:481243386525:web:856bdce3eacfa8ef297a74",
    measurementId: "G-JXKEQ3DGNL"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore(app);

  // Function to submit the form data to Firestores
 async function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
  // Get form values
  var email = document.getElementById('email').value;
  var university = document.getElementById('university').value;
  var teamname = document.getElementById('teamname').value;
  var teamlead = document.getElementById('teamlead').value;
  var telephone = document.getElementById('telephone').value;
  var member1 = document.getElementById('member1').value;
  var member1tel = document.getElementById('member1tel').value;
  var member2 = document.getElementById('member2').value;
  var member2tel = document.getElementById('member2tel').value;
  var member3 = document.getElementById('member3').value;
  var member3tel = document.getElementById('member3tel').value;

  // Store form data in Firestore
  const data = {
    email: email,
    university: university,
    teamname: teamname,
    teamlead: teamlead,
    telephone: telephone,
    member1: member1,
    member1tel: member1tel,
    member2: member2,
    member2tel: member2tel,
    member3: member3,
    member3tel: member3tel
  };

  try {
    // Add a new document with a generated ID to the "cities" collection
    const docRef = await addDoc(collection(db, 'regdatas'), data);
    console.log('Document written with ID: ', docRef.id);
    // Clear form fields after successful submission
    document.getElementById('email').value = '';
    document.getElementById('university').value = '';
    document.getElementById('teamname').value = '';
    document.getElementById('teamlead').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('member1').value = '';
    document.getElementById('member1tel').value = '';
    document.getElementById('member2').value = '';
    document.getElementById('member2tel').value = '';
    document.getElementById('member3').value = '';
    document.getElementById('member3tel').value = '';
    console.log('Register Successfully')
  } catch (error) {
    console.error('Error writing document: ', error);
    // alert('Error submitting the form. Please try again.');
  }

  }
  
  // Attach form submission event listener
  var form = document.getElementById('registration-form');
  form.addEventListener('submit', submitForm);