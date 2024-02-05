const {CityService} = require('../services/index');

const cityService = new CityService();


const create = async (req,res)=>{
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'successfully create a city',
            err: {}
        });
    } catch (error) {
       console.log(error); 
       return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to create a city',
        err: error
       })
    }
}

const destroy = async (req,res)=>{
    try {
        console.log("controller",req.params.id);d    
        const response = await cityService.destroy(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a city',
            err: error
        })
    }
}

const get = async (req,res)=>{
    try {
        const response = await cityService.get(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        }); 
    } catch (error) {
       console.log(error); 
       return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a city',
            err: error
        })
    }
}

// patch -> /city/:id -> req.body
const update = async (req,res)=>{
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'successfully updated a city',
            err: {}
        });   
    } catch (error) {
       console.log(error);
       return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a city',
            err: error
        }) 
    }

}

const getAll = async (req, res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch city',
            err: error
        }) 
    }
}

module.exports ={
    create,
    destroy,
    get,
    update,
    getAll
}

