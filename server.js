/*
*
* Server entry point
*
*/

// Imports - Core
import path from 'path';
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import cors from 'cors';
// import morgan from 'morgan';
import dotenv from "dotenv";

// Addition - Config
dotenv.config();

// Imports - Custom Code [Always add .js at the end of the import file]
import apiRoutes from './routes/api.js';
import webRoutes from './routes/web.js';
import ServerError from "./library/helpers/ServerError.js";

// Create Server
const server = express();

// Server Plugins
// server.use(morgan('dev'));
server.use(bodyParser.json({limit: "50mb", extended: true}))
server.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
server.use(cors());

// Static Files
server.use(express.static('public'));
const __dirname = path.resolve();
server.use("/css", express.static(__dirname + "/public/css"));

// View Engine
server.use(expressEjsLayouts);
server.set('views', './views');
server.set('layout', 'layouts/layout');
server.set('view engine', 'ejs');


// Server Routes - API Routes
server.use(apiRoutes);

// Server Routes - Web Routes
server.use(webRoutes);

server.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`Server started at Port: ${PORT}`);
});
