const { buildSchema } = require('graphql');

module.exports = buildSchema(`
	"Схема пользователя"
	type UserQ {
		id: Int!
		name: String
		active: Boolean
		username: String
		update_at: String
		created_at: String
	}

	input UserM {
		name: String!
		username: String
		email: String
	}

	"Схема постов"
	input PostM {
		user_id: Int!
		title: String!
		body: String
	}

	type PostQ {
		id: Int!
		user_id: Int!
		title: String!
		body: String
		update_at: String
		created_at: String
	}

	"Схема комментариев"
	type CommentQ {
		id: Int!
		name: String!
		post_id: Int!
		email: String
		body: String
	}

	input CommentM {
		post_id: Int!
		name: String!
		email: String
		body: String
	}

	"Запросы"
	type Query {
		"Запросы пользователя"
		getUser(id: Int!): UserQ
		getUserList: [UserQ]!

		"Запросы постов"
		getPost(id: Int!): PostQ
		getPostList: [PostQ]

		"Запросы комментариев"
		getCommentList: [CommentQ]
		getCommentByPostId(id: Int!): PostQ
	}

	"Мутации"
	type Mutation {
		"Мутации пользователя"
		addUser(user: UserM!): Boolean!
		addUserPack(userList: [UserM]): Boolean!
		updateUser(id: Int!, user: UserM!): Boolean!
		delUser(id: Int!): Boolean!

		"Мутации постов"
		addPost(user: PostM!): Boolean!
		updatePost(id: Int!, user: PostM!): Boolean!
		delPost(id: Int!): Boolean!

		"Мутации комментариев"
		addComment(comment: CommentM!): Boolean!
		updateComment(id: Int!, user: CommentM!): Boolean!
		delComment(id: Int!): Boolean!
	}

`);

`






`;
