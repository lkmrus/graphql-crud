const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Api/schema');
const resolver = require('./Api/resolver');
const session = require('express-session');
const { bodyParserGraphQL } = require('body-parser-graphql');
const app = express();

app.use(session({ secret: 'key session', cookie: { maxAge: 60000 } }));
app.use(bodyParserGraphQL());

app.get(
	'/api',
	graphqlHTTP({
		schema,
		rootValue: resolver,
		graphiql: true,
	})
);

app.post(
	'/api',
	graphqlHTTP({
		schema,
		rootValue: resolver,
		graphiql: false,
	})
);

app.use('*', function (req, res, next) {
	res.status(404).send('This page is not found - Error 404');
});

module.exports = app;
