const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
  },
  credits: {
    type: Number,
    default: 0,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
});

mongoose.model('users', userSchema);
