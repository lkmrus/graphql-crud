const axios = require('axios');

const { fakedata } = require('./../src/Config/default');

exports.seed = async function (knex) {
	const fakeUsers = (await axios.get(`${fakedata.baseUrl}/users`)).data;
	
	const users = fakeUsers.map((el) => ({
		name: el.name,
		username: el.username,
		email: el.email,
	}));



	await knex('users').del();

	await knex('users').insert(users);
};
