function init(){

  var submenus = document.getElementsByClassName('menuvert');

  for(var i=0; i<submenus.length; i++){
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

  }

}

init();
