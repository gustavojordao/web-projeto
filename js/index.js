function init(){

  var botaologin = document.getElementById('botao-login');
  var botaologout = document.getElementById('botao-logout');

  var usuario = document.getElementById('usuario');

  var password = document.getElementById('password');

  var logindiv = document.getElementById('antes');
  var logadodiv = document.getElementById('depois');

  botaologin.addEventListener('click',
    function(e){
      if(usuario.value && password.value){
        logindiv.classList.add('oculto');
        logadodiv.classList.remove('oculto');
        document.getElementById('nomeusuario').innerHTML = usuario.value;
      }
    }
  );

  botaologout.addEventListener('click',
    function(e){
      if(usuario.value && password.value){
        logadodiv.classList.add('oculto');
        logindiv.classList.remove('oculto');
        document.getElementById('usuario').value = '';
        document.getElementById('password').value = '';
      }
    }
  );

}

init();
