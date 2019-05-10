const User = require('./../models/user');

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
    }
}