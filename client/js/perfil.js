function init(){

  var i;
  var j;

  var form = document.getElementById('tabela');

  var links = {
     add: '/adicionarcampeonato',
     edit: '/editarcampeonato',
     view: '/vercampeonato',
     delete: '/deletarcampeonato',
  };

  var indexhidden = document.getElementById('index');

  var botaoadd = document.getElementById('add');
  var botaoedit;
  var botaoview;
  var botaodelete;

  var linhas = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');



  botaoadd.addEventListener('click',
    function(e){
      form.method = 'POST';
      form.action = links.add;
      form.submit();
    }
  );

  for(i=0; i<linhas.length; i++){
    botaoedit = document.getElementById('edit'+i);
    botaoview = document.getElementById('view'+i);
    botaodelete = document.getElementById('delete'+i);

    botaoview.addEventListener('click',
      function(e){
        for(j=0; j<linhas.length; j++){
          if(e.target.id == 'view'+j){
            indexhidden.value = j;
            break;
          }
        }

        form.method = 'POST';
        form.action = links.view;
        form.submit();
      }
    );

    botaoedit.addEventListener('click',
      function(e){
        for(j=0; j<linhas.length; j++){
          if(e.target.id == 'edit'+j){
            indexhidden.value = j;
            break;
          }
        }

        form.method = 'POST';
        form.action = links.edit;
        form.submit();
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
