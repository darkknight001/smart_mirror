const express = require('express');
const path = require('path');
// const http = require('http');
// const socket  = require('socket.io');
const app = express();

function Server(config, callback){
    const port = config.port;
    // const server = http.Server(app);

    // const io = socket(server);
    app.use(express.static(config.appDir))
    console.log("Starting server on port " + port + " ... ");
    app.listen(5999);



    app.get('/', (req, res)=>{
        res.sendFile(path.join(config.appDir, 'index.html'))
    });

    if (typeof callback === "function") {
		callback(app);
	}
    
}

module.exports = Server;