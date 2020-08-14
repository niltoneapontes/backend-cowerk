const mongoose = require('mongoose');
const modelUser = mongoose.model('User');
const bcrypt = require('bcrypt');

let userController = {};

userController.allUsers = (req, res) => {
  // if(req.body.isAdmin === true){
  modelUser.find()
    .then(results => res.json(results))
    .catch(err => res.send(err));
  // }
}

userController.newUser = (req, res) => {
  if(req.body.email && req.body.password) {
    if(req.body.password2 && req.body.password == req.body.password2) {
      modelUser.findOne({ 'email': req.body.email })
        .then(user => {
          if(user) {
            res.json({ success:false, message: 'Este usuário não está disponível.' })
          }
          else{
            bcrypt.hash(req.body.password, 10)
              .then(hash => {
                let encryptedPassword = hash;

                let newUser = new modelUser({
                  password: encryptedPassword,
                  email: req.body.email,
                  isAdmin: req.body.isAdmin
                });

                newUser.save()
                  .then(() => res.json({ success: true, message: 'Usuário criado com sucesso', statusCode: 201 }))
                  .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
              })

              .catch(err=> res.json({ success: false, message: err, statusCode: 500 }));
          }
        })
    } else {
      res.json({ success: false, message: 'As senhas não conferem.', statusCode: 400 });
    }
  } else {
    res.json({ success: false, message: 'Usuário e senha são obrigatórios.', statusCode: 400 }) }
}

// userController.editUser = (req, res) => {
//   if()
// }

userController.deleteUser = (req,res) => {
  modelUser.findByIdAndDelete({ _id: req.params.id }, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
    console.log("User deletada com sucesso!");
  }
});
}

module.exports = userController;
