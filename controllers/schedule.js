const mongoose = require('mongoose');
const modelSchedule = mongoose.model('Schedule');

let scheduleController = {};

scheduleController.allSchedules = (req, res) => {
  // if(req.body.isAdmin === true){
  modelSchedule.find()
    .then(results => res.json(results))
    .catch(err => res.send(err));
  // }
}

scheduleController.newSchedule = (req, res) => {
  let newSchedule = new modelSchedule({
    user_id: req.body.user_id,
    reunion_id: req.body.reunion_id,
    workstation_id: req.body.workstation_id
  });
  newSchedule.save()
    .then(() => res.json({ success: true, message: 'Agendamento criado com sucesso!', statusCode: 201 }))
    .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
}

scheduleController.deleteSchedule = (req,res) => {
  modelSchedule.findByIdAndDelete({ _id: req.params.id }, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
    console.log("Agendamento deletado com sucesso!");
  }
});
}

// userController.editSchedule = (req, res) => {
//   if()
// }

module.exports = scheduleController;
