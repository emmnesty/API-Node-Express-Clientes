const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({stack:true}),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({filename: './logger/error.log', level: 'error'}),
        new winston.transports.File({filename: './logger/info.log', level: 'info'})
    ]
});

module.exports = logger;