const { buildSchema } = require('graphql');

export default buildSchema(`

	type User {
		name: String!
		age: Int!
		email: String!
	}

	type TestType {
		count: Int!
		users: [User!]!
	}
	input Randa {
		min: Int!
		max: Int!
		count: Int!
	}

	type Query {
		test: TestType!
		random(randa: Randa!): [Float!]!
	}

	input UserInput {
		name: String!
		email: String!
	}

	type Mutation {
		addTestUser(user: UserInput!): User!
	}
`);
