const mongoose = require('mongoose');
const SALT_FACTOR = 10;
const bcrypt = require('bcrypt');


const { Schema } = mongoose;

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.verifyPassword = function(userPassword, cb) {
  console.log(userPassword, 'userpswd')
  bcrypt.compare(userPassword, this.password, function(err, res) {
    console.log(err);
    if(err) cb(err, false);
    cb(null, res);
  })
}

userSchema.pre('save', function(next){
  var password = this.password;
  var self = this;

  console.log('debug1', this, this.password, this.isModified(this.password));

  if(this.isModified(this.password)) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    console.log('debug 1.5', err, salt);
    bcrypt.hash(password, salt, function(err, hash) {
        console.log('debug2', hash, err);
        // Store hash in your password DB.
        self.password = hash;
        next();
    });
  })
});

const User = mongoose.model('User', userSchema);
module.exports = User;