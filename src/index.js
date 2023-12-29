const express = require('express');
const bodyParserr = require('body-parser');
const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async ()=>{
    //create the express object
    const app = express();

    app.use(bodyParserr.json());
    app.use(bodyParserr.urlencoded({extended: true}));
    app.listen(PORT,()=>{
        console.log(`Server is started at ${PORT}`);
    });
}

setupAndStartServer();