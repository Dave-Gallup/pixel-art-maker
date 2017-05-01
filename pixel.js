
function selectRed(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'red';
}

function selectOrange(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'orange';
}

function selectYellow(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'yellow';
}

function selectGreen(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'green';
}

function selectBlue(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'blue';
}

function selectPurple(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'purple';
}

function selectBrown(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'brown';
}

function selectWhite(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'white';
}
function selectGrey(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'grey';
}
function selectBlack(){
  var current = document.querySelector('.currentSwatch');
  current.style.backgroundColor = 'black';
}


function addColor(){

  var color = 'black';
  var current = document.querySelector('.currentSwatch');

  if(current.style.backgroundColor === 'red'){
    color = 'red';
  }
  if(current.style.backgroundColor === 'orange'){
    color = 'orange';
  }
  if(current.style.backgroundColor === 'yellow'){
    color = 'yellow';
  }
  if(current.style.backgroundColor === 'green'){
    color = 'green';
  }
  if(current.style.backgroundColor === 'blue'){
    color = 'blue';
  }
  if(current.style.backgroundColor === 'purple'){
    color = 'purple';
  }
  if(current.style.backgroundColor === 'brown'){
    color = 'brown';
  }
  if(current.style.backgroundColor === 'white'){
    color = 'white';
  }
  if(current.style.backgroundColor === 'grey'){
    color = 'grey';
  }
  if(current.style.backgroundColor === 'black'){
    color = 'black';
  }

  this.style.backgroundColor = color;

}



var pixels = document.querySelectorAll('.pixel');

for(pixel of pixels){
  pixel.addEventListener('click', addColor);
}

var redSwatch = document.querySelector('#red');
redSwatch.addEventListener("click", selectRed);
var orangeSwatch = document.querySelector('#orange');
orangeSwatch.addEventListener("click", selectOrange);
var yellowSwatch = document.querySelector('#yellow');
yellowSwatch.addEventListener("click", selectYellow);
var greenSwatch = document.querySelector('#green');
greenSwatch.addEventListener("click", selectGreen);
var blueSwatch = document.querySelector('#blue');
blueSwatch.addEventListener("click", selectBlue);
var purpleSwatch = document.querySelector('#purple');
purpleSwatch.addEventListener("click", selectPurple);
var brownSwatch = document.querySelector('#brown');
brownSwatch.addEventListener("click", selectBrown);
var whiteSwatch = document.querySelector('#white');
whiteSwatch.addEventListener("click", selectWhite);
var greySwatch = document.querySelector('#grey');
greySwatch.addEventListener("click", selectGrey);
var blackSwatch = document.querySelector('#black');
blackSwatch.addEventListener("click", selectBlack);
