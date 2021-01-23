const axios = require('axios');

const { fakedata } = require('./../src/Config/default');

exports.seed = async function (knex) {
	const fakeComments = (await axios.get(`${fakedata.baseUrl}/comments`)).data;

	const comments = fakeComments
		.filter(el => el.postId)
		.map((el) => ({
			name: el.name,
			post_id: +el.postId,
			email: el.email,
			body: el.body.substr(0, 1000),
		}))
		.splice(0, 100);

	await knex('comments').del();

	return await knex('comments').insert(comments);
};
