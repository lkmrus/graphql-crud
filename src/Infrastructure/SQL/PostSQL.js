const SQL = require('./SQL');
const parse = require('./../../Helpers/parse');

class PostSQL extends SQL {
	constructor() {
		super();
	}

	/**
	 * Получить пост
	 * @param {object}
	 * @returns {object}
	 * */
	async getPost(obj) {
		let out = [];
		try {
			const { post } = parse(obj);
			out = await this.db('posts').where(post);
		} catch (error) {
			console.log(`Получить пост не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Получить посты
	 * @returns {array}
	 */
	async getPostList() {
		let out = [];

		try {
			out = await this.db('posts');
		} catch (error) {
			console.log(`Получить посты не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Добавить пост
	 * @param {object}
	 * @returns {boolean}
	 */
	async addPost(obj) {
		let out = false;

		try {
			out = !!(await this.db('posts').insert(Object.values(obj)));
		} catch (error) {
			console.log(`Ошибка при добавлении поста :>> ${error}`);
		}

		return out;
	}

	/**
	 * Обновить пост
	 * @param {object}
	 * @returns {boolean}
	 */
	async updatePost(obj) {
		let out = false;
		try {
			const { id, post } = parse(obj);
			out = !!(await this.db('posts').update(post).where({ id }));
		} catch (error) {
			console.log(`Ошибка при обновлении поста :>> ${error}`);
		}

		return out;
	}

	/**
	 * Удалить пост
	 * @param {object}
	 * @returns {boolean}
	 */
	async delPost(obj) {
		let out = false;

		try {
			const { post } = parse(obj);
			out = !!(await this.db('posts').where(post).del());
		} catch (error) {
			console.log(`Ошибка при удалении поста :>> ${error}`);
		}

		return out;
	}
}

module.exports = PostSQL;
