function init(){

  var botaologin = document.getElementById('botao-login');
  var botaologout = document.getElementById('botao-logout');

  var usuario = document.getElementById('usuario');

  var password = document.getElementById('password');

  var logindiv = document.getElementById('login');
  var logadodiv = document.getElementById('logado');

  botaologin.addEventListener('click',
    function(e){
      if(usuario.value && password.value){
        logindiv.classList.add('escondido');
        logado.classList.remove('escondido');
        document.getElementById('nomeusuario').innerHTML = usuario.value;
      }
    }
  );

  botaologout.addEventListener('click',
    function(e){
      if(usuario.value && password.value){
        logadodiv.classList.add('escondido');
        logindiv.classList.remove('escondido');
        document.getElementById('usuario').value = '';
        document.getElementById('password').value = '';
      }
    }
  );

}

init();
