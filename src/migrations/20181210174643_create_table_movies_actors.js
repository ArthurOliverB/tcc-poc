exports.up = function(knex, Promise) {
    return knex.schema.createTable("movies_actors", table => {
        table.increments('id').primary()
        
        table.integer('movie_id').unsigned().notNullable()
        table.foreign('movie_id').references('movies.id').onDelete('CASCADE')
        
        table.integer('actor_id').unsigned().notNullable()
        table.foreign('actor_id').references('actors.id').onDelete('CASCADE')

        table.string('role').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("movies_actors")
};
