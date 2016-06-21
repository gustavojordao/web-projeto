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
      //for(var i=0; i<links.length; i++){
        //if(links[i].id == e.target.id){
          /*//AJAX
            var loginRequest = new XMLHttpRequest();
            loginRequest.onreadysatechange = function(){
            if(loginRequest.readyState == 4 && loginRequest.status == 200){

            }
          }
          loginRequest.open('POST', links[i].link, true);
          loginRequest.send();*/
          //window.open(links[i].link + '.html', '_self');
          cadastroform.enctype = "multipart/form-data";
          cadastroform.method = "POST";
          cadastroform.action = "/adicionarusuario";
          cadastroform.submit();
        //}
      //}
    }
  );

/*  botaocadastro.addEventListener('click',
    function(e){
      if(nome.value && email.value && senha.value && confirmacao.value && senha.value == confirmacao.value){
        window.open('../html/perfil.html', '_self');
      }


    }
  );*/

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
