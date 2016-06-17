function init(){
  var num = Math.floor((Math.random()*4)+1);
  var erro = document.getElementById('erro');
  erro.src = "../img/erro" + num + '.jpg';
}

init();
