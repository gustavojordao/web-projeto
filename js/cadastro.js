function init(){

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var senha = document.getElementById('senha');
  var confirmacao = document.getElementById('confirmacao');

  var imagem = document.getElementById('imagem');
  var mostraimagem = document.getElementById('mostraimagem');

  var botaocadastro = document.getElementById('botaocadastro');

  botaocadastro.addEventListener('click',
    function(e){
      if(nome.value && email.value && senha.value && confirmacao.value && senha.value == confirmacao.value){
        window.open('../html/perfil.html', '_self');
      }
    }
  );

  imagem.addEventListener("valuechanged",
    function(e){
      var imagemlink = e.target.value;
      if(imagemlink){
        mostraimagem.src = imagemlink;
      }
    }
  );
}

init();
