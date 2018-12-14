exports.up = function(knex, Promise) {
    return knex.schema.createTable("actors", table => {
        table.increments('id').primary()
        table.string('name', 80).notNullable()
        table.string('bio', 300).notNullable()
        table.string('birthdate', 4).notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actors")
};
