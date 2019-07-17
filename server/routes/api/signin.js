const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {

    /*
    *Sign up
    */
    app.post('/api/accounts/signup', (req, res, next) => {
        const { body } = req;
        console.log('body', body);
        const {
            fullName,
            password,
            dateOfBirth,
            country,
            phoneNumber,
            gender
        } = body;
        let {
            email
        } = body;
        if (!fullName) {
            return res.send({
                success: false,
                message: 'Error: name can not be empity'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: email can not be empity'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: password can not be empity'
            });
        }
        if (!dateOfBirth) {
            return res.send({
                success: false,
                message: 'Error: DOB can not be empity'
            });
        }
        if (!country) {
            return res.send({
                success: false,
                message: 'Error: country can not be empity'
            });
        }
        if (!phoneNumber) {
            return res.send({
                success: false,
                message: 'Error: phone number can not be empity'
            });
        }
        if (!gender) {
            return res.send({
                success: false,
                message: 'Error: gender can not be empity'
            });
        }
        console.log('here');
        email = email.toLowerCase();

        //steps
        //1: verify Email
        //2: save

        User.find({
            email: email
        }, (err, previosUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            } else if (previosUsers > 0) {
                return res.send({
                    success: false,
                    message: 'Error: user exist'
                });
            }
            //saving new user
            const newUser = new User();

            newUser.fullName = fullName;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.dateOfBirth = dateOfBirth;
            newUser.country = country;
            newUser.phoneNumber = phoneNumber;
            newUser.gender = gender;
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            });
        });
    });
    app.post('/api/accounts/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: email can not be empity'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: password can not be empity'
            });
        }
        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const user = users[0];

            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Valid Sign in',
                    token: doc._id
                });
            });
        });
    });
    app.get('/api/accounts/verify', (req, res, next) => {
        const { query } = req;
        const { token } = query;
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'very good'
                });
            }
        });

    });
    app.get('/api/accounts/logout', (req, res, next) => {
        const { query } = req;
        const { token } = query;
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, { $set: { isDeleted: true } }, null, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            return res.send({
                success: true,
                message: 'very good'
            });
        });

    });
};