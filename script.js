var rat1 = document.getElementById("rat1");
var rat2 = document.getElementById("rat2");
var rat3 = document.getElementById("rat3");
var rat4 = document.getElementById("rat4");
var rat5 = document.getElementById("rat5");
var rat6 = document.getElementById("rat6");
var score = document.getElementById("score");
                 //  increase score
var count = 0;
                  //  rat up //down
var count2 = 0;

var game = document.getElementById("game");
var youwin = document.getElementById("youwin");
var youlost = document.getElementById("youlost");



 var sound1 = document.getElementById("sound1");
 var sound2 = document.getElementById("sound2");
 var sound3 = document.getElementById("sound3");
 var sound4 = document.getElementById("sound4");
 var sound5= document.getElementById("sound5");


alert("your score will increase when you mouseover on rat and if your score will become 6 you won otherwise you lost ");
alert("please press ok for play game");



setInterval(function () {
                                   // random //genrate 1 to 6 
  var random = Math.floor(Math.random() * 6) + 1;
  count2++;

  var rat = "rat" + random;

  //         eval //convert                //stringtofuntion 
  var ra = eval(rat);
  //bg // sound play
  sound1.play();
  ra.classList.add("animate");
  setTimeout(function () {
    ra.classList.remove("animate");
  }, 1000);
  ra.onmouseover = function () {
    count++;
    //onclick //sound // play
    sound4.play();
    score.innerHTML = count;
  };
}, 1000);

// display //you win
setInterval(function () {
  if (count > 5) {
    youwin.style.display = "block";
    game.style.display = "none";
    //bg sound
    sound1.pause();
    //win sound 
    sound5.play();
  }
  // gameover
  
  else  if (count2 > 10) {
    youlost.style.display = "block";
    game.style.display = "none";
    //bg sound 
    sound1.pause();
    //lost sound 
    sound3.play();
  }
}, 10);
