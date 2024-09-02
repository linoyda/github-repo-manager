const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Custom format for log messages
const customFormat = printf(({ level, message, timestamp }) => {
  return `[user-service:] ${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    customFormat
  ),
  transports: [new transports.Console()],
  level: 'info',
});

module.exports = logger;
