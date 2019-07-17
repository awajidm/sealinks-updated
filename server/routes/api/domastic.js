const Domastic = require('../../models/Domastic');
module.exports = (app) => {
    /*
    *Contact
    */
    app.post('/api/customSearch/Domastic', (req, res, next) => {
        const { body } = req;
        const {
            nAreas,
            days,
            nOfAdults,
            nOfInfants,
            budget
        } = body;
        if (!nAreas) {
            return res.send({
                success: false,
                message: 'Northren Areas can not be blank'
            });
        }
        if (!days) {
            return res.send({
                success: false,
                message: 'Days can not be blank'
            });
        }
        if (!nOfAdults) {
            return res.send({
                success: false,
                message: 'Adults can not be blank'
            });
        }
        // if (!nOfInfants) {
        //     return res.send({
        //         success: false,
        //         message: 'Infants can not be blank'
        //     });
        // }

        if (!budget) {
            return res.send({
                success: false,
                message: 'budget can not be blank'
            });
        }
        //saving new Contact
        const newDomastic = new Domastic();
        newDomastic.nAreas = nAreas;
        newDomastic.days = days;
        newDomastic.nOfAdults = nOfAdults;
        newDomastic.nOfInfants = nOfInfants;
        newDomastic.budget = budget;
        console.log(req.body);
        newDomastic.save((err, domastic) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            }
            console.log(req.body);
            return res.send({
                success: true,
                message: 'Query Sent We will Contact you very Soon'
            });
        });
    });
}