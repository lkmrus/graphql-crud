exports.up = async function (knex) {
	console.log('Создание таблицы comments');

	await knex.schema.dropTableIfExists('comments');
	await knex.schema.createTable('comments', (table) => {
		table.increments('id');

        table.integer('post_id')
            .index('post_id')
            .unsigned()
            .comment('ID поста');

        table.string('name', 255)
            .index('name')
            .comment('Имя комментатора');

        table.string('email', 255)
            .defaultTo('')
            .comment('Почта пользователя');

        table.string('body', 1000)
            .index('username')
            .comment('Комментарий');

        table.timestamp('created_at')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .comment('Дата комментария');

		table.comment('Comments');
		table.collate('utf8_bin');
	});

	return knex.schema;
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('comments');
};
