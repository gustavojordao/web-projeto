function init(){

  //Checkbox de times

  var times = window.document.getElementsByClassName('time');

  for(var i=0; i<times.length; i++){
    times[i].addEventListener('click',
      function(e){
        var divpai = e.target.parentNode.parentNode;
        if(divpai.id == 'add-times'){
            document.getElementById('ja-adicionados').appendChild(e.target.parentNode);
            //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
        else if(divpai.id == 'ja-adicionados'){
          document.getElementById('add-times').appendChild(e.target.parentNode);
          //e.target.parentNode.parentNode.removeChild(e.target.parentNode);

        }
      }
    );
  }

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

}

init();
