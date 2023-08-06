//this function returns ascii value of pressed key in keynum
function myKeyPress(e){
  var keynum;
  if(window.event) { // IE                  
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera                 
    keynum = e.which;
  }


if(keynum==97|| keynum==65){
    a();
}
if(keynum==115|| keynum==83){
    s();
}
if(keynum==100|| keynum==68){
    d();
}
if(keynum==106|| keynum==74){
    j();
}
if(keynum==107|| keynum==75){
    k();
}
if(keynum==108|| keynum==76){
    l();
}
}





  

    function a() {
      animation('a')
      makeSound('a');
    }
    function s() {
      animation('s')
      makeSound('s');
    }
    function d() {
      animation('d')
      makeSound('d');
    }
    function j() {
      animation('j')
      makeSound('j');
    }
    function k() {
      animation('k')
      makeSound('k');
    }
    function l() {
      animation('l')
      makeSound('l');
    }

function makeSound(key) {

  switch (key) {

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;

    case "l":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;


    default: console.log(key);

  }
}



function animation(id) {
  document.getElementById(id).className = '';
  document.getElementById(id).className = 'Animation';
  setTimeout(() => {
    document.getElementById(id).className = '';
  }, 500)
}