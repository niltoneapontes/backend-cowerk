const reunionController = require('../controllers/reunion');

module.exports = (app) => {
  app.route('/reunions/')
    .get(reunionController.allReunions)
    .post(reunionController.newReunion)
    // .put(reunionController.editReunion)

  app.delete('/reunions/:id',reunionController.deleteReunion)
}
