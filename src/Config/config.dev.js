const dotenv = require('dotenv').config();

let env = null;
env = dotenv.config().parsed;
env = process.env;

module.exports = {
	mysql: {
		client: 'mysql2',
		connection: {
			host: env.mysql.MYSQL_HOST,
			user: env.mysql.MYSQL_USER,
			password: env.mysql.MYSQL_PASSWORD,
			database: env.MYSQL_DATABASE,
		},
		pool: {
			min: 0,
			max: 100,
		},
		migrations: {
			directory: __dirname + '/src/migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './seeds',
		},
		acquireConnectionTimeout: 10000,
		useNullAsDefault: true,
	},
};
