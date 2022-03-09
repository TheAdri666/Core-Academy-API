const mongoose = require('mongoose');

const { Schema } = mongoose;

const diskSchema = new Schema({
  name: { type: String },
  artist: { type: String },
  duration: { type: Number },
});

module.exports = mongoose.model('Disk', diskSchema);
