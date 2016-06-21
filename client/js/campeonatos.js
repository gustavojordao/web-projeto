function init(){
  var i;
  var j;

  var form = document.getElementById('tabela');
  var botaoview;

  var indexhidden = document.getElementById('index');

  var linhas = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');


  for(i=0; i<linhas.length; i++){
    botaoview = document.getElementById('view'+i);

    botaoview.addEventListener('click',
      function(e){
        for(j=0; j<linhas.length; j++){
          if(e.target.id == 'view'+j){
            indexhidden.value = j;
            break;
          }
        }

        form.method = 'POST';
        form.action = '/vercampeonato';
        form.submit();
      }
    );
  }
}

init();
