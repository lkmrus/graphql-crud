const PostSQL = require('../../Infrastructure/SQL/PostSQL');
const postSQL = new PostSQL();

module.exports = {
	// ================== Запросы ==================
	async getPost(obj) {
		const out = await postSQL.getPost(obj);
		return out;
	},
	async getPostList() {
		const out = await postSQL.getPostList();
		return out;
	},

	// ================== Мутации ==================
	async addPost(obj) {
		const out = await postSQL.addPost(obj);
		return out;
	},
	async updatePost(id, obj) {
		const out = await postSQL.updatePost(id, obj);
		return out;
	},
	async delPost(obj) {
		const out = await postSQL.delPost(obj);
		return out;
	},
};
