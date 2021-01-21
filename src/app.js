const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Api/schema');
const resolver = require('./Api/resolver');
const app = express();

app.use('/api',
	graphqlHTTP({
		schema: schema,
		rootValue: resolver,
		graphiql: true,
	})
);

module.exports = app;
