var fs = require('fs');

var express = require('express');

var app = express();

var server = app.listen(8080,
    function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log('Servidor iniciado: http://localhost:%s', port);
    }
);

app.use(express.static('client'));

app.set('view engine', 'hbs');

app.set('views', 'server/views');

app.get('/',
  function(request, response){
    response.render('index.hbs');
  }
);

app.get('/campeonatos',
  function(request, response){
    response.render('campeonatos.hbs');
  }
);

app.get('/perfil',
  function(request, response){
    response.render('perfil.hbs');
  }
);

app.get('/cadastro',
  function(request, response){
    response.render('cadastro.hbs');
  }
);
