const fs = require('fs')
const path = require('path')

const logsDir = path.join(__dirname, '../logs')
const requestsLogPath = path.join(logsDir, 'requests.log')
const errorsLogePath = path.join(logsDir, 'errors.log')

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

function logToFile(filePath, message) {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp} ${message}]`
}

fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
        console.log('فشل حفظ السجل', err.message)
    }
    console.log('تم حفظ السجل بنجاح')
})

const loggr = {
    logRequest: (req) => {
        const message = `${req.method} | ${req.url} | IP: ${req.socket.remoteAddress}`
        logToFile(requestsLogPath, message)
    },


    logError: (error, context = '') => {
        const message = `ERROR: ${error.message} | Context: ${context}\nSTACK: ${error.Stack}`
        logToFile(errorsLogePath, message)
    }
}

module.exports = loggr