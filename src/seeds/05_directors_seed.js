
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directors_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('directors_movies').insert([
        {id: 1, movie_id: 1, director_id: 8},
        {id: 2, movie_id: 2, director_id: 9},
        {id: 3, movie_id: 3, director_id: 10},
        {id: 4, movie_id: 3, director_id: 11},
        {id: 5, movie_id: 4, director_id: 12},
        {id: 6, movie_id: 5, director_id: 13}
      ]);
    });
};
