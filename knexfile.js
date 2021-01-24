// Конфиг для настройки миграций
const conf = require('./src/Config/default');

module.exports = {
	development: conf.mysql,
	staging: conf.mysql,
	production: conf.mysql,
};
