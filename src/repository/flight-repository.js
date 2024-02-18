const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository {

    #createFilter(data){  //? private function
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {price: { [Op.between]: [data.minPrice, data.maxPrice] }})
        }
        if(data.minPrice){
            Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            Object.assign(filter,{price: {[Op.lte]: data.maxPrice}});
        }

        // Object.assign(filter,{[Op.and]: [{price: {[Op.lte]: 6000},{[Op.gte]: 4000} }]})
        console.log(filter);
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository", error);
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository", error);
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository", error);
            throw {error};
        } 
    }

    async updateFlight(flightId, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repository", error);
            throw { error };
        }
    }
}


module.exports = FlightRepository;

/*
{
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        price: {[Op.gte]: 4000}
    }
}
*/