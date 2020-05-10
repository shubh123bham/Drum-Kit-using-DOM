
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () 
  {
    
    var ok= this.innerHTML;
    addAnimation(ok);
    switch(ok)
    {
      case 'w':
      var x= new Audio("./sounds/tom-1.mp3");
      x.play();
      break;
      case 'a':
      var x= new Audio("./sounds/tom-2.mp3");
      x.play();
      break;
      case 's':
      var x= new Audio("./sounds/tom-3.mp3");
      x.play();
      break;
      case 'd':
      var x= new Audio("./sounds/tom-4.mp3");
      x.play();
      break;
      case 'j':
      var x= new Audio("./sounds/snare.mp3");
      x.play();
      break;
      case 'k':
      var x= new Audio("./sounds/crash.mp3");
      x.play();
      break;
      case 'l':
      var x= new Audio("./sounds/kick-bass.mp3");
      x.play();
      break;

    }
  });
}

document.addEventListener("keypress", function (event) {

  var value=event.key;
  addAnimation(value);

  switch(value)
  {
      case 'w':
      var x= new Audio("./sounds/tom-1.mp3");
      x.play();
      break;
      case 'a':
      var x= new Audio("./sounds/tom-2.mp3");
      x.play();
      break;
      case 's':
      var x= new Audio("./sounds/tom-3.mp3");
      x.play();
      break;
      case 'd':
      var x= new Audio("./sounds/tom-4.mp3");
      x.play();
      break;
      case 'j':
      var x= new Audio("./sounds/snare.mp3");
      x.play();
      break;
      case 'k':
      var x= new Audio("./sounds/crash.mp3");
      x.play();
      break;
      case 'l':
      var x= new Audio("./sounds/kick-bass.mp3");
      x.play();
      break;
    }

  }
  );

  function addAnimation(currentClass)
  {
   document.querySelector("."+ currentClass).classList.add("pressed");

   setTimeout(function(){
    document.querySelector("."+ currentClass).classList.remove("pressed");
   },100);
  }




