const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: false
  },

  birthdate: {
    type: Date,
    required: false,
    default: Date.now
  },

  cpf: {
    type: Number,
    required: false,
  },

  address: {
    type: String,
    required: false,
  },

  bio: {
    type: String,
    required: false,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
})

mongoose.model('User', userSchema);
