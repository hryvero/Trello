const { format, createLogger, transports } = require("winston");

const { combine, timestamp, printf, colorize } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: "debug",
  format: combine(colorize(), timestamp(), customFormat),
  transports: [new transports.Console()],
});

module.exports = logger;