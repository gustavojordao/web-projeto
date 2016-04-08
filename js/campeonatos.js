function init(){
  var botaonovo = document.getElementById('botaonovo');

  botaonovo.addEventListener('click',
    function(e){
      window.open("novo-campeonato.html", "_self");
    }
  );
}

init();
