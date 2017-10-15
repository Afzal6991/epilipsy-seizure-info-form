// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
firebase.initializeApp(config);

// Reference messages collection
var Basicinformation_Ref = firebase.database().ref('Pateint information');
//var seizureinformation_Ref = firebase.database().ref('seizure information');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var gender = getInputVal('gender');
  var email = getInputVal('email');
  var age = getInputVal('age');
  var freq=getInputVal('freq')
  var side_notes = getInputVal('Sidenotes');
  var resulting_injuries = getInputVal('ResultingInjuries');
  var side_effects = getInputVal('Sideeffects');
  var seizure_ocurence= getInputVal('seizure_ocurence');
  var Ocurrence_time= getInputVal('Ocurrence_time');

  // Save message
  saveMessage(name, gender, email, age,freq,side_notes,side_effects,resulting_injuries,seizure_ocurence,Ocurrence_time);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, gender, email, age, freq,side_notes,
  side_effects,resulting_injuries,seizure_ocurence,Ocurrence_time){
  var newBasicinformation_Ref =Basicinformation_Ref.push();
  newBasicinformation_Ref.set({
    name: name,
    gender:gender,
    email:email,
    age:age,
    freq:freq,
    side_notes:side_notes,
    side_effects:side_effects,
    resulting_injuries:resulting_injuries,
    seizure_ocurence:seizure_ocurence,
    Ocurrence_time:Ocurrence_time,

  });
}
