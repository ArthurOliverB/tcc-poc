
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_actors').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies_actors').insert([
        {id: 1, movie_id: 1, actor_id: 1},
        {id: 2, movie_id: 5, actor_id: 1},
        {id: 3, movie_id: 2, actor_id: 2},
        {id: 4, movie_id: 2, actor_id: 3},
        {id: 5, movie_id: 3, actor_id: 7},
        {id: 6, movie_id: 4, actor_id: 5},
        {id: 7, movie_id: 4, actor_id: 6},
        {id: 8, movie_id: 5, actor_id: 1},
        {id: 9, movie_id: 1, actor_id: 4},
      ]);
    });
};
