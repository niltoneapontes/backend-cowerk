const mongoose = require('mongoose');
const modelWorkstation = mongoose.model('Workstation');

let workstationController = {};

workstationController.allWorkstations = (req, res) => {
  // if(req.body.isAdmin === true){
  modelWorkstation.find()
    .then(results => res.json(results))
    .catch(err => res.send(err));
  // }
}

workstationController.newWorkstation = (req, res) => {
  let newWorkstation = new modelWorkstation({
    name: req.body.name,
    description: req.body.description,
    schedules: []
  });
  newWorkstation.save()
    .then(() => res.json({ success: true, message: 'Workstation criada com sucesso!', statusCode: 201 }))
    .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
}

workstationController.deleteWorkstation = (req,res) => {
  modelWorkstation.findByIdAndDelete({ _id: req.params.id }, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
    console.log("Workstation deletada com sucesso!");
  }
});
}

// userController.editWorkstation = (req, res) => {
//   if()
// }

module.exports = workstationController;
