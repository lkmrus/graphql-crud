const UserM = require('./Models/UserM');
const PostM = require('./Models/PostM');
const CommentM = require('./Models/CommentM');

const objResolver = {
	...UserM,
	...PostM,
	...CommentM,
};

module.exports = objResolver;
