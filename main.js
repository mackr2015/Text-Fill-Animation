var empty = document.getElementById('empty');
var black = document.getElementById('black');


black.style.width = "0px";

var animation = setInterval(function(){
    console.log(black.style.width);
    if(black.style.width == "1200px"){
        clearInterval(animation);
      }else {
        black.style.width = parseInt(black.style.width,10)+4 +"px";
      }

},10);