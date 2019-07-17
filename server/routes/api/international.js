const National = require('../../models/International');
module.exports = (app) => {
    /*
    *Contact
    */
    app.post('/api/customSearch/national', (req, res, next) => {
        const { body } = req;
        const {
            country,
            city,
            duration,
            nOfAdults,
            nOfInfants,
            adultsPassportNumbers,
            dateOfDeparture,
            dateOfReturn,
            budget
        } = body;
        if (!country) {
            return res.send({
                success: false,
                message: 'Country can not be blank'
            });
        }
        if (!city) {
            return res.send({
                success: false,
                message: 'City can not be blank'
            });
        }
        if (!duration) {
            return res.send({
                success: false,
                message: 'Duration can not be blank'
            });
        }
        if (!nOfAdults) {
            return res.send({
                success: false,
                message: 'Number of Adults can not be blank'
            });
        }
        if (!nOfInfants) {
            return res.send({
                success: false,
                message: 'Number of Infants can not be blank'
            });
        }
        if (!adultsPassportNumbers) {
            return res.send({
                success: false,
                message: 'Adults Passport Numbers can not be blank'
            });
        }
        if (!dateOfDeparture) {
            return res.send({
                success: false,
                message: 'Date Of Departure can not be blank'
            });
        }
        if (!dateOfReturn) {
            return res.send({
                success: false,
                message: 'Date Of Return can not be blank'
            });
        }

        if (!budget) {
            return res.send({
                success: false,
                message: 'Budget can not be blank'
            });
        }
        //saving new Contact
        country,
            city,
            duration,
            nOfAdults,
            nOfInfants,
            adultsPassportNumbers,
            dateOfDeparture,
            dateOfReturn,
            budget
        const newNational = new National();
        newNational.country = country;
        newNational.city = city;
        newNational.duration = duration;
        newNational.nOfAdults = nOfAdults;
        newNational.nOfInfants = nOfInfants;
        newNational.adultsPassportNumbers = adultsPassportNumbers;
        newNational.dateOfDeparture = dateOfDeparture;
        newNational.dateOfReturn = dateOfReturn;
        newNational.budget = budget;
        newNational.save((err, national) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Query Sent We will Contact you very Soon'
            });
        });
    });
}