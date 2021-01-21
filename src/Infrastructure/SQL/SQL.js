const knex = require('knex');
const { mysql } = require('../../Config/default');

class SQL {
	constructor() {
		if (!this.db) {
			this.db = knex(mysql);
		}
	}
}

module.exports = SQL;
