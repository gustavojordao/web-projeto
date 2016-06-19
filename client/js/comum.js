function init(){

  var i;

  //Menu

  var menu = document.getElementById('menu');

  var menuitens = document.getElementsByClassName('menuitem');

  var submenus = document.getElementsByClassName('menuvert');

  var links = [
    { id: "inicial", link: "/" },
    { id: "campeonatos", link: "/campeonatos" },
    { id: "perfil", link: "/perfil" },
    { id: "criar-campeonato", link: "/novo-campeonato" },
    { id: "cadastrar", link: "/cadastro" },
    { id: "botao-login", link: "/login" }
  ];

  for(i=0; i<submenus.length; i++){
    submenus[i].addEventListener('mouseover',
      function(e){
        var submenuitems = e.currentTarget.getElementsByTagName('section');
        for(var j=1; j<submenuitems.length; j++){
          submenuitems[j].classList.remove('oculto');
        }
      }
    );

    submenus[i].addEventListener('mouseout',
      function(e){
        var submenuitems = e.currentTarget.getElementsByTagName('section');
        for(var j=1; j<submenuitems.length; j++){
          submenuitems[j].classList.add('oculto');
        }
      }
    );

    submenus[i].addEventListener('click',
      function(e){
        for(var i=0; i<links.length; i++){
          if(links[i].id == e.target.id){
            //window.open(links[i].link + '.html', '_self');
            menu.action = links[i].link;
            menu.submit();
          }
        }
      }
    );

  }

  for(i=0; i<menuitens.length; i++){
    menuitens[i].addEventListener('click',
      function(e){
        for(var i=0; i<links.length; i++){
          if(links[i].id == e.target.id){
            //window.open(links[i].link + '.html', '_self');
            menu.action = links[i].link;
            menu.submit();
          }
        }
      }
    );
  }

  //Login

  var botaologin = document.getElementById('botao-login');
  var botaologout = document.getElementById('botao-logout');

  var usuario = document.getElementById('usuario');

  var password = document.getElementById('password');

  var logindiv = document.getElementById('antes');
  var logadodiv = document.getElementById('depois');

  var loginform = document.getElementById('loginform');

  botaologin.addEventListener('click',
    function(e){
      for(var i=0; i<links.length; i++){
        if(links[i].id == e.target.id){
          /*//AJAX
            var loginRequest = new XMLHttpRequest();
            loginRequest.onreadysatechange = function(){
            if(loginRequest.readyState == 4 && loginRequest.status == 200){

            }
          }
          loginRequest.open('POST', links[i].link, true);
          loginRequest.send();*/
          //window.open(links[i].link + '.html', '_self');
          loginform.method = "POST";
          loginform.action = links[i].link;
          loginform.submit();
        }
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
