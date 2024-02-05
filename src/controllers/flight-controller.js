const {FlightService} = require('../services/index');

const flightService = new FlightService();
const {SuccessCodes } = require('../utils/error-codes');

const create = async (req, res)=>{
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success: true,
            message:'successfully create a flight',
            err: {}
        })
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to create a flight',
        err: error
       })
    }
}

const getAll = async (req,res) => {
     try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
          data: response,
          success: true,
          message: "successfully fetched the flights",
          err: {},
        });
     } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        })
     }
}



module.exports =  {
    create,
    getAll
}