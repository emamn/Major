
//AUDIO TEST
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0

function playPause(){
    if(count == 0){
        count = 1;
        console.log('i was pressed')
        console.log(count);
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }
    else{
        count = 0;
        console.log(count);
        console.log('i was pressed to pause')
        audio.pause();
        playPauseBTN.innerHTML = "Test volume &#9658;";
    }
}

/*
function stop (){
    playPause();
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658"
}


var x = document.getElementById('audio');

function setHalfVolume() { 
  x.volume = 0.2;
}
   
function setHalfVolume() { 
    x.volume = 0.5;
}

function setFullVolume() { 
  x.volume = 1.0;
} 
*/

$('#rngVolume').on("slidestop", function(){  
    var volume = document.getElementById('rngVolume').value;  
    console.log(volume);  
    player.volume = volume;  
      
});  




