const Contact = require('../../models/Contact');
module.exports = (app) => {
    /*
    *Contact
    */
    // usman.skylinxtech@gmail.com
    app.post('/api/accounts/contact', (req, res, next) => {
        const { body } = req;
        const {
            fullName,
            email,
            country,
            phoneNumber,
            subject,
            message,
        } = body;
        if (!fullName) {
            return res.send({
                success: false,
                message: 'Full name can not be blank'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Email can not be blank'
            });
        }
        if (!country) {
            return res.send({
                success: false,
                message: 'Country can not be blank'
            });
        }
        if (!phoneNumber) {
            return res.send({
                success: false,
                message: 'Phone number can not be blank'
            });
        }

        if (!subject) {
            return res.send({
                success: false,
                message: 'Subject can not be blank'
            });
        }

        if (!message) {
            return res.send({
                success: false,
                message: 'Message can not be blank'
            });
        }
        //saving new Contact
        const newContact = new Contact();

        newContact.fullName = fullName;
        newContact.email = email;
        newContact.country = country;
        newContact.phoneNumber = phoneNumber;
        newContact.subject = subject;
        newContact.message = message;
        newContact.save((err, contact) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: you are fucked buddy'
                });
            }
            return res.send({
                success: true,
                message: 'message sent'
            });
        });
    });
}