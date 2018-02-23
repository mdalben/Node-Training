'use strict'

const winston = require('winston')

const config = {
    levels: {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        verbose: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        debug: 'blue',
        warn: 'yellow',
        data: 'grey',
        info: 'green',
        verbose: 'cyan',
        silly: 'magenta'
    }
}
/** 
 * creates a logger via console with color.
*/
const logger = winston.createLogger({
    levels: config.levels,
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    )
})

logger.debug('This is a debug message..')
logger.warn('This is a warn message..')
logger.error('This is an error message..')
logger.data('This is a data message..')
logger.info('This is an info message..')