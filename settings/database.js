const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://niltonpontes:$BQhsF$3BSbUcRm@ds263928.mlab.com:63928/heroku_80x6wms4', {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao banco de dados!');
});

mongoose.connection.on('error', (err) => {
  console.log('Erro na conexão: ' + err);
})

mongoose.connection.on('disconnect', () => {
  console.log('Desconectado do banco de dados.');
});
