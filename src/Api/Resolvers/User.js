const UserSQL = require('../../Infrastructure/SQL/UserSQL');
const parse = require('../../Helpers/parse');
const userSQL = new UserSQL();

module.exports = {
	// ================== Запросы ==================
	/**
	 * Получить пользователя по айди
	 * @param {object}
	 * @returns {{id, name, username, email, update_at, created_at}}
	 */
	async getUser(obj) {
		const out = await userSQL.getUser(obj);
		return out;
	},

	/**
	 * Получить всех пользователей
	 * @returns {{id, name, username, email, update_at, created_at}[]}
	 */
	async getUserList() {
		const out = await userSQL.getUserList();
		return out;
	},

	// ================== Мутации ==================
	/**
	 * Добавить нового пользователя
	 * @param {{name, username, email}}
	 * @returns {boolean}
	 */
	async addUser(user) {
		const out = await userSQL.addUser(Object.values(user));
		return out;
	},

	/**
	 * Обновить данные пользователя
	 * @param {{id, name, username, email}}
	 * @returns {boolean}
	 */
	async updateUser(obj) {
		const data = parse(obj);
		const out = await userSQL.updateUser(data);
		return out;
	},

	/**
	 * удалить пользователя
	 * @param {id}
	 * @returns {boolean}
	 */
	async delUser(id) {
		const out = await userSQL.delUser(id);
		return out;
	},
};
