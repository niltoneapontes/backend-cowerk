const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({

  user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  reunion_id: {type: Schema.Types.ObjectId, ref: 'Reunion', required: false},
  workstation_id: {type: Schema.Types.ObjectId, ref: 'Workstation', required: false}

})

mongoose.model('Schedule', scheduleSchema);
