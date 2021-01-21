const CommentSQL = require('../../Infrastructure/SQL/CommentSQL');
const commentSQL = new CommentSQL();

module.exports = {
	// ================== Запросы ==================
	async getCommentList() {
		const out = true;
		return out;
	},
	async getCommentByPostId(objId) {
		const out = true;
		return out;
	},
	// ================== Мутации ==================
	async addComment() {
		const out = true;
		return out;
	},
	async updateComment() {
		const out = true;
		return out;
	},
	async delComment() {
		const out = true;
		return out;
	},
};
