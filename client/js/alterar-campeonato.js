function init(){

  var i;
  var j;

  var form = document.getElementById('tabela');

  var links = {
     add: '/adicionarjogo',
     edit: '/editarjogo',
     delete: '/deletarjogo'
  };

  var indexhidden = document.getElementById('index');

  var botaoadd = document.getElementById('add');
  var botaoedit;
  var botaodelete;

  var linhas = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  botaoadd.addEventListener('click',
    function(e){
      var time1, time2, placar, fase;
      var hiddentime1, hiddentime2, hiddenplacar, hiddenfase;

      time1 = window.prompt("Time 1:");
      if(time1){
        time2 = window.prompt("Time 2:");
        if(time2){
          placar = window.prompt("Placar:", "0x0");
          if(placar){
            fase = window.prompt("Fase:");
            if(fase){

              hiddentime1 = document.createElement("input");
              hiddentime1.setAttribute("type", "hidden");
              hiddentime1.setAttribute("name", "time1");
              hiddentime1.setAttribute("value", time1);
              form.appendChild(hiddentime1);

              hiddentime2 = document.createElement("input");
              hiddentime2.setAttribute("type", "hidden");
              hiddentime2.setAttribute("name", "time2");
              hiddentime2.setAttribute("value", time2);
              form.appendChild(hiddentime2);

              hiddenplacar = document.createElement("input");
              hiddenplacar.setAttribute("type", "hidden");
              hiddenplacar.setAttribute("name", "placar");
              hiddenplacar.setAttribute("value", placar);
              form.appendChild(hiddenplacar);

              hiddenfase = document.createElement("input");
              hiddenfase.setAttribute("type", "hidden");
              hiddenfase.setAttribute("name", "fase");
              hiddenfase.setAttribute("value", fase);
              form.appendChild(hiddenfase);

              form.method = 'POST';
              form.action = links.add;
              form.submit();
            }
          }
        }
      }
    }
  );

  for(i=0; i<linhas.length; i++){
    botaoedit = document.getElementById('edit'+i);
    botaodelete = document.getElementById('delete'+i);

    botaoedit.addEventListener('click',
      function(e){
        var time1, time2, placar, fase;
        var hiddentime1, hiddentime2, hiddenplacar, hiddenfase;

        time1 = window.prompt("Time 1:", e.target.parentNode.parentNode.childNodes[0].textContent);
        if(time1){
          e.target.parentNode.parentNode.childNodes[0].nodeValue = time1;

          time2 = window.prompt("Time 2:", e.target.parentNode.parentNode.childNodes[2].textContent);
          if(time2){
            e.target.parentNode.parentNode.childNodes[2].nodeValue = time2;

            placar = window.prompt("Placar:", e.target.parentNode.parentNode.childNodes[1].textContent);
            if(placar){
              e.target.parentNode.parentNode.childNodes[1].nodeValue = placar;

              fase = window.prompt("Fase:", e.target.parentNode.parentNode.childNodes[3].textContent);
              if(fase){
                e.target.parentNode.parentNode.childNodes[3].nodeValue = time2;

                for(j=0; j<linhas.length; j++){
                  if(e.target.id == 'edit'+j){
                    indexhidden.value = j;
                    break;
                  }
                }

                hiddentime1 = document.createElement("input");
                hiddentime1.setAttribute("type", "hidden");
                hiddentime1.setAttribute("name", "time1");
                hiddentime1.setAttribute("value", time1);
                form.appendChild(hiddentime1);

                hiddentime2 = document.createElement("input");
                hiddentime2.setAttribute("type", "hidden");
                hiddentime2.setAttribute("name", "time2");
                hiddentime2.setAttribute("value", time2);
                form.appendChild(hiddentime2);

                hiddenplacar = document.createElement("input");
                hiddenplacar.setAttribute("type", "hidden");
                hiddenplacar.setAttribute("name", "placar");
                hiddenplacar.setAttribute("value", placar);
                form.appendChild(hiddenplacar);

                hiddenfase = document.createElement("input");
                hiddenfase.setAttribute("type", "hidden");
                hiddenfase.setAttribute("name", "fase");
                hiddenfase.setAttribute("value", fase);
                form.appendChild(hiddenfase);

                form.method = 'POST';
                form.action = links.edit;
                form.submit();
              }
            }
          }
        }
      }
    );

    botaodelete.addEventListener('click',
      function(e){
        for(j=0; j<linhas.length; j++){
          if(e.target.id == 'delete'+j){
            indexhidden.value = j;
            break;
          }
        }

        form.method = 'POST';
        form.action = links.delete;
        form.submit();
      }
    );
  }

}

init();
