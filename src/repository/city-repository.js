//!repository is for fetching data from other resources e.g. DB
//! service is for implimenting bussiness logic

//? here i amm importing from index.js insted of city.js or you can 
// ? import from city,js too but using index.js it will automatically destrucred

const {City} = require('../models/index');
const { Op } = require('sequelize');  //for filtering data

const CrudRepository = require('./crud-repository');


class CityRepository extends CrudRepository {

    constructor(){
        super(City);
    }
        
    //*************************************  My custom function ***********************************************************
    async getAllCities(filter){
        console.log(filter);
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw (error);
        }
    }
    

}

module.exports = CityRepository;

