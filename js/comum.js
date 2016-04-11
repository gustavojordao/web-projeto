function init(){

  var i;

  //Menu

  var menuitens = document.getElementsByClassName('menuitem');

  var submenus = document.getElementsByClassName('menuvert');

  var links = [
    { id: "inicial", link: "index" },
    { id: "campeonatos", link: "campeonatos" },
    { id: "times", link: "times" },
    { id: "perfil", link: "perfil" },
    { id: "criar-campeonato", link: "novo-campeonato" },
    { id: "cadastrar", link: "cadastro" }
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
            window.open(links[i].link + '.html', '_self');
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
            window.open(links[i].link + '.html', '_self');
          }
        }
      }
    );
  }

}

init();
