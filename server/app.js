var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/libertadero';

MongoClient.connect(url, function(err, db){
    console.log('Banco de dados conectado.');
  }
);


var md5 = require('md5');

var db = {
  usuarios: [
    {
      id: 'user',
      password: md5('123'),
      nome: 'Gustavo',
      email: 'gustavo@libertadero.com',
      campeonatos: [
        {
          id: 1,
          nome: 'Libertadores',
          num_participantes: 32,
          prc_concluido: 75,
          vencedor: '',
          times: [
            'Cruzeiro',
            'Atlético-MG',
            'Boca Juniors',
            'River Plate'
          ],
          jogos: [
            {
              id: 1,
              time1: 'Cruzeiro',
              placarTime1: 6,
              time2: 'Atlético-MG',
              placarTime2: 1,
              fase: 'Final'
            },
            {
              id: 2,
              time1: 'Cruzeiro',
              placarTime1: 2,
              time2: 'Boca Juniors',
              placarTime2: 1,
              fase: 'Semi-final'
            },
            {
              id: 3,
              time1: 'Cruzeiro',
              placarTime1: 3,
              time2: 'River Plate',
              placarTime2: 2,
              fase: 'Quartas-de-final'
            }
          ]
        },
        {
          id: 2,
          nome: 'Brasileirão',
          num_participantes: 20,
          prc_concluido: 100,
          vencedor: 'Cruzeiro',
          times: [
            'Cruzeiro',
            'Atlético-MG',
            'Grêmio',
            'Internacional'
          ],
          jogos: [
            {
              id: 1,
              time1: 'Cruzeiro',
              placarTime1: 6,
              time2: 'Atlético-MG',
              placarTime2: 1,
              fase: 'Final'
            },
            {
              id: 2,
              time1: 'Cruzeiro',
              placarTime1: 3,
              time2: 'Grêmio',
              placarTime2: 1,
              fase: 'Semi-final'
            },
            {
              id: 3,
              time1: 'Cruzeiro',
              placarTime1: 5,
              time2: 'Internacional',
              placarTime2: 4,
              fase: 'Quartas-de-final'
            }
          ]
        }
      ]
    }
  ],
  times: [
    'Cruzeiro',
    'Atlético-MG',
    'Boca Juniors',
    'River Plate',
    'Grêmio',
    'Internacional'
  ]
}

var userindex;

var campindex;

var fs = require('fs');

var _ = require('underscore');

var express = require('express');

var cookieParser = require('cookie-parser');

var session = require('express-session');

var bodyparser = require('body-parser');

var flash = require('req-flash');

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

app.use(cookieParser());

app.use(session({
  secret: 'usuario',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());


app.set('view engine', 'hbs');

app.set('views', 'server/views');

app.get('/',
  function(request, response){
    var param = {};

    campindex = undefined;

    if(request.session.user){
      param.user = request.session.user;
//      response.render('index.hbs', { user: request.session.user });
    }

    if(request.session.success){
      param.success = request.session.success;
      request.session.success = undefined;
//      response.render('index.hbs', { user: request.session.user });

    }
    response.render('index.hbs', param);

  }
);

app.get('/campeonatos',
  function(request, response){
    response.render('campeonatos.hbs', { usuarios: db.usuarios});
  }
);

app.get('/perfil',
  function(request, response){
    var param = {};

    campindex = undefined;

    if(request.session.user){
      param.user = request.session.user;
//      response.render('index.hbs', { user: request.session.user });
    }

    if(request.session.success){
      param.success = request.session.success;
      request.session.success = undefined;
//      response.render('index.hbs', { user: request.session.user });
    }

    if(request.session.user){
      response.render('perfil.hbs', param);
    }
    else{
      response.redirect('/cadastro');
    }
  }
);

app.get('/cadastro',
  function(request, response){
    if(request.session.user){
      response.redirect('/');
    }
    else{
      response.render('cadastro.hbs');
    }
  }
);

app.post('/adicionarusuario',
  function(request, response){
    //TODO: Verificar se usuario ja foi previamente cadastrado
    var user = _.find(db.usuarios, function(usuario){
      return usuario.id == request.body.usuario;
    });

    if(request.files.imagem){
      fs.readFile(req.files.displayImage.path, function (err, data) {
      // ...
        var newPath = __dirname + "/uploads/uploadedFileName";
        fs.writeFile(request.body.usuario.id, data, function (err) {
          //res.redirect("back");
        });
      });

    }

    if(user){
      response.render('cadastro.hbs', { error: 'Nome de usuário já cadastrado no sistema.' });
    }
    else{
      db.usuarios.push(
        {
          id: request.body.usuario,
          password: md5(request.body.senha),
          nome: request.body.nome,
          email: request.body.email,
          campeonatos: []
        }
      );
      //response.render('index.hbs', { success: 'Usuário cadastrado com sucesso.' });
      request.session.success = 'Usuário cadastrado com sucesso.';
      response.redirect('/');
    }

  }
);

app.post('/login',
  function(request, response){

    var user;
    // server

    //Mock user como usuario e senha 123
    //if(request.body.usuario == 'user' && request.body.password == '123'){
      //TODO: RESPONSE LOGIN
      //response.
      userindex = _.findIndex(db.usuarios, function(usuario){
        return usuario.id == request.body.usuario;
      });

      if(userindex > -1){
        user = db.usuarios[userindex];
      }

      if(user){
        if(user.password == md5(request.body.password)){
          request.session.user = user;
          response.redirect('/perfil');
        }
        else{
          //TODO: senha invalida
          response.render('index.hbs', { error: 'Usuário ou senha incorretos.' });
        }
      }
      else{
        //TODO: usuario invalido
        response.render('index.hbs', { error: 'Usuário ou senha incorretos.' });
      }
    }

  //}
);

app.post('/logout',
  function(request, response){
    request.session.user = undefined;
    userindex = undefined;
    response.redirect('/');
  }
);

app.post('/adicionarcampeonato',
  function(request, response){

    response.render('novo-campeonato.hbs', { times: db.times });
    //request.session.campeonato = undefined;
  }
);

app.post('/adicionandocampeonato',
  function(request, response){

    var times = request.body.times.split(';');

    var campeonato = {
      nome: request.body.nome,
      num_participantes: times.length,
      prc_concluido: 0,
      vencedor: '',
      times: times,
      jogos: []
    }

    var user = request.session.user;

    user.campeonatos.push(campeonato);

    db.usuarios[userindex] = user;

    request.session.user = user;
    request.session.success = 'Campeonato adicionado com sucesso.';

    response.redirect('/perfil');
    //request.session.campeonato = undefined;
  }
);

app.post('/adicionarjogo',
  function(request, response){

    var user = request.session.user;

    var campeonato = user.campeonatos[campindex];

    var jogo = campeonato.jogos[request.body.index];

    var placar = request.body.placar.split('x');

    jogo = {
      time1: request.body.time1,
      placarTime1: placar[0],
      time2: request.body.time2,
      placarTime2: placar[1],
      fase: request.body.fase
    }

    campeonato.jogos.push(jogo);

    db.usuarios[userindex].campeonatos[campindex] = campeonato;

    request.session.user = db.usuarios[userindex];

    request.session.campeonato = campeonato;

    request.body.index = campindex;

    response.redirect('/perfil');
    //request.session.campeonato = undefined;
  }
);


app.post('/vercampeonato',
  function(request, response){

    campindex = request.body.index;

    var campeonato = request.session.user.campeonatos[request.body.index];

    response.render('ver-campeonato.hbs', { user: request.session.user, campeonato: campeonato });
    //request.session.campeonato = undefined;
  }
);

app.post('/editarcampeonato',
  function(request, response){

    campindex = request.body.index;

    var campeonato = request.session.user.campeonatos[request.body.index];

    response.render('alterar-campeonato.hbs', { user: request.session.user, campeonato: campeonato });
    //request.session.campeonato = undefined;
  }
);

app.post('/deletarcampeonato',
  function(request, response){

    var user = request.session.user;

    user.campeonatos.splice(request.body.index, 1);

    db.usuarios[userindex] = user;

    request.session.user = user;
    request.session.success = 'Campeonato excluído com sucesso.';

    response.redirect('/perfil');
    //request.session.campeonato = undefined;
  }
);

app.post('/editarjogo',
  function(request, response){

    var user = request.session.user;

    var campeonato = user.campeonatos[campindex];

    var jogo = campeonato.jogos[request.body.index];

    var placar = request.body.placar.split('x');

    jogo = {
      time1: request.body.time1,
      placarTime1: placar[0],
      time2: request.body.time2,
      placarTime2: placar[1],
      fase: request.body.fase
    }

    campeonato.jogos[request.body.index] = jogo;

    db.usuarios[userindex].campeonatos[campindex] = campeonato;

    request.session.user = db.usuarios[userindex];

    request.session.campeonato = campeonato;

    request.body.index = campindex;

    response.redirect('/perfil');
    //request.session.campeonato = undefined;
  }
);

app.post('/deletarjogo',
  function(request, response){

    var user = request.session.user;

    user.campeonatos[campindex].jogos.splice(request.body.index, 1);

    db.usuarios[userindex] = user;

    request.session.user = user;
    request.session.success = 'Jogo excluído com sucesso.';

    response.redirect('/perfil');
    //request.session.campeonato = undefined;
  }
);

app.get('/pong',
  function(request, response){

    response.render('pong.hbs');
    //request.session.campeonato = undefined;
  }
);

app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }

    res.render('erro.hbs', {});
});
