const scheduleController = require('../controllers/schedule');

module.exports = (app) => {
  app.route('/schedules/')
    .get(scheduleController.allSchedules)
    .post(scheduleController.newSchedule)
    // .put(scheduleController.editSchedule)
    app.delete('/schedules/:id',scheduleController.deleteSchedule)
}
