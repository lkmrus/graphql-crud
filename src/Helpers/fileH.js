const util = require('util');
const fs = require('fs');

/**
 * Асинхронное чтение файла
 * @param sFileName
 */
module.exports = async function faReadFile(sFileName) {
	return util.promisify(fs.readFile)(sFileName, 'utf8');
};
