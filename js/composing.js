

$('.crotchet1').hide();
$('.crotchet2').hide();
$('.crotchet3').hide();
$('.crotchet4').hide();
$('.crotchet5').hide();
$('.crotchet6').hide();
$('.crotchet7').hide();
$('.crotchet8').hide();

$('.crotchet9').hide();
$('.crotchet10').hide();
$('.crotchet11').hide();
$('.crotchet12').hide();
$('.crotchet13').hide();
$('.crotchet14').hide();
$('.crotchet15').hide();
$('.crotchet16').hide();





/*
//DATABASE -----------------------------------------------
var apikey = '61a3fa8734abfc7f972efc04';
var url = 'https://enirui-a66e.restdb.io/rest/notes';

var arrNotes = [


];

//database

function getNotes(url,apikey){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        arrNotes = response;
        console.log(response);
      });
}


$('#btnA').click(function(){
  console.log('Note A');
  $('#noteName').text(arrNotes[0].noteName);
  
});
getNotes(url, apikey);
*/

var score   = 0;
var noOfBirds = 8;
var arrBirds = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'c2'];

function createBirds(arrBirds){
    //loop to the noToCreate
    for(var i = 0; i < arrBirds.length; i++){
        if(arrBirds[i] == 'c'){
            $('body').append('<div id="birds' + i +'" class="birds c"></div>');
        }
        if(arrBirds[i] == 'd'){
            $('body').append('<div id="birds' + i +'" class="birds d"></div>' );
        }
        if(arrBirds[i] == 'e'){
            $('body').append('<div id="birds' + i +'" class="birds e"></div>');
        }
        if(arrBirds[i] == 'f'){
          $('body').append('<div id="birds' + i +'" class="birds f"></div>');
        }
        if(arrBirds[i] == 'g'){
          $('body').append('<div id="birds' + i +'" class="birds g"></div>');
        }
        if(arrBirds[i] == 'a'){
          $('body').append('<div id="birds' + i +'" class="birds a"></div>');
        }
        if(arrBirds[i] == 'b'){
          $('body').append('<div id="birds' + i +'" class="birds b"></div>');
        }
        if(arrBirds[i] == 'c2'){
          $('body').append('<div id="birds' + i +'" class="birds c2"></div>');
        }
        var idSelector = '#birds' + i;
        /*var xPosition = Math.random() * 1000 + 'px'; //X AND Y POSITIONING OF THE RANDOM ITEMS THAT APPEAR
        var yPosition = Math.random() * 800 + 'px'; // PLEASE USE THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
        $(idSelector).css({left: xPosition, top: yPosition}); */
    }
}
createBirds(arrBirds);

var noteDisplay = [];


//the birbs
//var audio = document.getElementById('aNote'); what does this line even do 

$('#birds0').click(function(){
  console.log('BIRD C'); 
  cNote.load();     
  cNote.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetC");
  print();
  
});

$('#birds1').click(function(){
  console.log('BIRD D'); 
  dNote.load();     
  dNote.play();
  $(this).effect('bounce', {times:1}, 300);
  
  noteDisplay.push("crotchetD");
  print();

});

$('#birds2').click(function(){
  console.log('BIRD E'); 
  eNote.load();
  eNote.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetE");
  print();
});

$('#birds3').click(function(){
  console.log('BIRD F'); 
  fNote.load();
  fNote.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetF");
  print();
});

$('#birds4').click(function(){
  console.log('BIRD G'); 
  gNote.load();
  gNote.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetG");
  print();
});

$('#birds5').click(function(){
  console.log('BIRD A');
  aNote.load();
  aNote.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetA");
  print();
});

$('#birds6').click(function(){
  console.log('BIRD B'); 
  bNote.load();
  bNote.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetB");
  print();
});

$('#birds7').click(function(){
  console.log('BIRD C'); 
  c2Note.load();
  c2Note.play();
  $(this).effect('bounce', {times:1}, 300);

  noteDisplay.push("crotchetC2");
  print();
});

  //console.log(response[i].Name);

//reset
$('#btnReset').click(function(){ 
  reset();
});

function reset(){
  console.log('reset');
  $('.crotchet1').hide();
  $('.crotchet2').hide();
  $('.crotchet3').hide();
  $('.crotchet4').hide();
  $('.crotchet5').hide();
  $('.crotchet6').hide();
  $('.crotchet7').hide();
  $('.crotchet8').hide();
  $('.crotchet9').hide();
  $('.crotchet10').hide();
  $('.crotchet11').hide();
  $('.crotchet12').hide();
  $('.crotchet13').hide();
  $('.crotchet14').hide();
  $('.crotchet15').hide();
  $('.crotchet16').hide();
  noteDisplay = [];
}

$('#btnPlay').click(function(){
  play();
});


function print(){
  for(var i = 0; i < noteDisplay.length; i++){
    console.log(noteDisplay[i]);
    //if noteDisplay[0] == crotchetC then this.show
    //crotchet C
    if (noteDisplay[0] == 'crotchetC') {
      $('#cCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetC') {
      $('#cCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetC') {
      $('#cCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetC') {
      $('#cCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetC') {
      $('#cCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetC') {
      $('#cCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetC') {
      $('#cCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetC') {
      $('#cCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetC') {
      $('#cCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetC') {
      $('#cCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetC') {
      $('#cCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetC') {
      $('#cCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetC') {
      $('#cCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetC') {
      $('#cCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetC') {
      $('#cCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetC') {
      $('#cCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetC') {
      reset();
    }

    //crotchet D
    if (noteDisplay[0] == 'crotchetD') {
      $('#dCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetD') {
      $('#dCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetD') {
      $('#dCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetD') {
      $('#dCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetD') {
      $('#dCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetD') {
      $('#dCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetD') {
      $('#dCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetD') {
      $('#dCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetD') {
      $('#dCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetD') {
      $('#dCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetD') {
      $('#dCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetD') {
      $('#dCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetD') {
      $('#dCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetD') {
      $('#dCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetD') {
      $('#dCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetD') {
      $('#dCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetD') {
      reset();
    }

    //crotchet E
    if (noteDisplay[0] == 'crotchetE') {
      $('#eCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetE') {
      $('#eCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetE') {
      $('#eCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetE') {
      $('#eCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetE') {
      $('#eCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetE') {
      $('#eCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetE') {
      $('#eCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetE') {
      $('#eCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetE') {
      $('#eCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetE') {
      $('#eCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetE') {
      $('#eCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetE') {
      $('#eCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetE') {
      $('#eCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetE') {
      $('#eCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetE') {
      $('#eCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetE') {
      $('#eCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetE') {
      reset();
    }

    //crotchet F
    if (noteDisplay[0] == 'crotchetF') {
      $('#fCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetF') {
      $('#fCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetF') {
      $('#fCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetF') {
      $('#fCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetF') {
      $('#fCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetF') {
      $('#fCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetF') {
      $('#fCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetF') {
      $('#fCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetF') {
      $('#fCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetF') {
      $('#fCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetF') {
      $('#fCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetF') {
      $('#fCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetF') {
      $('#fCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetF') {
      $('#fCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetF') {
      $('#fCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetF') {
      $('#fCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetF') {
      reset();
    }

    //crotchet G
    if (noteDisplay[0] == 'crotchetG') {
      $('#gCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetG') {
      $('#gCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetG') {
      $('#gCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetG') {
      $('#gCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetG') {
      $('#gCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetG') {
      $('#gCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetG') {
      $('#gCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetG') {
      $('#gCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetG') {
      $('#gCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetG') {
      $('#gCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetG') {
      $('#gCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetG') {
      $('#gCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetG') {
      $('#gCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetG') {
      $('#gCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetG') {
      $('#gCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetG') {
      $('#gCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetG') {
      reset();
    }

    //crotchet A
    if (noteDisplay[0] == 'crotchetA') {
      $('#aCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetA') {
      $('#aCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetA') {
      $('#aCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetA') {
      $('#aCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetA') {
      $('#aCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetA') {
      $('#aCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetA') {
      $('#aCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetA') {
      $('#aCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetA') {
      $('#aCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetA') {
      $('#aCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetA') {
      $('#aCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetA') {
      $('#aCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetA') {
      $('#aCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetA') {
      $('#aCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetA') {
      $('#aCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetA') {
      $('#aCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetA') {
      reset();
    }

    //crotchet B
    if (noteDisplay[0] == 'crotchetB') {
      $('#bCrotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetB') {
      $('#bCrotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetB') {
      $('#bCrotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetB') {
      $('#bCrotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetB') {
      $('#bCrotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetB') {
      $('#bCrotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetB') {
      $('#bCrotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetB') {
      $('#bCrotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetB') {
      $('#bCrotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetB') {
      $('#bCrotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetB') {
      $('#bCrotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetB') {
      $('#bCrotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetB') {
      $('#bCrotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetB') {
      $('#bCrotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetB') {
      $('#bCrotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetB') {
      $('#bCrotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetB') {
      reset();
    }

    //crotchet C2
    if (noteDisplay[0] == 'crotchetC2') {
      $('#c2Crotchet1').show();
    }
    if (noteDisplay[1] == 'crotchetC2') {
      $('#c2Crotchet2').show();
    }
    if (noteDisplay[2] == 'crotchetC2') {
      $('#c2Crotchet3').show();
    }
    if (noteDisplay[3] == 'crotchetC2') {
      $('#c2Crotchet4').show();
    }
    if (noteDisplay[4] == 'crotchetC2') {
      $('#c2Crotchet5').show();
    }
    if (noteDisplay[5] == 'crotchetC2') {
      $('#c2Crotchet6').show();
    }
    if (noteDisplay[6] == 'crotchetC2') {
      $('#c2Crotchet7').show();
    }
    if (noteDisplay[7] == 'crotchetC2') {
      $('#c2Crotchet8').show();
    }
    if (noteDisplay[8] == 'crotchetC2') {
      $('#c2Crotchet9').show();
    }
    if (noteDisplay[9] == 'crotchetC2') {
      $('#c2Crotchet10').show();
    }
    if (noteDisplay[10] == 'crotchetC2') {
      $('#c2Crotchet11').show();
    }
    if (noteDisplay[11] == 'crotchetC2') {
      $('#c2Crotchet12').show();
    }
    if (noteDisplay[12] == 'crotchetC2') {
      $('#c2Crotchet13').show();
    }
    if (noteDisplay[13] == 'crotchetC2') {
      $('#c2Crotchet14').show();
    }
    if (noteDisplay[14] == 'crotchetC2') {
      $('#c2Crotchet15').show();
    }
    if (noteDisplay[15] == 'crotchetC2') {
      $('#c2Crotchet16').show();
    }
    if (noteDisplay[16] == 'crotchetC2') {
      reset();
    }
  }
}


 /*
//NOTES now the hard part ----------------------------------------------------------------------------------------------
function cPlacement(){
  if(cClick == 1 && click == 1);{
    $('#cCrotchet1').show();
  }
  if(cClick == 1 && click == 2);{
    $('#cCrotchet2').show();
  }
  if(cClick == 1 && click == 3);{
    $('#cCrotchet3').show();
  }
}

*/