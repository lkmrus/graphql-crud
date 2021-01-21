exports.up = async function (knex) {
    console.log('Создание таблицы users');

    await knex.schema.dropTableIfExists('users');
    await knex.schema.createTable('users', (table) => {

		table.increments('id');

		table.string('name', 255)
			.unique()
			.index('name')
            .comment('ФИО пользователя');
            
        table.boolean('active')
            .defaultTo(true)
            .comment('Статус');
            
        table.string('username', 255)
			.index('username')
			.comment('Логин');
			
		table.string('email', 255)
			.index('email')
            .comment('email');

		table.timestamp('updated_at')
			.notNullable()
			.defaultTo(knex.raw('CURRENT_TIMESTAMP'))
			.comment('Дата обновления пользователя');

		table.timestamp('created_at')
			.notNullable()
			.defaultTo(knex.raw('CURRENT_TIMESTAMP'))
			.comment('Дата создания пользователя');

		table.comment('Таблица пользователей');
		table.collate('utf8_bin');
    });
    
    return knex.schema;
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('users');
};
