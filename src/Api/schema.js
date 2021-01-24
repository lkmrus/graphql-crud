const { buildSchema } = require('graphql');

module.exports = buildSchema(`
	"Схема пользователя"
	type UserQ {
		id: Int!
		name: String
		email: String
		active: Boolean
		username: String
		updated_at: String
		created_at: String
	}

	input UserM {
		name: String
		username: String
		email: String
	}

	"Схема постов"
	input PostM {
		id: Int
		user_id: Int
		title: String
		body: String
	}

	type PostQ {
		id: Int
		user_id: Int
		title: String
		body: String
		updated_at: String
		created_at: String
	}

	interface PostI {
		post: PostQ
		user: UserQ
		comment: CommentQ
	}

	"Схема комментариев"
	type CommentQ {
		id: Int
		name: String
		post_id: Int
		email: String
		body: String
		updated_at: String
		created_at: String
	}

	input CommentM {
		id: Int
		post_id: Int
		name: String
		email: String
		body: String
	}


	"Запросы"
	type Query {
		"Запросы пользователя"
		getUser(id: Int!): UserQ
		getUserList: [UserQ]!

		"Запросы постов"
		getPost(post: PostM!): [PostQ]
		getPostList: [PostQ]

		"Запросы комментариев"
		getCommentList: [CommentQ]
		getCommentListByPost(post_id: Int!): [CommentQ]
	}

	"Мутации"
	type Mutation {
		"Мутации пользователя"
		addUser(user: UserM!): Boolean!
		updateUser(id: Int!, user: UserM!): Boolean!
		delUser(id: Int!): Boolean!

		"Мутации постов"
		addPost(post: PostM!): Boolean!
		updatePost(id: Int!, post: PostM!): Boolean!
		delPost(post: PostM!): Boolean!

		"Мутации комментариев"
		addComment(comment: CommentM!): Boolean!
		updateComment(id: Int!, comment: CommentM!): Boolean!
		delComment(comment: CommentM!): Boolean!
	}

`);

`






`;
