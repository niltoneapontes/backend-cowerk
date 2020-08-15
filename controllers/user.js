const mongoose = require('mongoose');
const modelUser = mongoose.model('User');
const bcrypt = require('bcrypt');
//
// const sign = require('jwt');
// const verify = require('jwt');

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
            res.status(404).send('Este usuário não está disponível.')
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
                  .then(() => {
                    // const token = jwt.sign(
                    //   {user: user._id}
                    // );
                    res.json({ success: true, message: 'Usuário criado com sucesso', statusCode: 201 });
                    // res.send(user, token);

                  })
                  .catch(err => res.status(404).send('Erro1'));
              })

              .catch(err=> res.status(404).send('Erro2'));
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

userController.logIn = (req, res) => {
  modelUser.findOne({
    'email': req.body.email})
      .then((user) => {
      if(!user){
        res.status(404).send('Usuário não cadastrado.');
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if(result == true){
            res.send(user);
          } else {
            res.status(404).send('A senha não confere.');
          }
        });
      }
    });
}

module.exports = userController;
