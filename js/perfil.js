function init(){
  var botaonovo = document.getElementById('botaonovo');
  var botaoalterar = document.getElementById('botaonovo');
  var botaovisualizar = document.getElementById('botaonovo');

  var linhas = document.getElementsByTagName('tr');

  botaonovo.addEventListener('click',
    function(e){
      window.open("novo-campeonato.html", "_self");
    }
  );

  botaoalterar.addEventListener('click',
    function(e){
      window.open("novo-campeonato.html", "_self");
    }
  );

  botaovisualizar.addEventListener('click',
    function(e){
      window.open("novo-campeonato.html", "_self");
    }
  );
}

init();
