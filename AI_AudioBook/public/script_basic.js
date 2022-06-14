//Web Speech API - speechSynthesis

var synth = window.speechSynthesis;
var speechTone = 3;
var count = 0;
var parts;
var startOnTone;

var inputButton = document.querySelector('button');
var inputTxt = document.querySelector('.txt');

inputButton.onclick = function() {
  say(inputTxt.value);
  count = 0;
}

function say(something){
  
  setTone(something);
  splitText(something);
  
  if (startOnTone){
    for (var part in parts){

      if ( count % 2 == 0 ){
       var utterThis = new SpeechSynthesisUtterance(parts[count]);
      utterThis.voice = synth.getVoices()[speechTone];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
        console.log(parts[count] + " in tone");

      }else{
       var utterThis = new SpeechSynthesisUtterance(parts[count]);
      utterThis.voice = synth.getVoices()[3];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
      console.log(parts[count] + " not in tone");
      }
    count ++;}
    
    }else{
    for (var part in parts){

      if ( count % 2 == 0 ){
       var utterThis = new SpeechSynthesisUtterance(parts[count]);
      utterThis.voice = synth.getVoices()[3];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
        console.log(parts[count] + "not in tone");

      }else{
       var utterThis = new SpeechSynthesisUtterance(parts[count]);
      utterThis.voice = synth.getVoices()[speechTone];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
      console.log(parts[count] + " in tone");
      }
    count ++;}
    }
}


function setTone(something){
  
  //sets tone for spoken words
  //23 - hysterical, 17 - derranged, 61 - whisper, 71 - uk female, 72 uk male
  
  if(something.search(/crie/i) > -1 || something.search(/sob/i) > -1){
    speechTone = 23;
  }else if (something.search(/scream/i) > -1 ){
    speechTone = 17;
  }else if (something.search(/whisper/i) > -1){
    speechTone = 61;
  }else if(something.search(/she/i) > -1){
    speechTone = 71;
  }else if (something.search(/he/i) > -1){
    speechTone = 72;
   }else
    {speechTone = 3;}
  
  console.log("in tone:" + speechTone);
    
}

function splitText(something){
  // corrects differnent types of quotation marks
  something = something.replace('\“', '\"');
  something = something.replace('\”', '\"');
  //startOnTone = first part of speech is a quotation
  if( something.charAt(0) == '\"' ){ startOnTone = true; console.log("start on tone");}
      else{ startOnTone = false; console.log("don't start on tone");}
  //split by quotation/non-quotation
  parts = something.split('\"');
  //get rid of empty pre-quotation string
  if (startOnTone){parts.shift();}
  
  console.log(parts);
}



/* -------------- This function log the avaiable Voices  -------------- */

function displayVoices(){
   var voices = synth.getVoices();
     for(i = 0; i < voices.length ; i++) {
       console.log(i + " : " + voices[i].lang + " : " + voices[i].name);
     }
 }

/* -------------------------------------------------------------------- */


