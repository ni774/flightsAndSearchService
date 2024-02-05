const {CityRepository}= require('../repository/index');
const CrudService = require('./crud-service');

class CityService extends CrudService {
    constructor(){
        const cityRepository = new CityRepository();
        super(cityRepository);
    }

   

    async getAllCities(filter){
        // console.log(filter,"service");
        try {
            // console.log(this.repository,"service");
            const cities = await this.repository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw {error};  
        }
    }

}

module.exports = CityService;