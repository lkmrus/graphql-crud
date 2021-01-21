const PostSQL = require('../../Infrastructure/SQL/PostSQL');
const postSQL = new PostSQL();

module.exports = {
	// ================== Запросы ==================
	async getPost(objId) {
		const out = true;
		return out;
	},
	async getPostList() {
		const out = true;
		return out;
	},

	// ================== Мутации ==================
	async addPost(post) {
		const out = true;
		return out;
	},
	async updatePost(id, post) {
		const out = true;
		return out;
	},
	async delPost(objId) {
		const out = true;
		return out;
	},
};
