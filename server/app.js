const express = require("express");
const mongoose = require("mongoose");
const swagger = require('swagger-ui-express');
const cors = require('cors');
const winston = require('winston');
const expressWinston = require('express-winston');

require('./models');
const logger = require('./services/logger');
const {MONGO_URL, PORT}= require("./configs/config")
const { _mainErrorHandler, notFoundError } = require("./errors/error.handler");
const {taskRouter, columnRouter }= require("./routes")
const swaggerJson = require('./swagger.json')


const app = express();

async function init () {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));

  app.use(cors({origin: '*'}));

  await mongoose.connect(MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }).then((value) => {
    logger.info("Connection success");
  });
    
  app.use(cors())

  app.use('/api-docs', swagger.serve, swagger.setup(swaggerJson));
  app.use("/tasks",taskRouter )
  app.use("/columns",columnRouter )
  app.use('*', notFoundError);
  app.use(_mainErrorHandler);


  app.listen(PORT, () => {
    logger.info(`Started on ${PORT} port`);
  });

  app.on('uncaughtException', (data) => {
    logger.error(data);
    process.exit(1);
  })

}

void init();
