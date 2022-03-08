const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  username: { type: String },
  email: {
    type: String,
    required: [true, 'An email address is required'],
  },
});

module.exports = mongoose.model('User', userSchema);
