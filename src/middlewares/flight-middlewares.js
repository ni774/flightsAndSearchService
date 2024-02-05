
// middileware to check if client is sending requiest based on API contract
const { ClientErrorCodes} = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        // if any of the body params is missing means you are not following `API contract` and we will not forward the request
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'invalid request body for flight',
            error: 'Please provide all the required fields'
        });

    }

    next();
}

module.exports = {
    validateCreateFlight
}