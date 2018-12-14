exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', table => {
        table.increments('id').primary()
        table.string('name', 80).notNullable()
        table.string('description', 300).notNullable()
        table.string('year', 4).notNullable()
        table.integer('rating').unsigned().notNullable()
        table.integer('genre_id').unsigned().notNullable()
        table.foreign('genre_id').references('genres.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
