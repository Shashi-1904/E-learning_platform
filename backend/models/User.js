const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  degree: { type: String, required: true },
  college: { type: String, required: true },
  password: { type: String, required: true,unique: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;