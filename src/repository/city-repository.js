//!repository is for fetching data from other resources e.g. DB

//? here i amm importing from index.js insted of city.js or you can 
// ? import from city,js too but using index.js it will automatically destrucred
const {City} = require('../models/index');



class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteCity(cityid){
        try {
            await City.destroy({
                where:{
                    id: cityid
                },
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw (error);
        }
    }

    async updateCity(cityId,data){   //{name:"prayagraj"}
        try {
            // const city = await City.update(data,{
            //     where: {
            //         id:cityId
            //     }
            // })

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw (error);
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw (error);
        }
    }
    

}

module.exports = CityRepository;

