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
			max: 10,
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
		entities: {
			posts: {
				url: '/posts/',
				count: 50, // max 100
			},
			comments: {
				url: '/comments/',
				count: 20, // max 500
			},
			users: {
				url: '/users/',
				count: 10, // max 10
			},
		},
	},
};
