const mongoose = require('mongoose')
const SigninSchema = mongoose.Schema({
    Rollno : String,
    Password :String
});
const Signin = mongoose.model("signin",SigninSchema);
module.exports = Signin;
