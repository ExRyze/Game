// Object
var body = document.querySelector(".body");
var user = document.getElementById("user");
var obstacle = document.getElementsByClassName("obstacle");


// User Possition Movement
var up = ($(body).height()+$(user).height())/2;
var left = 180;

function setUserUp(){
  user.style.top = up+"px"
};
function setUserLeft() {
  user.style.left = left+"px";
};
setUserUp();
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
      document. location. reload();
  }
};


// Reapeating Obstacle
var score = 100;
var el = [];
var stacleUp = [];
var stacleLeft = [];
var elD = [];
var stacleDUp = [];
var setCollision = [];


for (let i = 0; i < score; i++) {
  var header = $(body).append(document.createElement("header"));
  var footer = $(body).append(document.createElement("footer"));

  header;
  el[i] = document.querySelectorAll("header")[i];
  el[i].classList.add("obstacle");

  var staticUp = -Math.floor(Math.random() * ($(obstacle).height() - 120)) + 1;
  stacleUp[i] = staticUp;
  stacleLeft[i] = 400 * (i+1);
  
  el[i].style.top = stacleUp[i] + "px"
  el[i].style.left = stacleLeft[i] + "px";
  el[i].style.height = $(body).height() - 120 +"px";


  footer;
  elD[i] = document.querySelectorAll("footer")[i];
  elD[i].classList.add("obstacle");
  
  stacleDUp[i] = staticUp + $(obstacle).height() + 120;
    
  elD[i].style.top = stacleDUp[i] + "px"
  elD[i].style.left = stacleLeft[i] + "px";
};


function repeat() {
  for(let c = 0; c < score; c++) {
    collision(up, left, user, stacleUp[c], stacleLeft[c], el[c]); collision(up, left, user, stacleDUp[c], stacleLeft[c], elD[c]);
  };
};


// User Movement
// Issue {Saat menggunakan double key dan mau ke singgle key, terkadang tidak mau jalan}
var userSpeed = 4;
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a': left-=userSpeed;
    setUserLeft(); repeat();
      break;
    case 's': up+=userSpeed;
    setUserUp(); repeat();
      break;
    case 'w': up-=userSpeed;
    setUserUp(); repeat();
      break;
    case 'd': left+=userSpeed;
    setUserLeft(); repeat();
      break;
    case 'a+w': left-=userSpeed; up-=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 'a+s': left-=userSpeed; up+=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 'd+w': left+=userSpeed; up-=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 'd+s': left+=userSpeed; up+=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 'w+a': left-=userSpeed; up-=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 'w+d': left+=userSpeed; up-=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 's+a': left-=userSpeed; up+=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    case 's+d': left+=userSpeed; up+=userSpeed;
    setUserLeft(); setUserUp(); repeat();
      break;
    default: alert(event);
  }
});


// Obstacle Movement
var bodyLeft = 0;
var speed = 1;
body.style.left = bodyLeft + "px";

function keepForward() {
  bodyLeft -= speed;
  left += speed;

  body.style.left = bodyLeft + "px";
  user.style.left = left+"px";
  repeat();
}
var myInterval = setInterval(keepForward, 10);