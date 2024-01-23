const CrudRepository = require('./crud-repository');
//import model from index file
const {Airport} = require('../models/index');

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;