const SQL = require('../../System/SQL');

class CommentSQL extends SQL {
	constructor() {
		super();
	}

	/**
	 * Получить комментарий
	 * @param {object}
	 * @returns {object}
	 * */
	async getCommentListByPost(obj) {
		let out = [];
		try {
			out = await this.db('comments').where(obj);
		} catch (error) {
			console.log(`Получить комментарий не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Получить 100 комментариев
	 * @returns {array}
	 */
	async getCommentList() {
		let out = [];

		try {
			out = await this.db('comments').limit(100);
		} catch (error) {
			console.log(`Получить комментарии не удалось :>> ${error}`);
		}

		return out;
	}

	/**
	 * Добавить комментарий
	 * @param {object}
	 * @returns {boolean}
	 */
	async addComment(obj) {
		let out = false;

		try {
			out = !!(await this.db('comments').insert(obj));
		} catch (error) {
			console.log(`Ошибка при комментария поста :>> ${error}`);
		}

		return out;
	}

	/**
	 * Обновить комментарий
	 * @param {object}
	 * @returns {boolean}
	 */
	async updateComment(obj) {
		let out = false;
		try {
			const { id, comment } = obj;

			out = !!(await this.db('comments').update(comment).where({ id }));
		} catch (error) {
			console.log(`Ошибка при обновлении коммента :>> ${error}`);
		}

		return out;
	}

	/**
	 * Удалить комментарий
	 * @param {object}
	 * @returns {boolean}
	 */
	async delComment(obj) {
		let out = false;

		try {
			const { comment } = obj;

			out = !!(await this.db('comments').where(comment).del());
		} catch (error) {
			console.log(`Ошибка при удалении коммента :>> ${error}`);
		}

		return out;
	}
}

module.exports = CommentSQL;
