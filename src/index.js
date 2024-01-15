const express = require('express');
const bodyParserr = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');
const city = require('./models/city');
const sequelize = require('sequelize');

const setupAndStartServer = async ()=>{
    //create the express object
    const app = express();

    app.use(bodyParserr.json());
    app.use(bodyParserr.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server is started at ${PORT}`);
        if(process.env.SYNC_DB){
            //sync one time(lecture 5,1:38) whenevr we do new association
            db.sequelize.sync({alter:true});
        }
    });
}

setupAndStartServer();