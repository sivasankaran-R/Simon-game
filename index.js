
var buttonColour = ["red", "blue", "green", "yellow"];

var gameValue = [];
var userValue = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {

  var userPick = $(this).attr("id");

  userValue.push(userPick);

  sound(userPick);
  
  animation(userPick);

  checkAnswer(userValue.length-1);

});

function checkAnswer(levelNow) {

  if (gameValue[levelNow]===userValue[levelNow]){

    if (userValue.length === gameValue.length){

      setTimeout (function() {

      nextSequence();
      } ,1000);
    }
  }
  else {
    sound("wrong");

     $("body").addClass("game-over");
     $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {

        $("body").removeClass("game-over");

      }, 200);

      startOver();

  }
  
 }

function nextSequence() {

  userValue = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

    var randomPick = buttonColour[randomNumber];

    gameValue.push(randomPick);

    $("#" + randomPick).fadeIn(100).fadeOut(100).fadeIn(100);

   sound(randomPick);

    
}

function animation(color){
  $("#" + color ).addClass("pressed");

  setTimeout(function() {
  $("#" + color).removeClass("pressed")},100);
}


function sound(music){
  var audio = new Audio("sounds/" + music + ".mp3" );
  audio.play();

}


 
 function startOver()
 {

  level = 0;

   gameValue=[];

  started = false;

 }




