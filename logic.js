// Object
var body      = document.querySelector(".body");
    user      = document.getElementById("user");
    obstacle  = document.getElementsByClassName("obstacle");


// Object Properties
var windowWidth     = $(window).width();
    bodyHeight      = $(body).height();
    bodyWidth       = $(body).width();
    userHeight      = $(user).height();
    userWidth       = $(user).width();


// User Possition Movement
var userTop   = (bodyHeight + userHeight)/2;
    userLeft  = 180;

function setUserTop(){
  user.style.top = userTop+"px"
};
function setUserLeft() {
  user.style.left = userLeft+"px";
};
setUserTop();
setUserLeft();


// Collision || Tabrakan
function collision(Uu, Ul, U, Ou, Ol, O) {
  if (
    Ul + $(U).width() > Ol &&
    Ol + $(O).width() > Ul &&
    Ou + $(O).height() > Uu &&
    Uu + $(U).height() > Ou
      ) {
      alert("You are died!");
      clearInterval(myInterval);
      clearInterval(nonEscape);
      document. location. reload();
  }
};


// Reapeating Obstacle
var obstacleQuantity  = 50;
    obstacleHeader    = [];
    obstacleHTop      = [];
    obstacleLeft      = [];
    obstacleFooter    = [];
    obstacleFTop      = [];

for (let i = 0; i < obstacleQuantity; i++) {
  var header = $(body).append(document.createElement("header"));
      footer = $(body).append(document.createElement("footer"));

  header;
  obstacleHeader[i] = document.querySelectorAll("header")[i];
  obstacleHeader[i].classList.add("obstacle");

  var staticUp        = -Math.floor(Math.random() * ($(obstacle).height() - 120)) + 1;
      obstacleHTop[i] = staticUp;
      obstacleLeft[i] = 800 + (400 * (i+1));
  
  obstacleHeader[i].style.top = obstacleHTop[i] + "px"
  obstacleHeader[i].style.left = obstacleLeft[i] + "px";
  obstacleHeader[i].style.height = bodyHeight - 120 +"px";


  footer;
  obstacleFooter[i] = document.querySelectorAll("footer")[i];
  obstacleFooter[i].classList.add("obstacle");
  
  obstacleFTop[i]   = staticUp + $(obstacle).height() + 120;
    
  obstacleFooter[i].style.top = obstacleFTop[i] + "px"
  obstacleFooter[i].style.left = obstacleLeft[i] + "px";
};

function repeat() {
  for(let c = 0; c < obstacleQuantity; c++) {
    collision(userTop, userLeft, user, obstacleHTop[c], obstacleLeft[c], obstacleHeader[c]);
    collision(userTop, userLeft, user, obstacleFTop[c], obstacleLeft[c], obstacleFooter[c]);
  };
};


// User Movement
var userSpeed = 4;
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a+w': userLeft-=userSpeed; userTop-=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 'a+s': userLeft-=userSpeed; userTop+=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 'd+w': userLeft+=userSpeed; userTop-=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 'd+s': userLeft+=userSpeed; userTop+=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 'w+a': userLeft-=userSpeed; userTop-=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 'w+d': userLeft+=userSpeed; userTop-=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 's+a': userLeft-=userSpeed; userTop+=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 's+d': userLeft+=userSpeed; userTop+=userSpeed; setUserLeft(); setUserTop(); repeat(); setUserScore();
      break;
    case 'a'  : userLeft-=userSpeed;                     setUserLeft();               repeat(); setUserScore();
      break;
    case 's'  :                      userTop+=userSpeed;                setUserTop(); repeat(); setUserScore();
      break;
    case 'w'  :                      userTop-=userSpeed;                setUserTop(); repeat(); setUserScore();
      break;
    case 'd'  : userLeft+=userSpeed;                     setUserLeft();               repeat(); setUserScore();
      break;
    default   : alert(event);
  }
});


// Obstacle Movement
var bodyLeft  = 0;
    speed     = 1;

body.style.left = bodyLeft + "px";

function keepForward() {
  bodyLeft -= speed;

  body.style.left = bodyLeft + "px";
  repeat();
}
var myInterval = setInterval(keepForward, 10);


// Score
function setScore(Scr) {
  if(Scr <= 0) {return 0};
  if(Scr >= 0) {return Scr}
}
function setUserScore() {
  document.querySelector(".score").innerHTML = "Score : " + setScore(Math.floor((userLeft-800)/400));
}
setUserScore();


// Disabling Escape from Window
function noEscape() {
  if(userLeft <= Math.abs(bodyLeft))
    {userLeft = Math.abs(bodyLeft); setUserLeft(); setUserScore();};

  if(userTop <= 0)
    {userTop = 0; setUserTop();};

  if(userTop + userHeight >= bodyHeight)
    {userTop = bodyHeight - userHeight; setUserTop();};

  if(userLeft + userWidth >= windowWidth + Math.abs(bodyLeft))
    {userLeft = (windowWidth + Math.abs(bodyLeft)) - userWidth; setUserLeft();};
};
var nonEscape = setInterval(noEscape, 10);