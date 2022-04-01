//keys  


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
var lineE = new line ("lineE", 30, 569, 7, 1425); //left, up, height, width
var lineG = new line ("lineG", 30, 490, 7, 1425);
var lineB = new line ("lineB", 30, 411, 7, 1425);
var lineD = new line ("lineD", 30, 332, 7, 1425);
var lineF = new line ("lineF", 30, 253, 7, 1425);


var arrTargets = ["#lineE","#lineG", "#lineB", "#lineD", "#lineF"];
 
function getPositions(box) {
  console.log('position:')
  console.log(box);
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
 
function checkCollisions(target, theCharacter){
 
    var box = $(target)[0];
    var pos = getPositions(box);
    var chr = $(theCharacter);
    var pos2 = getPositions(chr);
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);            
    var match = horizontalMatch && verticalMatch;
    if (match) { $("body").append("<p>COLLISION !!!</p>"); }
    //casewhere will make a comeback
    var itemName = $(box).attr('id');
    itemHit = "#" + itemName;
    switch (itemName){
      case 'lineE':
          $('.player').animate({"top": "-=50px"}, 0.00001);
          break;
      case 'lineG':
          $('.player').animate({"top": "+=50px"}, 0.00001);
          break;
      case 'lineB':
          $('.player').animate({"left": "+=50px"}, 0.00001);
          break;
      case 'lineD':
          $('.player').animate({"left": "-=50px"}, 0.00001);
          break;
      case 'lineF':
          $('#gameover').show(); 
          $('#tryAgain').show();
          $('.player').toggle("explode", 300);
          $('#finish').css("background-color", "yellow");
          // clearInterval(enemy1Interval) //keeps animating unless only 1 animation is performed
          // clearInterval(enemy2Interval)
    }
}