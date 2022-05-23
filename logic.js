// Object
var user = document.getElementById("user");
var obstacle = document.getElementById("obstacle");

// User Possition Movement
var up = 0;
var left = 0;
function setUserUp(){
  user.style.top = up+"px"
};
function setUserLeft() {
  user.style.left = left+"px";
}

// Obstacle Possition Movement
var stacleUp = 0;
var stacleLeft = 400;
function setObstacleUp(){
  obstacle.style.top = stacleUp+"px"
};
function setObstacleLeft() {
  obstacle.style.left = stacleLeft+"px";
}

// Movement || Pergerakan
// Issue {Saat menggunakan double key dan mau ke singgle key, terkadang tidak mau jalan}
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a': left-=5;
    setUserLeft(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 's': up+=5;
    setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'w': up-=5;
    setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'd': left+=5;
    setUserLeft(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'a+w': left-=5; up-=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'a+s': left-=5; up+=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'd+w': left+=5; up-=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'd+s': left+=5; up+=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'w+a': left-=5; up-=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 'w+d': left+=5; up-=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 's+a': left-=5; up+=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    case 's+d': left+=5; up+=5;
    setUserLeft(); setUserUp(); collision(up, left, user, stacleUp, stacleLeft, obstacle);
      break;
    default: alert(event);
  }
});

setObstacleUp();
setObstacleLeft();

// Collision || Tabrakan
function collision(Uu, Ul, U, Ou, Ol, O) {
  if (
    Ul + $(U).width() > Ol &&
    Ol + $(O).width() > Ul &&
    Ou + $(O).height() > Uu &&
    Uu + $(U).height() > Ou
      ) {
      // collision detected!
      alert("You die!");
  } else {
      // no collision
  }};