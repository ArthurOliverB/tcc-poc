exports.up = function(knex, Promise) {
    return knex.schema.createTable("directors_movies", table => {
        table.increments('id').primary()
        
        table.integer('movie_id').unsigned().notNullable()
        table.foreign('movie_id').references('movies.id').onDelete('CASCADE')
        
        table.integer('director_id').unsigned().notNullable()
        table.foreign('director_id').references('actors.id').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("directors_movies")
};
