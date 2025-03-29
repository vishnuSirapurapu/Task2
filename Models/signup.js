const mongoose = require('mongoose');
const SignupSchema = mongoose.Schema({
    name: String,
    fathername :String,
    DOB : String,
    branch :String,
    RollNO :String,
    Address :String,
    email: String,
    password: String,
  });
  
  const Signup = mongoose.model("Signup", SignupSchema);
  module.exports = Signup;