const User = require('./../models/user');
const passport = require('passport')


module.exports = {
    signup: (req, res) => {
        const userData = req.body;
        const newUser = new User(userData);
        User.find({email: userData.email}, (err, user) => {
            if(user.length) {
                res.send({
                    msg: "User already exist"
                })
            } else {
                newUser.save((err, data) => {
                    if(err) throw err;
                    res.send(data)
                });
            }
        })
    },
    logIn: (req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { 
            return res.status(404).json({
              msg: 'Invalid Username or Password'
            }) 
          }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.status(200).json({
              user 
            })
          });
        })(req, res, next);
      }
}