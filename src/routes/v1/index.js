const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const {FlightMiddlewares} = require('../../middlewares/index');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll); // in query params: arrivalAirportId || departureAirportId ||data.minPrice && data.maxPrice

router.post('/airport', AirportController.create); // in body name, address, cityId

module.exports = router;