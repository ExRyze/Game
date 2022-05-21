var up = 0;
var left = 0;
function userUp(){
  document.getElementById("user").style.top = up+"px"
};
function userLeft() {
  document.getElementById("user").style.left = left+"px";
}

// Movement
hotkeys('a,w,s,d,a+w,a+s,d+w,d+s,w+a,w+d,s+a,s+d', function (event, handler){
  switch (handler.key) {
    case 'a': left-=5;
    userLeft();
      break;
    case 's': up+=5;
    userUp();
      break;
    case 'w': up-=5;
    userUp();
      break;
    case 'd': left+=5;
    userLeft();
      break;
    case 'a+w': left-=5; up-=5;
    userLeft(); userUp();
      break;
    case 'a+s': left-=5; up+=5;
    userLeft(); userUp();
      break;
    case 'd+w': left+=5; up-=5;
    userLeft(); userUp();
      break;
    case 'd+s': left+=5; up+=5;
    userLeft(); userUp();
      break;
    case 'w+a': left-=5; up-=5;
    userLeft(); userUp();
      break;
    case 'w+d': left+=5; up-=5;
    userLeft(); userUp();
      break;
    case 's+a': left-=5; up+=5;
    userLeft(); userUp();
      break;
    case 's+d': left+=5; up+=5;
    userLeft(); userUp();
      break;
    default: alert(event);
  }
});
