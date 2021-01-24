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
	async getUser(obj) {
		let out = null;

		try {
			out = (await this.db('users').where(obj))[0];
		} catch (error) {
			console.log(`Получить пользователя не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Получить всех пользователей
	 * @returns {array}
	 */
	async getUserList() {
		let out = [];

		try {
			out = await this.db('users');
		} catch (error) {
			console.log(`Получить пользователей не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Добавить пользователя
	 * @param {object}
	 * @returns {boolean}
	 */
	async addUser(obj) {
		let out = false;

		try {
			out = !!(await this.db('users').insert(obj));
		} catch (error) {
			console.log(`Ошибка при добавлении пользователя :>> ${error}`);
		}

		return out;
	}

	/**
	 * Обновить пользователя
	 * @param {object}
	 * @returns {boolean}
	 */
	async updateUser(obj) {
		let out = false;
		try {
			const { id, user } = obj;
			
			out = !!(await this.db('users').update(user).where({ id }));
		} catch (error) {
			console.log(`Ошибка при обновлении пользователей :>> ${error}`);
		}

		return out;
	}

	/**
	 * Удалить пользователя
	 * @param {object}
	 * @returns {boolean}
	 */
	async delUser(obj) {
		let out = false;

		try {
			out = !!(await this.db('users').where(obj).del());
		} catch (error) {
			console.log(`Ошибка при удалении пользователей :>> ${error}`);
		}

		return out;
	}
}

module.exports = UserSQL;
