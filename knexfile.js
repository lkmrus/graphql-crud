// Update with your config settings.
// Конфиг для настройки миграций в старой MySQL базе данных
const conf = require('./src/Config/default');

module.exports = {
	development: conf.mysql,
	staging: conf.mysql,
	production: conf.mysql,
};
