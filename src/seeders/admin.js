const User = require('../models/users');
const bcrypt = require('bcryptjs');
let password = "levels22";

exports.seedAdmin = () => {
    User.findOne({ role: "admin"}, (err, admin) => {
        if (err) throw err
        if (admin) {
            return "admin account already in use"
        }
        User.create({
            firstName: "James",
            lastName: "Cobler",
            username: "coblerwins",
            role: "admin"
        }, (err, user) => {
            if (err) throw err
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err 
                    user.password = hash;
                    user.save((err, savedUser) => {
                        if (err) throw err
                        return "admin account successfuly created"
                    })
                })
            })
        })
    })
}
