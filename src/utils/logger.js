// src/utils/logger.js
const chalk = require('chalk');

exports.info = (msg) => console.log(chalk.blue('[INFO]'), msg);
exports.warn = (msg) => console.warn(chalk.yellow('[WARN]'), msg);
exports.error = (msg) => console.error(chalk.red('[ERROR]'), msg);
exports.success = (msg) => console.log(chalk.green('[SUCCESS]'), msg);
