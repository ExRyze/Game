// Object
var user = document.getElementById("user");
var obstacle = document.getElementById("obstacle");
var obstacleD = document.getElementById("obstacleDown");

// User Possition Movement
var up = 0;
var left = 0;
function setUserUp(){
  user.style.top = up+"px"
};
function setUserLeft() {
  user.style.left = left+"px";
}

// Obstacle
var stacleUp = -100;
var stacleLeft = 400;
function setObstaclePos(){
  obstacle.style.top = stacleUp+"px"
  obstacle.style.left = stacleLeft+"px";
}

function setObstacleHeight(O) {
  let Oh = $(O).height() - 160;
  obstacle.style.height = Oh +"px";
}

setObstaclePos();
setObstacleHeight(obstacle);

function setCollision() {
  collision(up, left, user, stacleUp, stacleLeft, obstacle);
}

// ObstacleD
var stacleDUp = stacleUp + $(obstacle).height() + 160;

function setObstacleDPos(){
  obstacleD.style.top = stacleDUp +"px"
  obstacleD.style.left = stacleLeft+"px";
}

setObstacleDPos();

function setCollisionD() {
  collision(up, left, user, stacleDUp, stacleLeft, obstacleD);
};

// Movement || Pergerakan
// Issue {Saat menggunakan double key dan mau ke singgle key, terkadang tidak mau jalan}
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a': left-=5;
    setUserLeft(); setCollision(); setCollisionD();
      break;
    case 's': up+=5;
    setUserUp(); setCollision(); setCollisionD();
      break;
    case 'w': up-=5;
    setUserUp(); setCollision(); setCollisionD();
      break;
    case 'd': left+=5;
    setUserLeft(); setCollision(); setCollisionD();
      break;
    case 'a+w': left-=5; up-=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 'a+s': left-=5; up+=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 'd+w': left+=5; up-=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 'd+s': left+=5; up+=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 'w+a': left-=5; up-=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 'w+d': left+=5; up-=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 's+a': left-=5; up+=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    case 's+d': left+=5; up+=5;
    setUserLeft(); setUserUp(); setCollision(); setCollisionD();
      break;
    default: alert(event);
  }
});

// Collision || Tabrakan
function collision(Uu, Ul, U, Ou, Ol, O) {
  if (
    Ul + $(U).width() > Ol &&
    Ol + $(O).width() > Ul &&
    Ou + $(O).height() > Uu &&
    Uu + $(U).height() > Ou
      ) {
      // collision detected!
      alert("You are died!");
      document. location. reload();
  } else {
      // no collision
  }};