const mongoose = require('mongoose');
const modelReunion = mongoose.model('Reunion');

let reunionController = {};

reunionController.allReunions = (req, res) => {
  // if(req.body.isAdmin === true){
  modelReunion.find()
    .then(results => res.json(results))
    .catch(err => res.send(err));
  // }
}

reunionController.newReunion = (req, res) => {
  let newReunion = new modelReunion({
    name: req.body.name,
    description: req.body.description,
    schedules: []
  });
  newReunion.save()
    .then(() => res.json({ success: true, message: 'Reunião criada com sucesso!', statusCode: 201 }))
    .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
}

reunionController.deleteReunion = (req,res) => {
  modelReunion.findByIdAndDelete({ _id: req.params.id }, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
    console.log("Reunião deletada com sucesso!");
  }
});
}

// userController.editReunion = (req, res) => {
//   if()
// }

module.exports = reunionController;
