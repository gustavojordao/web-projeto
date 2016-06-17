function init(){

  var tdeditaveis = document.getElementsByTagName('td');
  var lieditaveis = document.getElementsByTagName('li');
  var trs = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  var i;
  var novo;

  var botaoeditar;
  var botaoremover;

  for(i=0; i<tdeditaveis.length; i++){
    botaoeditar = document.createElement('img');
    botaoeditar.src = "../img/edit.png";
    botaoeditar.classList.add('botao');

    botaoeditar.addEventListener('click',
      function(e){
        novo = window.prompt("Entre com o novo valor", e.target.parentNode.textContent);
        if(novo)
          e.target.parentNode.childNodes[0].nodeValue = novo;
      }
    );

    tdeditaveis[i].appendChild(botaoeditar);

  }

  for(i=0; i<trs.length; i++){
      botaoremover = document.createElement('img');
      botaoremover.src = "../img/delete.png";
      botaoremover.classList.add('botao');

      botaoremover.addEventListener('click',
        function(e){
          //Remove tr correspondente ao botão de remoção
          e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        }
      );

      novo = document.createElement('td');
      novo.appendChild(botaoremover);

      trs[i].appendChild(novo);
  }

  for(i=0; i<lieditaveis.length; i++){
    botaoeditar = document.createElement('img');
    botaoeditar.src = "../img/edit.png";
    botaoeditar.classList.add('botao');

    botaoeditar.addEventListener('click',
      function(e){
        novo = window.prompt("Entre com o novo valor", e.target.parentNode.textContent);
        if(novo)
          e.target.parentNode.childNodes[0].nodeValue = novo;
      }
    );

    botaoremover = document.createElement('img');
    botaoremover.src = "../img/delete.png";
    botaoremover.classList.add('botao');

    botaoremover.addEventListener('click',
      function(e){
        //Remove tr correspondente ao botão de remoção
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      }
    );

    lieditaveis[i].appendChild(botaoeditar);
    lieditaveis[i].appendChild(botaoremover);
  }

}

init();
