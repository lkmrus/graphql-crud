const SQL = require('./SQL');

class UserSQL extends SQL {
	constructor() {
		super();
	}

	/**
	 * Получить пользователя по ID
	 * @param {object} id
	 * @returns {object}
	 * */
	async getUser(id) {
		let out = null;

		try {
			out = await this.db('users').where('active').where({ id });
		} catch (error) {}

		return out;
	}

	/**
	 * Получить всех активных пользователей
	 * @returns {array}
	 */
	async getUserList() {
		let out = [];

		try {
			out = await this.db('users').where('active');
		} catch (error) {
			console.log(`Получить пользователей не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Добавить пользователя
	 * @param {object} user
	 * @returns {boolean}
	 */
	async addUser(user) {
		let out = false;

		try {
			await this.db('users').insert(user);
			out = true;
		} catch (error) {
			console.log(`Ошибка при добавлении пользователя :>> ${error}`);
		}

		return out;
	}

	/**
	 * Добавить несколько пользователей
	 * @param {array} userList
	 * @returns {boolean}
	 */
	async addUserPack(userList) {
		let out = false;

		try {
			await this.db('users').insert(userList);
			out = true;
		} catch (error) {
			console.log(`Ошибка при добавлении пользователей :>> ${error}`);
		}

		return out;
	}

	/**
	 * Обновить пользователя
	 * @param {object}
	 * @returns {boolean}
	 */
	async updateUser(id, objUser) {
		let out = false;
		try {
			await this.db('users').update(objUser).where(id);
			out = true;
		} catch (error) {
			console.log(`Ошибка при добавлении пользователей :>> ${error}`);
		}

		return out;
	}

	/**
	 * Удалить пользователя
	 * @param {object}
	 * @returns {boolean}
	 */
	async delUser(objId) {
		let out = false;

		try {
			await this.db('users').where(objId).del();
			out = true;
		} catch (error) {
			console.log(`Ошибка при добавлении пользователей :>> ${error}`);
		}

		return out;
	}
}

module.exports = UserSQL;
