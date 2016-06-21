function init(){

  var i;

  //Select de times

  var times = window.document.getElementsByClassName('time');

  var sortear = document.getElementById('sortear');

  var naoadicionados = document.getElementById('naoadicionados');
  var adicionados = document.getElementById('adicionados');

  var listaNaoAdicionados = [];
  var listaAdicionados = [];

  for(i=1; i<naoadicionados.length; i++){
    listaNaoAdicionados.push(naoadicionados.options[i].value);
  }

  naoadicionados.addEventListener('change',
    function(e){
      var option;
      if(!naoadicionados.options[0].selected){
        for(i=1; i<naoadicionados.options.length; i++){
          if(naoadicionados.options[i].selected){
            option = naoadicionados.options[i];
            naoadicionados.removeChild(option);
            option.selected = false;
            adicionados.appendChild(option);
            listaNaoAdicionados.splice(i-1, 1);
            listaAdicionados.push(option.value);
            naoadicionados.options[0].selected = true;
            i--;
            break;
          }
        }
      }
    }
  );

  adicionados.addEventListener('change',
    function(e){
      var option;
      if(!adicionados.options[0].selected){
        for(i=1; i<adicionados.options.length; i++){
          if(adicionados.options[i].selected){
            option = adicionados.options[i];
            adicionados.removeChild(option);
            option.selected = false;
            naoadicionados.appendChild(option);
            listaAdicionados.splice(i-1, 1);
            listaNaoAdicionados.push(option.value);
            adicionados.options[0].selected = true;
            i--;
            break;
          }
        }
      }
    }
  );

  //Números de participantes

  var numero = document.getElementById('numero');

  var numeroup = document.getElementById('numero-up');
  var numerodown = document.getElementById('numero-down');

  numeroup.addEventListener('click',
    function(e){
      var valor = numero.value;
      if(valor < 64)
        numero.value = valor * 2;
    }
  );

  numerodown.addEventListener('click',
    function(e){
      var valor = numero.value;
      if(valor > 2)
        numero.value = valor / 2;
    }
  );

  //Botão Sortear

  /*sortear.addEventListener('click',
    function(e){
      var sorteado;
      var option;
      for(i=listaAdicionados.length; i<numero.value; i++){
        sorteado = Math.floor(Math.random()*(listaNaoAdicionados.length));
        option = naoadicionados.options[sorteado+1];
        listaAdicionados.push(listaNaoAdicionados[sorteado]);
        adicionados.appendChild(option);
        listaNaoAdicionados.splice(sorteado, 1);
        naoadicionados.removeChild(option);
        alert('A: '+listaAdicionados + '\nN: '+listaNaoAdicionados);
      }
      alert('A: '+listaAdicionados + '\nN: '+listaNaoAdicionados);
    }
  );*/

  //Botão Criar
  var botaocriar = document.getElementById('botaocriar');

  var formcampeonato = document.getElementById('formcampeonato');

  botaocriar.addEventListener('click',
    function(e){
      e.preventDefault();
      var input;
      var times = listaAdicionados[0];

      if(listaAdicionados.length == numero.value){
        for(i=1; i<listaAdicionados.length; i++){
          times = times + ';' + listaAdicionados[i];
        }
        input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "times");
        input.setAttribute("value", times);
        formcampeonato.appendChild(input);

        formcampeonato.method = 'POST';
        formcampeonato.action = '/adicionandocampeonato';
        formcampeonato.submit();
      }
      else if(listaAdicionados.length < numero.value){
        alert('Selecione mais times.');
      }
      else{
        alert('Selecione menos times.');
      }
    }
  );

}

init();
