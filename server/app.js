var fs = require('fs');

var express = require('express');

var session = require('express-session');

var bodyparser = require('body-parser');

var app = express();

var urlEncodedParser = bodyparser.urlencoded({ extended: true });

var server = app.listen(8080,
    function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log('Servidor iniciado: http://localhost:%s', port);
    }
);

app.use(urlEncodedParser);

app.use(express.static('client'));

app.use(session({
  secret: 'usuario',
  resave: false,
  saveUninitialized: true
}));

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

app.post('/login',
  function(request, response){
    // server
    console.log(request.body);

    //Mock user como usuario e senha 123
    if(request.body.usuario == 'user' && request.body.password == '123'){
      //TODO: RESPONSE LOGIN
      //response.
      request.session.user =
      {
        id: 'gustavo',
        nome: 'Gustavo',
        email: 'gustavo@libertadero.com',
        campeonatos: [
          {
            nome: 'Libertadores',
            num_participantes: 32,
            prc_concluido: 75,
            vencedor: ''
          },
          {
            nome: 'Brasileirão',
            num_participantes: 20,
            prc_concluido: 100,
            vencedor: 'Cruzeiro'
          }
        ]
      };

      response.render('perfil.hbs', request.session.user);
    }

  }
);
