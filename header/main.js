document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#de3636',
    lineColor: '#eb5a5a'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

//------------------------------------
//---МЕНЯЕМ ЦВЕТ ПО КЛИКУ---
//------------------------------------


document.getElementsByTagName('body')[0].addEventListener('click', function(e) {
        document.body.style.backgroundColor = getRandomColor();

}, true);

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

//var idBody = document.getElementById('click');
//
//idBody.onclick = function () {
//    var r = Math.floor(Math.random() * 256);
//    var g = Math.floor(Math.random() * 256);
//    var b = Math.floor(Math.random() * 256);
//    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
//    idBody.style.backgroundColor = rgb;
//};


//(function() {
//    var tBg = new Date();
//    var bgArray = ["#85c9f4", "#fcd812", "#d4d4d4", "#1C674A", "#d4d4d4"];
//    var docBg = document.body.style;
//
//
//    var ifBg = (tBg.getHours() >= 0 && tBg.getHours() <= 11 ) ? docBg.backgroundColor = bgArray[0]
//    : (tBg.getHours() > 11 && tBg.getHours() <= 16 ) ? docBg.backgroundColor = bgArray[1]
//    : (tBg.getHours() > 16 && tBg.getHours() <= 20 ) ? docBg.backgroundColor = bgArray[2]
//    : docBg.backgroundColor = bgArray[3] ;
//
//})();

//------------------------------------
//---ПРИВЕТСТВИЕ---
//------------------------------------

//var names   = [];
//
//var nameInput   = document.getElementById("name");
//var messageBox  = document.getElementById("display");
//
//var messageNext = document.getElementById("next");
//
//function insert () {
//    names.push( nameInput.value );
//    clearAndShow();
//};
//
//function clearAndShow () {
//    nameInput.value = "";
//    messageBox.innerHTML = "";
//
//    messageBox.innerHTML += "Добро пожаловать " + names[0] + " !";
//
//    setTimeout(sayHello, 2000);
//};
