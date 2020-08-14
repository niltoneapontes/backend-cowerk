const app = require('./settings/express')();

require('./settings/database');

app.listen(app.get('port'), () => {
  console.log('Servidor na porta 3333...');
})
