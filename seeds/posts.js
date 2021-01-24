const axios = require('axios');

const { fakedata } = require('./../src/Config/default');

exports.seed = async function (knex) {
	const fakePosts = (await axios.get(`${fakedata.baseUrl}/posts`)).data;

	const posts = fakePosts
	.filter(el => el.userId)
		.map((el) => ({
			user_id: +el.userId,
			title: el.title,
			body: el.body.substr(0, 1000),
		}))
		.splice(0, 150);

	await knex('posts').del();

	await knex('posts').insert(posts);
};
