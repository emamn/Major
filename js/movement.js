//keys  
$('#infoClef').hide();
$('#infoTS').hide();
$('#infoE').hide();
$('#infoG').hide();
$('#infoB').hide();
$('#infoD').hide();
$('#infoF').hide();
$('#infoClef').hide();
$('#infoTS').hide();

// and hiding the others

  $('body').keydown(function(event){ //I NEED A WAY TO MOVE BETTER
    //move down
    if(event.which == 83){
        $(".player").animate({"top": "+=50px"}, checkMultipleCollisions);
        //$(".player").animate({"top": "+=0px"}, "fast", checkmovement);
    }
    //move up
    if(event.which == 87){
        $(".player").animate({"top": "-=50px"}, checkMultipleCollisions);
        //$(".player").animate({"top": "+=0px"}, "fast", checkmovement);
        
    }
    //move right
    if(event.which == 68){
        $(".player").animate({"left": "+=50px"}, checkMultipleCollisions);
        //$(".player").animate({"top": "+=0px"}, "fast", checkmovement);
    }
    //move left
    if(event.which == 65){
        $(".player").animate({"left": "-=50px"}, checkMultipleCollisions);
        //$(".player").animate({"top": "+=0px"}, "fast", checkmovement); this is funny im leaving this here
    }
});


class line{
  constructor(name,x,y,h,w){
      this._name = name;
      this.x = x;
      this.y = y;
      this.h = h;
      this.w = w;
      

      var html = '<div id="' + this._name + '" class="line">' + this._name + ' </div>';
      $('body').append(html);
      var className = '#' + this._name
      $(className).animate({
          top: this.y,
          left: this.x,
          width: this.w,
          height: this.h
          //sorry about this :) ↓
        }, 0.01, function() {

        })

      }
        
        getName(){
          return this._name;
        }
        SetName(theName){
          if(theName == 'lineF'){
            console.log('i guess the name is lineF');
          }else{
            this._name = theName 
          }

        }
      
}

// INSTANCES 
var infoLineE = new line ("lineE", 30, 569, 7, 1425); //left, up, height, width
var infoLineG = new line ("lineG", 30, 490, 7, 1425);
var infoLineB = new line ("lineB", 30, 411, 7, 1425);
var infoLineD = new line ("lineD", 30, 332, 7, 1425);
var infoLineF = new line ("lineF", 30, 253, 7, 1425);


var arrTargets = ["#lineE", "#lineG", "#lineB", "#lineD" , "#lineF", "#clef", "#TS"];

function getPositions(box) {
  //console.log('position:')
  //console.log(box);
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}
 
function checkMultipleCollisions(){
  for(var i = 0; i < arrTargets.length; i++){
    checkCollisions(arrTargets[i],'.player');
  }
}
 
function checkCollisions(arrTargets, theCharacter){

  var box = $(arrTargets)[0];
  var pos = getPositions(box);
  var chr = $(theCharacter);
  var pos2 = getPositions(chr);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
  if (match) { 
    var itemName = $(box).attr('id');
    itemHit = "#" + itemName;
    switch (itemName){
      case 'lineE':
          console.log('line E')
          $('#infoE').show();
          $('#infoTS').hide();
          $('#infoClef').hide();
          $('#infoG').hide();
          $('#infoB').hide();
          $('#infoD').hide();
          $('#infoF').hide();
        
          break;
      case 'lineG':
          console.log('line G')
          $('#infoTS').hide();
          $('#infoClef').hide();
          $('#infoE').hide();
          $('#infoG').show();
          $('#infoB').hide();
          $('#infoD').hide();
          $('#infoF').hide();
          $('#infoClef').hide();
          $('#infoTS').hide();
          break;
      case 'lineB':
          console.log('line B')
          $('#infoTS').hide();
          $('#infoClef').hide();
          $('#infoE').hide();
          $('#infoG').hide();
          $('#infoB').show();
          $('#infoD').hide();
          $('#infoF').hide();
          $('#infoClef').hide();
          $('#infoTS').hide();
          break;
      case 'lineD':
          console.log('line D')
          $('#infoTS').hide();
          $('#infoClef').hide();
          $('#infoE').hide();
          $('#infoG').hide();
          $('#infoB').hide();
          $('#infoD').show();
          $('#infoF').hide();
          $('#infoClef').hide();
          $('#infoTS').hide();
          break;
      case 'lineF':
          console.log('lineF')
          $('#infoTS').show();
          $('#infoClef').hide();
          $('#infoE').hide();
          $('#infoG').hide();
          $('#infoB').hide();
          $('#infoD').hide();
          $('#infoF').show();
          $('#infoClef').hide();
          $('#infoTS').hide();
          break;
      case 'clef':
          console.log('clef')
          $('#infoTS').hide();
          $('#infoClef').show();
          $('#infoE').hide();
          $('#infoG').hide();
          $('#infoB').hide();
          $('#infoD').hide();
          $('#infoF').hide();
          break;
      case 'TS':
          console.log('TS')
          $('#infoTS').show();
          $('#infoClef').hide();
          $('#infoE').hide();
          $('#infoG').hide();
          $('#infoB').hide();
          $('#infoD').hide();
          $('#infoF').hide();
          $('#infoClef').hide();
          break;
    }
  }
  }