// Object
var body = document.querySelector(".body");
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
// var stacleUp = -Math.floor(Math.random() * ($(obstacle).height() - 160)) + 1;
// var stacleLeft = 400;

// function setObstaclePos(){
//   obstacle.style.top = stacleUp+"px"
//   obstacle.style.left = stacleLeft+"px";
// }
// function setObstacleHeight(O) {
//   let Oh = $(O).height() - 160;
//   obstacle.style.height = Oh +"px";
// }
// setObstaclePos();
// setObstacleHeight(obstacle);

// function setCollision() {
//   collision(up, left, user, stacleUp, stacleLeft, obstacle);
// }


// Obstacle Down
// var stacleDUp = stacleUp + $(obstacle).height() + 160;

// function setObstacleDPos(){
//   obstacleD.style.top = stacleDUp +"px"
//   obstacleD.style.left = stacleLeft+"px";
// }
// setObstacleDPos();

// function setCollisionD() {
//   collision(up, left, user, stacleDUp, stacleLeft, obstacleD);
// };


// Movement || Pergerakan
// Issue {Saat menggunakan double key dan mau ke singgle key, terkadang tidak mau jalan}
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a': left-=5;
    setUserLeft();
      break;
    case 's': up+=5;
    setUserUp();
      break;
    case 'w': up-=5;
    setUserUp();
      break;
    case 'd': left+=5;
    setUserLeft();
      break;
    case 'a+w': left-=5; up-=5;
    setUserLeft(); setUserUp();
      break;
    case 'a+s': left-=5; up+=5;
    setUserLeft(); setUserUp();
      break;
    case 'd+w': left+=5; up-=5;
    setUserLeft(); setUserUp();
      break;
    case 'd+s': left+=5; up+=5;
    setUserLeft(); setUserUp();
      break;
    case 'w+a': left-=5; up-=5;
    setUserLeft(); setUserUp();
      break;
    case 'w+d': left+=5; up-=5;
    setUserLeft(); setUserUp();
      break;
    case 's+a': left-=5; up+=5;
    setUserLeft(); setUserUp();
      break;
    case 's+d': left+=5; up+=5;
    setUserLeft(); setUserUp();
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
      // alert("You are died!");
      // document. location. reload();
      console.log("Obstacle")
  } else {
      // no collision
      console.log("Safe")
  }};


// Reapeating Obstacle
var score = 4;
for (let i = 0; i < score; i++) {
  // Nanti tambahin left dan 
  var element = $(body).append(document.createElement("header"));
  var elementD = $(body).append(document.createElement("footer"));
  var stacleLeft = 400 * (i+1);

  function setClassElement(e) {
    e;

    var el = document.querySelectorAll("header")[i];

    el.classList.add("obstacle");

    var stacleUp = -Math.floor(Math.random() * ($(el).height() - 120)) + 1;
  
    function setObstaclePos(){
      el.style.top = stacleUp+"px"
      el.style.left = stacleLeft+"px";
    }
    function setObstacleHeight(O) {
      let Oh = $(O).height() - 160;
      O.style.height = Oh +"px";
    }
    setObstaclePos();
    setObstacleHeight(el);

    // const setCollisions = []; setCollisions[i] = 
    function setCollision() {collision(up, left, user, stacleUp, stacleLeft, el);};
    // setCollision();
    

    function setClassElementD(eD) {
      eD;
  
      var elD = document.querySelectorAll("footer")[i];
  
      elD.classList.add("obstacle");
  
      var stacleDUp = stacleUp + $(elD).height() + 120;
    
      function setObstacleDPos(){
        elD.style.top = stacleDUp +"px"
        elD.style.left = stacleLeft+"px";
      }
      setObstacleDPos();

      // const setCollisionDs = []; setCollisionDs[i] = 
      function setCollisionD() {collision(up, left, user, stacleDUp, stacleLeft, elD);};
      // setCollisionD();
    };
    setClassElementD(elementD);
  };
  setClassElement(element);



  console.log(i);
};

// function repeat() {
//   for(let i = 0; i < score; i++) {

//   }
// }


hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a':
    setClassElementD().setCollisionD();
      break;
    case 's':
    setClassElementD().setCollisionD();
      break;
    case 'w':
    setClassElementD().setCollisionD();
      break;
    case 'd':
    setClassElementD().setCollisionD();
      break;
    case 'a+w':
    setClassElementD().setCollisionD();
      break;
    case 'a+s':
    setClassElementD().setCollisionD();
      break;
    case 'd+w':
    setClassElementD().setCollisionD();
      break;
    case 'd+s':
    setClassElementD().setCollisionD();
      break;
    case 'w+a':
    setClassElementD().setCollisionD();
      break;
    case 'w+d':
    setClassElementD().setCollisionD();
      break;
    case 's+a':
    setClassElementD().setCollisionD();
      break;
    case 's+d':
    setClassElementD().setCollisionD();
      break;
    default: alert(event);
  }
});


// Critical Issue : the Collision doesn't work !!!