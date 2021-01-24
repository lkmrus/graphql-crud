const PostSQL = require('../../Infrastructure/SQL/PostSQL');
const parse = require('../../Helpers/parse');
const postSQL = new PostSQL();

module.exports = {
	// ================== Запросы ==================

	/**
	 * Получить пост/посты
	 * @param {object}
	 */
	async getPost(obj) {
		const data = parse(obj)
		const out = await postSQL.getPost(data);
		return out;
	},

	/**
	 * Получить все посты
	 */
	async getPostList() {
		const out = await postSQL.getPostList();
		return out;
	},

	// ================== Мутации ==================
	/**
	 * Добавить новый пост
	 * @param {object}
	 */
	async addPost(obj) {
		const out = await postSQL.addPost(Object.values(obj));
		return out;
	},

	/**
	 * Обновить пост
	 * @param {object}
	 */
	async updatePost(obj) {
		const data = parse(obj);
		const out = await postSQL.updatePost(data);
		return out;
	},

	/**
	 * Удалить пост
	 * @param {object}
	 */
	async delPost(obj) {
		const data = parse(obj);
		const out = await postSQL.delPost(data);
		return out;
	},
};
