const workstationController = require('../controllers/workstation');

module.exports = (app) => {
  app.route('/workstations/')
    .get(workstationController.allWorkstations)
    .post(workstationController.newWorkstation)
    // .put(workstationController.editWorkstation)

  app.delete('/workstations/:id',workstationController.deleteWorkstation)
}
