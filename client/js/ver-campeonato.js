function init(){

  var concluidas = document.getElementById('partidasconcluidas');
  var numtimes = document.getElementById('numtimes');

  var porcentagem = concluidas.value/(numtimes.value-1);

  var concluido = document.getElementById('concluido');
  var barra = document.getElementById('barra');

  concluido.style.width = (100*porcentagem).toFixed(0) + 'px';
  concluido.innerHTML = (100*porcentagem).toFixed(0) + '%';

}

init();
