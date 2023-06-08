const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");
const swagger = require('swagger-ui-express');
const cors = require('cors');
const winston = require('winston');
const expressWinston = require('express-winston');
const server = require('http').createServer();
const dotenv = require("dotenv");
const passport = require("passport")
require("./configs/passport.config")
dotenv.config();



require('./models');
const logger = require('./services/logger');
const { PORT } = require("./configs/config")
const { _mainErrorHandler, notFoundError } = require("./errors/error.handler");
const { taskRouter, columnRouter, authRouter } = require("./routes")
const swaggerJson = require('./swagger.json');
const { profile } = require("console");



const app = express();

async function init() {
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

  app.use(cors({ origin: '*' }));


  await mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }).then((value) => {
      logger.info("Connection success");
    });

  app.use('/api-docs', swagger.serve, swagger.setup(swaggerJson));
  app.use('/auth', authRouter)
  app.use("/tasks", taskRouter)
  app.use("/columns", columnRouter)

  function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }

  app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());



  app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
  });



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
