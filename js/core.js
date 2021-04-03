const Server = require('./server');
// const fs = require("fs");
const express = require('express');
const path = require('path');


function Core(){
    let config = {
        port: 5999,
        rootDir: path.join(__dirname,'../'),
        appDir: path.join(__dirname,'../build')
    }

    this.start = ()=>{
        const server = new Server(config, (app)=>{
           
            console.log("Express.js Server Started...")
        })
        
    }
    

    this.stop = ()=>{
        console.log("Stopping Express Server")
    }
}

module.exports = new Core();