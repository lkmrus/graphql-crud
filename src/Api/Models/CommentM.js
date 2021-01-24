const CommentSQL = require('../../Infrastructure/SQL/CommentSQL');
const parse = require('./../../Helpers/parse');
const commentSQL = new CommentSQL();

module.exports = {
	// ================== Запросы ==================

	/**
	 * Получить все комментарии
	 * @param 
	 */
	async getCommentList() {
		const out = await commentSQL.getCommentList();
		return out;
	},

	/**
	 * Получить комментарий по post_id
	 * @param {object}  
	 */
	async getCommentListByPost(obj) {
		const out = await commentSQL.getCommentListByPost(obj);
		return out;
	},

	// ================== Мутации ==================
	/**
	 * Добавить комментарий
	 * @param {object}  
	 */
	async addComment(obj) {
		const out = await commentSQL.addComment(Object.values(obj));
		return out;
	},

	/**
	 * Обновить комментарий
	 * @param {object}  
	 */
	async updateComment(obj) {
		const data = parse(obj);
		const out = await commentSQL.updateComment(data);
		return out;
	},

	/**
	 * Удалить комментарий
	 * @param {object}  
	 */
	async delComment(obj) {
		const data = parse(obj)
		const out = await commentSQL.delComment(data);
		return out;
	},
};
