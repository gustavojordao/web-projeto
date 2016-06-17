function init(){

  var i;

  var botaonovo;
  var botoesalterar;
  var botoesver;

  var linhas = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  var tdbotoes;

  for(i=0; i<linhas.length; i++){
    tdbotoes = document.createElement('td');
    tdbotoes.innerHTML = '<img class="botao ver" src="../img/view.png"/><img class="botao alterar" src="../img/edit.png"/>';
    linhas[i].appendChild(tdbotoes);
  }

  botaonovo = document.getElementById('botaonovo');
  botoesalterar = document.getElementsByClassName('botao alterar');
  botoesver = document.getElementsByClassName('botao ver');

  botaonovo.addEventListener('click',
    function(e){
      window.open("novo-campeonato.html", "_self");
    }
  );

  for(i=0; i<botoesalterar.length; i++){
    botoesalterar[i].addEventListener('click',
      function(e){
        window.open("alterar-campeonato.html", "_self");
      }
    );
  }

  for(i=0; i<botoesver.length; i++){
    botoesver[i].addEventListener('click',
      function(e){
        window.open("ver-campeonato.html", "_self");
      }
    );
  }
}

init();
