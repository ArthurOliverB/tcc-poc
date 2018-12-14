exports.up = function(knex, Promise) {
    return knex.schema.createTable("genres", table => {
        table.increments('id').primary()
        table.string('genre', 30).notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("genres")
};
