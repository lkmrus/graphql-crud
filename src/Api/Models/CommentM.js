const CommentSQL = require('../../Infrastructure/SQL/CommentSQL');
const commentSQL = new CommentSQL();

module.exports = {
	// ================== Запросы ==================
	async getCommentList() {
		const out = await commentSQL.getCommentList();
		return out;
	},
	async getCommentListByPost(obj) {
		const out = await commentSQL.getCommentListByPost(obj);
		return out;
	},
	// ================== Мутации ==================
	async addComment(obj) {
		const out = await commentSQL.addComment(obj);
		return out;
	},
	async updateComment(id, obj) {
		const out = await commentSQL.updateComment(id, obj);
		return out;
	},
	async delComment(obj) {
		const out = await commentSQL.delComment(obj);
		return out;
	},
};
