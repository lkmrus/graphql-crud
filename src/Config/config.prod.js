const dotenv = require('dotenv').config();

module.exports = {
	mysql: {
		client: 'mysql',
		connection: {
			host: process.env.MYSQL_HOST,
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
		},
		pool: {
			min: 0,
			max: 10000,
		},
		migrations: {
			directory: './migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './seeds',
		},
		acquireConnectionTimeout: 10000,
		useNullAsDefault: true,
	},
	fakedata: {
		baseUrl: 'https://jsonplaceholder.typicode.com',
	},
};
