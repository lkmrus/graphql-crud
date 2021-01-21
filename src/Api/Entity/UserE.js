const UserSQL = require('../../Infrastructure/SQL/UserSQL');
const userSQL = new UserSQL();

module.exports = {
	// ================== Запросы ==================
	/**
	 * Получить пользователя по айди
	 * @param {object}
	 * @returns {{id, name, username, email, update_at, created_at}[]}
	 */
	async getUser(objId) {
		const out = await userSQL.getUser(objId);
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
		const out = await userSQL.addUser(user);
		return out;
	},

	/**
	 * Пакетная вставка пользователей
	 * @param {{name, username, email}[]}
	 * @returns {boolean}
	 */
	async addUserPack(userList) {
		const out = await userSQL.addUserPack(userList);
		return out;
	},

	/**
	 * Обновить данные пользователя
	 * @param {{id, name, username, email}}
	 * @returns {boolean}
	 */
	async updateUser(id, user) {
		const out = await userSQL.updateUser(id, user);
		return out;
	},

	/**
	 * удалить пользователя
	 * @param {id}
	 * @returns {boolean}
	 */
	async delUser(objId) {
		const out = await userSQL.delUser(objId);
		return out;
	},
};
