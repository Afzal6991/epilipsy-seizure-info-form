// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCMIZloedOFXGzDOZ2uLN1jAG5KoDzBn2M",
    authDomain: "epilipsy-health-care.firebaseapp.com",
    databaseURL: "https://epilipsy-health-care.firebaseio.com",
    projectId: "epilipsy-health-care",
    storageBucket: "",
    messagingSenderId: "862267140792"
  };
firebase.initializeApp(config);

// Reference messages collection
var Basicinformation_Ref = firebase.database().ref('Pateint information');
//var instance_Ref = firebase.database().ref('Pateint information');
//var seizureinformation_Ref = firebase.database().ref('seizure information');

// Listen for form submit

// doc based on freq/month
function run() {
        document.getElementById('contactForm').addEventListener('submit', submitForm);
        var freqq= document.getElementById("freq").value;
        
        if (freqq==1)
        {//var linebreak = document.createElement('br');
        //document.getElementById("parent").appendChild(linebreak);
         if(document.getElementById("h4") && document.getElementById("l1") && document.getElementById("l2") && document.getElementById("l3")&&
            document.getElementById("l4")&&document.getElementById("l5")&&document.getElementById("t1")&&document.getElementById("t2")
            && document.getElementById("t3")&& document.getElementById("t4")&& document.getElementById("t5")&&
            document.getElementById("h4") && document.getElementById("l6") && document.getElementById("l7") && document.getElementById("l8")&&
            document.getElementById("l9")&&document.getElementById("l10")&&document.getElementById("t6")&&document.getElementById("t7")
            && document.getElementById("t8")&& document.getElementById("t9")&& document.getElementById("t10")&&
            document.getElementById("h4") && document.getElementById("l11") && document.getElementById("l12") && document.getElementById("l13")&&
            document.getElementById("l14")&&document.getElementById("l15")&&document.getElementById("t11")&&document.getElementById("t12")
            && document.getElementById("t13")&& document.getElementById("t14")&& document.getElementById("t15"))
          {document.getElementById("h4").remove();
          document.getElementById("l1").remove();
          document.getElementById("l2").remove();
          document.getElementById("l3").remove();
          document.getElementById("l4").remove();
          document.getElementById("l5").remove();
          document.getElementById("t1").remove();
          document.getElementById("t2").remove();
          document.getElementById("t3").remove();
          document.getElementById("t4").remove();
          document.getElementById("t5").remove();
          document.getElementById("h4").remove();
          document.getElementById("l6").remove();
          document.getElementById("l7").remove();
          document.getElementById("l8").remove();
          document.getElementById("l9").remove();
          document.getElementById("l10").remove();
          document.getElementById("t6").remove();
          document.getElementById("t7").remove();
          document.getElementById("t8").remove();
          document.getElementById("t9").remove();
          document.getElementById("t10").remove();
          document.getElementById("h4").remove();
          document.getElementById("l11").remove();
          document.getElementById("l12").remove();
          document.getElementById("l13").remove();
          document.getElementById("l14").remove();
          document.getElementById("l15").remove();
          document.getElementById("t11").remove();
          document.getElementById("t12").remove();
          document.getElementById("t13").remove();
          document.getElementById("t14").remove();
          document.getElementById("t15").remove();
        }
        if(document.getElementById("h4") && document.getElementById("l1") && document.getElementById("l2") && document.getElementById("l3")&&
            document.getElementById("l4")&&document.getElementById("l5")&&document.getElementById("t1")&&document.getElementById("t2")
            && document.getElementById("t3")&& document.getElementById("t4")&& document.getElementById("t5")&&
            document.getElementById("h4") && document.getElementById("l6") && document.getElementById("l7") && document.getElementById("l8")&&
            document.getElementById("l9")&&document.getElementById("l10")&&document.getElementById("t6")&&document.getElementById("t7")
            && document.getElementById("t8")&& document.getElementById("t9")&& document.getElementById("t10")){
          document.getElementById("h4").remove();
          document.getElementById("l1").remove();
          document.getElementById("l2").remove();
          document.getElementById("l3").remove();
          document.getElementById("l4").remove();
          document.getElementById("l5").remove();
          document.getElementById("t1").remove();
          document.getElementById("t2").remove();
          document.getElementById("t3").remove();
          document.getElementById("t4").remove();
          document.getElementById("t5").remove();
          document.getElementById("h4").remove();
          document.getElementById("l6").remove();
          document.getElementById("l7").remove();
          document.getElementById("l8").remove();
          document.getElementById("l9").remove();
          document.getElementById("l10").remove();
          document.getElementById("t6").remove();
          document.getElementById("t7").remove();
          document.getElementById("t8").remove();
          document.getElementById("t9").remove();
          document.getElementById("t10").remove();
        }

         
        var h4 = document.createElement('h4');
        h4.setAttribute("id","h4");
        h4.style.fontWeight = "900";
        h4.innerHTML= "Seizure-1" ;
        document.getElementById("parent").appendChild(h4);

        var label1 = document.createElement("label");
        label1.setAttribute("id","l1");
        label1.innerHTML = "1: where seizure occured!"
        document.getElementById("parent1").appendChild(label1);
        var text1 = document.createElement("input");
        text1.setAttribute("type","text");
        text1.setAttribute("id","t1");
        document.getElementById("parent1").appendChild(text1);

        var label2 = document.createElement("label");
        label2.setAttribute("id","l2");
        label2.innerHTML = "1: Ocurrence Date/Time"
        document.getElementById("parent2").appendChild(label2);
        var text2 = document.createElement("input");
        text2.setAttribute("type","datetime-local");
        text2.setAttribute("id","t2");
        document.getElementById("parent2").appendChild(text2);

        var label3 = document.createElement("label");
        label3.setAttribute("id","l3");
        label3.innerHTML = "1: Resulting Injuries"
        document.getElementById("parent3").appendChild(label3);
        var text3 = document.createElement("input");
        text3.setAttribute("type","text");
        text3.setAttribute("id","t3");
        text3.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent3").appendChild(text3);


        var label4 = document.createElement("label");
        label4.setAttribute("id","l4");
        label4.innerHTML = "1: Side effects"
        document.getElementById("parent4").appendChild(label4);
        var text4 = document.createElement("input");
        text4.setAttribute("type","text");
        text4.setAttribute("id","t4");
        text4.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent4").appendChild(text4);


        var label5 = document.createElement("label");
        label5.setAttribute("id","l5");
        label5.innerHTML = "1:Side notes"
        document.getElementById("parent5").appendChild(label5);
        var text5 = document.createElement("input");
        text5.setAttribute("type","text");
        text5.setAttribute("id","t5");
        text5.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent5").appendChild(text5);
         
         
         }
         else if(freqq==2){
          if(document.getElementById("h4") && document.getElementById("l1") && document.getElementById("l2") && document.getElementById("l3")&&
            document.getElementById("l4")&&document.getElementById("l5")&&document.getElementById("t1")&&document.getElementById("t2")
            && document.getElementById("t3")&& document.getElementById("t4")&& document.getElementById("t5")&&
            document.getElementById("h4") && document.getElementById("l6") && document.getElementById("l7") && document.getElementById("l8")&&
            document.getElementById("l9")&&document.getElementById("l10")&&document.getElementById("t6")&&document.getElementById("t7")
            && document.getElementById("t8")&& document.getElementById("t9")&& document.getElementById("t10")&&
            document.getElementById("h4") && document.getElementById("l11") && document.getElementById("l12") && document.getElementById("l13")&&
            document.getElementById("l14")&&document.getElementById("l15")&&document.getElementById("t11")&&document.getElementById("t12")
            && document.getElementById("t13")&& document.getElementById("t14")&& document.getElementById("t15"))
          {document.getElementById("h4").remove();
          document.getElementById("l1").remove();
          document.getElementById("l2").remove();
          document.getElementById("l3").remove();
          document.getElementById("l4").remove();
          document.getElementById("l5").remove();
          document.getElementById("t1").remove();
          document.getElementById("t2").remove();
          document.getElementById("t3").remove();
          document.getElementById("t4").remove();
          document.getElementById("t5").remove();
          document.getElementById("h4").remove();
          document.getElementById("l6").remove();
          document.getElementById("l7").remove();
          document.getElementById("l8").remove();
          document.getElementById("l9").remove();
          document.getElementById("l10").remove();
          document.getElementById("t6").remove();
          document.getElementById("t7").remove();
          document.getElementById("t8").remove();
          document.getElementById("t9").remove();
          document.getElementById("t10").remove();
          document.getElementById("h4").remove();
          document.getElementById("l11").remove();
          document.getElementById("l12").remove();
          document.getElementById("l13").remove();
          document.getElementById("l14").remove();
          document.getElementById("l15").remove();
          document.getElementById("t11").remove();
          document.getElementById("t12").remove();
          document.getElementById("t13").remove();
          document.getElementById("t14").remove();
          document.getElementById("t15").remove();
        }if(document.getElementById("h4") && document.getElementById("l1") && document.getElementById("l2") && document.getElementById("l3")&&
            document.getElementById("l4")&&document.getElementById("l5")&&document.getElementById("t1")&&document.getElementById("t2")
            && document.getElementById("t3")&& document.getElementById("t4")&& document.getElementById("t5")){
         document.getElementById("h4").remove();
          document.getElementById("l1").remove();
          document.getElementById("l2").remove();
          document.getElementById("l3").remove();
          document.getElementById("l4").remove();
          document.getElementById("l5").remove();
          document.getElementById("t1").remove();
          document.getElementById("t2").remove();
          document.getElementById("t3").remove();
          document.getElementById("t4").remove();
          document.getElementById("t5").remove(); 
        }


        var h4 = document.createElement('h4');
        h4.setAttribute("id","h4");
        h4.style.fontWeight = "900";
        h4.innerHTML= "Seizure-1" ;
        document.getElementById("parent").appendChild(h4);

        var label1 = document.createElement("label");
        label1.setAttribute("id","l1");
        label1.innerHTML = "1: where seizure occured!"
        document.getElementById("parent1").appendChild(label1);
        var text1 = document.createElement("input");
        text1.setAttribute("type","text");
        text1.setAttribute("id","t1");
        document.getElementById("parent1").appendChild(text1);

        var label2 = document.createElement("label");
        label2.setAttribute("id","l2");
        label2.innerHTML = "1: Ocurrence Date/Time"
        document.getElementById("parent2").appendChild(label2);
        var text2 = document.createElement("input");
        text2.setAttribute("type","datetime-local");
        text2.setAttribute("id","t2");
        document.getElementById("parent2").appendChild(text2);

        var label3 = document.createElement("label");
        label3.setAttribute("id","l3");
        label3.innerHTML = "1: Resulting Injuries"
        document.getElementById("parent3").appendChild(label3);
        var text3 = document.createElement("input");
        text3.setAttribute("type","text");
        text3.setAttribute("id","t3");
        text3.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent3").appendChild(text3);


        var label4 = document.createElement("label");
        label4.setAttribute("id","l4");
        label4.innerHTML = "1: Side effects"
        document.getElementById("parent4").appendChild(label4);
        var text4 = document.createElement("input");
        text4.setAttribute("type","text");
        text4.setAttribute("id","t4");
        text4.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent4").appendChild(text4);


        var label5 = document.createElement("label");
        label5.setAttribute("id","l5");
        label5.innerHTML = "1:Side notes"
        document.getElementById("parent5").appendChild(label5);
        var text5 = document.createElement("input");
        text5.setAttribute("type","text");
        text5.setAttribute("id","t5");
        text5.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent5").appendChild(text5);

        //s2
        var h4 = document.createElement('h4');
        h4.setAttribute("id","h4");
        h4.style.fontWeight = "900";

        h4.innerHTML= "Seizure-2" ;
        document.getElementById("parent6").appendChild(h4);

        var label6 = document.createElement("label");
        label6.setAttribute("id","l6");
        label6.innerHTML = "2: where seizure occured!"
        document.getElementById("parent7").appendChild(label6);
        var text6 = document.createElement("input");
        text6.setAttribute("id","t6");
        text6.setAttribute("type","text");
        document.getElementById("parent7").appendChild(text6);

        var label7 = document.createElement("label");
        label7.setAttribute("id","l7");
        label7.innerHTML = "2: Ocurrence Date/Time"
        document.getElementById("parent8").appendChild(label7);
        var text7 = document.createElement("input");
        text7.setAttribute("id","t7");
        text7.setAttribute("type","datetime-local");
        document.getElementById("parent8").appendChild(text7);

        var label8 = document.createElement("label");
        label8.setAttribute("id","l8");
        label8.innerHTML = "2: Resulting Injuries"
        document.getElementById("parent9").appendChild(label8);
        var text8 = document.createElement("input");
        text8.setAttribute("id","t8");
        text8.setAttribute("type","text");
        text8.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent9").appendChild(text8);


        var label9 = document.createElement("label");
        label9.setAttribute("id","l9");
        label9.innerHTML = "2: Side effects"
        document.getElementById("parent10").appendChild(label9);
        var text9 = document.createElement("input");
        text9.setAttribute("type","text");
        text9.setAttribute("id","t9");
        text9.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent10").appendChild(text9);


        var label10 = document.createElement("label");
        label10.setAttribute("id","l10");
        label10.innerHTML = "2:Side notes"
        document.getElementById("parent11").appendChild(label10);
        var text10 = document.createElement("input");
        text10.setAttribute("type","text");
        text10.setAttribute("id","t10");
        text10.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent11").appendChild(text10);

         }

         else if(freqq==3){
          if(document.getElementById("h4") && document.getElementById("l1") && document.getElementById("l2") && document.getElementById("l3")&&
            document.getElementById("l4")&&document.getElementById("l5")&&document.getElementById("t1")&&document.getElementById("t2")
            && document.getElementById("t3")&& document.getElementById("t4")&& document.getElementById("t5")&&
            document.getElementById("h4") && document.getElementById("l6") && document.getElementById("l7") && document.getElementById("l8")&&
            document.getElementById("l9")&&document.getElementById("l10")&&document.getElementById("t6")&&document.getElementById("t7")
            && document.getElementById("t8")&& document.getElementById("t9")&& document.getElementById("t10")){
          document.getElementById("h4").remove();
          document.getElementById("l1").remove();
          document.getElementById("l2").remove();
          document.getElementById("l3").remove();
          document.getElementById("l4").remove();
          document.getElementById("l5").remove();
          document.getElementById("t1").remove();
          document.getElementById("t2").remove();
          document.getElementById("t3").remove();
          document.getElementById("t4").remove();
          document.getElementById("t5").remove();
          document.getElementById("h4").remove();
          document.getElementById("l6").remove();
          document.getElementById("l7").remove();
          document.getElementById("l8").remove();
          document.getElementById("l9").remove();
          document.getElementById("l10").remove();
          document.getElementById("t6").remove();
          document.getElementById("t7").remove();
          document.getElementById("t8").remove();
          document.getElementById("t9").remove();
          document.getElementById("t10").remove();
        }

          if(document.getElementById("h4") && document.getElementById("l1") && document.getElementById("l2") && document.getElementById("l3")&&
            document.getElementById("l4")&&document.getElementById("l5")&&document.getElementById("t1")&&document.getElementById("t2")
            && document.getElementById("t3")&& document.getElementById("t4")&& document.getElementById("t5")){
         document.getElementById("h4").remove();
          document.getElementById("l1").remove();
          document.getElementById("l2").remove();
          document.getElementById("l3").remove();
          document.getElementById("l4").remove();
          document.getElementById("l5").remove();
          document.getElementById("t1").remove();
          document.getElementById("t2").remove();
          document.getElementById("t3").remove();
          document.getElementById("t4").remove();
          document.getElementById("t5").remove(); 
        }
        var h4 = document.createElement('h4');
        h4.setAttribute("id","h4");
        h4.style.fontWeight = "900";

        h4.innerHTML= "Seizure-1" ;
        document.getElementById("parent").appendChild(h4);

        var label1 = document.createElement("label");
        label1.setAttribute("id","l1");
        label1.innerHTML = "1: where seizure occured!"
        document.getElementById("parent1").appendChild(label1);
        var text1 = document.createElement("input");
        text1.setAttribute("type","text");
        text1.setAttribute("id","t1");
        document.getElementById("parent1").appendChild(text1);

        var label2 = document.createElement("label");
        label2.setAttribute("id","l2");
        label2.innerHTML = "1: Ocurrence Date/Time"
        document.getElementById("parent2").appendChild(label2);
        var text2 = document.createElement("input");
        text2.setAttribute("type","datetime-local");
        text2.setAttribute("id","t2");
        document.getElementById("parent2").appendChild(text2);

        var label3 = document.createElement("label");
        label3.setAttribute("id","l3");
        label3.innerHTML = "1: Resulting Injuries"
        document.getElementById("parent3").appendChild(label3);
        var text3 = document.createElement("input");
        text3.setAttribute("type","text");
        text3.setAttribute("id","t3");
        text3.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent3").appendChild(text3);


        var label4 = document.createElement("label");
        label4.setAttribute("id","l4");
        label4.innerHTML = "1: Side effects"
        document.getElementById("parent4").appendChild(label4);
        var text4 = document.createElement("input");
        text4.setAttribute("type","text");
        text4.setAttribute("id","t4");
        text4.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent4").appendChild(text4);


        var label5 = document.createElement("label");
        label5.setAttribute("id","l5");
        label5.innerHTML = "1:Side notes"
        document.getElementById("parent5").appendChild(label5);
        var text5 = document.createElement("input");
        text5.setAttribute("type","text");
        text5.setAttribute("id","t5");
        text5.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent5").appendChild(text5);

        //s2
        var h4 = document.createElement('h4');
        h4.setAttribute("id","h4");
        h4.style.fontWeight = "900";

        h4.innerHTML= "Seizure-2" ;
        document.getElementById("parent6").appendChild(h4);

        var label6 = document.createElement("label");
        label6.setAttribute("id","l6");
        label6.innerHTML = "2: where seizure occured!"
        document.getElementById("parent7").appendChild(label6);
        var text6 = document.createElement("input");
        text6.setAttribute("id","t6");
        text6.setAttribute("type","text");
        document.getElementById("parent7").appendChild(text6);

        var label7 = document.createElement("label");
        label7.setAttribute("id","l7");
        label7.innerHTML = "2: Ocurrence Date/Time"
        document.getElementById("parent8").appendChild(label7);
        var text7 = document.createElement("input");
        text7.setAttribute("id","t7");
        text7.setAttribute("type","datetime-local");
        document.getElementById("parent8").appendChild(text7);

        var label8 = document.createElement("label");
        label8.setAttribute("id","l8");
        label8.innerHTML = "2: Resulting Injuries"
        document.getElementById("parent9").appendChild(label8);
        var text8 = document.createElement("input");
        text8.setAttribute("id","t8");
        text8.setAttribute("type","text");
        text8.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent9").appendChild(text8);


        var label9 = document.createElement("label");
        label9.setAttribute("id","l9");
        label9.innerHTML = "2: Side effects"
        document.getElementById("parent10").appendChild(label9);
        var text9 = document.createElement("input");
        text9.setAttribute("type","text");
        text9.setAttribute("id","t9");
        text9.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent10").appendChild(text9);


        var label10 = document.createElement("label");
        label10.setAttribute("id","l10");
        label10.innerHTML = "2:Side notes"
        document.getElementById("parent11").appendChild(label10);
        var text10 = document.createElement("input");
        text10.setAttribute("type","text");
        text10.setAttribute("id","t10");
        text10.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent11").appendChild(text10);

        ////s2
        var h4 = document.createElement('h4');
        h4.setAttribute("id","h4");
        h4.style.fontWeight = "900";

        h4.innerHTML= "Seizure-3" ;
        document.getElementById("parent12").appendChild(h4);

        var label11 = document.createElement("label");
        label11.setAttribute("id","l11");
        label11.innerHTML = "3: where seizure occured!"
        document.getElementById("parent13").appendChild(label11);
        var text11 = document.createElement("input");
        text11.setAttribute("type","text");
        text11.setAttribute("id","t11");
        document.getElementById("parent13").appendChild(text11);

        var label12 = document.createElement("label");
        label12.setAttribute("id","l12");
        label12.innerHTML = "3: Ocurrence Date/Time"
        document.getElementById("parent14").appendChild(label12);
        var text12 = document.createElement("input");
        text12.setAttribute("id","t12");
        text12.setAttribute("type","datetime-local");
        document.getElementById("parent14").appendChild(text12);

        var label13 = document.createElement("label");
        label13.setAttribute("id","l13");
        label13.innerHTML = "3: Resulting Injuries"
        document.getElementById("parent15").appendChild(label13);
        var text13 = document.createElement("input");
        text13.setAttribute("id","t13");
        text13.setAttribute("type","text");
        text13.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent15").appendChild(text13);


        var label14 = document.createElement("label");
        label14.setAttribute("id","l14");
        label14.innerHTML = "3: Side effects"
        document.getElementById("parent16").appendChild(label14);
        var text14 = document.createElement("input");
        text14.setAttribute("type","text");
        text14.setAttribute("id","t14");
        text14.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent16").appendChild(text14);


        var label15 = document.createElement("label");
        label15.setAttribute("id","l15");
        label15.innerHTML = "3:Side notes"
        document.getElementById("parent17").appendChild(label15);
        var text15 = document.createElement("input");
        text15.setAttribute("type","text");
        text15.setAttribute("id","t15");
        text15.setAttribute("style","height:60px;width:400px");
        document.getElementById("parent17").appendChild(text15);


         }else
         {

         }
   }
// Submit form
function submitForm(e){
  e.preventDefault();
//must not define get element by id function in here it will stop dropdown from running
  // Get values
  var name = getInputVal('name');
  var gender = getInputVal('gender');
  var email = getInputVal('email');
  var age = getInputVal('age');
  var freq=getInputVal('freq')
  var month= getInputVal('month');
  var cleanEmail = email.replace(/\./g, ',');
  //var cleanEmail = email.replace(/\./g, ',');
  if (freq==1)
  {
  basicinfo(name, gender, cleanEmail, age,freq)
  var seizure_ocurence= getInputVal('t1'); 
  var Ocurrence_time= getInputVal('t2');
  var resulting_injuries = getInputVal('t3');
  var side_effects = getInputVal('t4');
  var side_notes = getInputVal('t5');// Save message
  saveMessage1(month,cleanEmail,seizure_ocurence,Ocurrence_time,resulting_injuries,side_effects,side_notes);
  }
  else if (freq==2){
  basicinfo(name, gender, cleanEmail, age,freq)
  
  var seizure_ocurence= getInputVal('t1'); 
  var Ocurrence_time= getInputVal('t2');
  var resulting_injuries = getInputVal('t3');
  var side_effects = getInputVal('t4');
  var side_notes = getInputVal('t5');
  
  //s2
  var seizure_ocurence2= getInputVal('t6'); 
  var Ocurrence_time2= getInputVal('t7');
  var resulting_injuries2 = getInputVal('t8');
  var side_effects2 = getInputVal('t9');
  var side_notes2 = getInputVal('t10');
  
  saveMessage2(month,cleanEmail,seizure_ocurence,Ocurrence_time,resulting_injuries,side_effects,side_notes,seizure_ocurence2,Ocurrence_time2,resulting_injuries2,side_effects2,side_notes2);
  
  }
  else if (freq==3){
  basicinfo(name, gender, cleanEmail, age,freq)

  var seizure_ocurence= getInputVal('t1'); 
  var Ocurrence_time= getInputVal('t2');
  var resulting_injuries = getInputVal('t3');
  var side_effects = getInputVal('t4');
  var side_notes = getInputVal('t5');
  
  //s2
  var seizure_ocurence2= getInputVal('t6'); 
  var Ocurrence_time2= getInputVal('t7');
  var resulting_injuries2 = getInputVal('t8');
  var side_effects2 = getInputVal('t9');
  var side_notes2 = getInputVal('t10');
  
  //s3
  var seizure_ocurence3= getInputVal('t11'); 
  var Ocurrence_time3= getInputVal('t12');
  var resulting_injuries3 = getInputVal('t13');
  var side_effects3 = getInputVal('t14');
  var side_notes3 = getInputVal('t15');
  
  saveMessage3(month,cleanEmail,seizure_ocurence,Ocurrence_time,resulting_injuries,side_effects,side_notes,
    seizure_ocurence2,Ocurrence_time2,resulting_injuries2,side_effects2,side_notes2,
    seizure_ocurence3,Ocurrence_time3,resulting_injuries3,side_effects3,side_notes3);
  }

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
function basicinfo(name, gender,cleanEmail, age,freq){
  //var newBasicinformation_Ref =Basicinformation_Ref.push();
  //newBasicinformation_Ref.set({
    firebase.database().ref('Pateint information/'+cleanEmail).set({
    name:name,
    gender:gender,
    age:age,
    freq:freq,
  });
}

// Save message to firebase
function saveMessage1(month,cleanEmail,seizure_ocurence,
  Ocurrence_time,resulting_injuries,side_effects,side_notes){
  //var newBasicinformation_Ref =Basicinformation_Ref.push();
  //newBasicinformation_Ref.set({
    firebase.database().ref('Pateint information/'+cleanEmail+'/'+month+'/seizure_1').set({
    seizure_ocurence:seizure_ocurence,
    Ocurrence_time:Ocurrence_time, 
    resulting_injuries:resulting_injuries,
    side_effects:side_effects,
    side_notes:side_notes,
  });
}
function saveMessage2(month,cleanEmail,seizure_ocurence,Ocurrence_time,resulting_injuries,side_effects,side_notes,
    seizure_ocurence2,Ocurrence_time2,resulting_injuries2,side_effects2,side_notes2){
  firebase.database().ref('Pateint information/'+cleanEmail+'/'+month+'/seizure_1').set({
    seizure_ocurence:seizure_ocurence,
    Ocurrence_time:Ocurrence_time,
    resulting_injuries:resulting_injuries,
    side_effects:side_effects,
    side_notes:side_notes, 

  });

  firebase.database().ref('Pateint information/'+cleanEmail+'/'+month+'/seizure_2').set({
    seizure_ocurence2:seizure_ocurence2,
    Ocurrence_time2:Ocurrence_time2,
    resulting_injuries2:resulting_injuries2,
    side_effects2:side_effects2,
    side_notes2:side_notes2, 

  });
}
function saveMessage3(month,cleanEmail,seizure_ocurence,Ocurrence_time,resulting_injuries,side_effects,side_notes,
    seizure_ocurence2,Ocurrence_time2,resulting_injuries2,side_effects2,side_notes2,
    seizure_ocurence3,Ocurrence_time3,resulting_injuries3,side_effects3,side_notes3){
 // var newBasicinformation_Ref =Basicinformation_Ref.push();
  firebase.database().ref('Pateint information/'+cleanEmail+'/'+month+'/seizure_1').set({
    seizure_ocurence:seizure_ocurence,
    Ocurrence_time:Ocurrence_time,
    resulting_injuries:resulting_injuries,
    side_effects:side_effects,
    side_notes:side_notes, 

  });

  firebase.database().ref('Pateint information/'+cleanEmail+'/'+month+'/seizure_2').set({
    seizure_ocurence2:seizure_ocurence2,
    Ocurrence_time2:Ocurrence_time2,
    resulting_injuries2:resulting_injuries2,
    side_effects2:side_effects2,
    side_notes2:side_notes2, 

  });
  firebase.database().ref('Pateint information/'+cleanEmail+'/'+month+'/seizure_3').set({
    seizure_ocurence3:seizure_ocurence3,
    Ocurrence_time3:Ocurrence_time3,
    resulting_injuries3:resulting_injuries3,
    side_effects3:side_effects3,
    side_notes3:side_notes3, 

  });
}


