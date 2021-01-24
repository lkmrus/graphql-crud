const UserM = require('./Resolvers/User');
const PostM = require('./Resolvers/Post');
const CommentM = require('./Resolvers/Comment');

const objResolver = {
	...UserM,
	...PostM,
	...CommentM,
};

module.exports = objResolver;
