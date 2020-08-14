const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workstationSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  schedules: {
    type: [Date],
    required: false
  },

})

mongoose.model('Workstation', workstationSchema);
