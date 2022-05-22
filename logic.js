// Object
var user = document.getElementById("user");
var obstacle = document.getElementById("obstacle");

// User Possition Movement
var up = 0;
var left = 0;
function userUp(){
  user.style.top = up+"px"
};
function userLeft() {
  user.style.left = left+"px";
}

// User Weight and Height
var userWidth = $( user ).width();
var userHeight = $( user ).height();


// Obstacle Possition Movement
var stacleUp = 0;
var stacleLeft = 400;
function obstacleUp(){
  obstacle.style.top = stacleUp+"px"
};
function obstacleLeft() {
  obstacle.style.left = stacleLeft+"px";
}

// User Weight and Height
var obstacleWidth = $( obstacle ).width();
var obstacleHeight = $( obstacle ).height();

// Movement || Pergerakan
// Issue {Saat menggunakan double key dan mau ke singgle key, terkadang tidak mau jalan}
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a': left-=5;
    userLeft(); collision();
      break;
    case 's': up+=5;
    userUp(); collision();
      break;
    case 'w': up-=5;
    userUp(); collision();
      break;
    case 'd': left+=5;
    userLeft(); collision();
      break;
    case 'a+w': left-=5; up-=5;
    userLeft(); userUp(); collision();
      break;
    case 'a+s': left-=5; up+=5;
    userLeft(); userUp(); collision();
      break;
    case 'd+w': left+=5; up-=5;
    userLeft(); userUp(); collision();
      break;
    case 'd+s': left+=5; up+=5;
    userLeft(); userUp(); collision();
      break;
    case 'w+a': left-=5; up-=5;
    userLeft(); userUp(); collision();
      break;
    case 'w+d': left+=5; up-=5;
    userLeft(); userUp(); collision();
      break;
    case 's+a': left-=5; up+=5;
    userLeft(); userUp(); collision();
      break;
    case 's+d': left+=5; up+=5;
    userLeft(); userUp(); collision();
      break;
    default: alert(event);
  }
});

obstacleUp();
obstacleLeft();

// Collision || Tabrakan
function collision() {
  if (
    left + userWidth > stacleLeft
      ) {
      // collision detected!
      // user.style.backgroundColor = "green";
      console.log("obstacle");
  } else {
      // no collision
      // user.style.backgroundColor = "black";
      console.log(obstacleWidth);
  }};