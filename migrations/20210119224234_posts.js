exports.up = async function (knex) {
	console.log('Создание таблицы posts');

	await knex.schema.dropTableIfExists('posts');
	await knex.schema.createTable('posts', (table) => {
		table.increments('id');

        table.integer('user_id')
            .index('user_id')
            .unsigned()
            .comment('ID пользователя');

        table.string('title', 255)
            .index('title')
            .comment('Заголовок статьи');

        table.string('body', 255)
            .defaultTo('')
            .comment('Почта пользователя');

        table.timestamp('updated_at')
			.notNullable()
			.defaultTo(knex.raw('CURRENT_TIMESTAMP'))
			.comment('Дата обновления статьи');

        table.timestamp('created_at')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .comment('Дата создания статьи');

		table.comment('Таблица статей');
		table.collate('utf8_bin');
	});

	return knex.schema;
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('posts');
};
