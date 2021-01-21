const UserE = require('./Entity/UserE');
const PostE = require('./Entity/PostE');
const CommentE = require('./Entity/CommentE');

const objResolver = {
	...UserE,
	...PostE,
	...CommentE,
};

module.exports = objResolver;
