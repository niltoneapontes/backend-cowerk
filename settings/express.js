const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = () => {
  const app = express();

  app.set('port', (process.env.PORT || 3333));

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  consign()
    .include('models')
    .include('controllers')
    .then('routes')

    .into(app);

    return app;
}
