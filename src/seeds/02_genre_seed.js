
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {id: 1, genre: 'Aventura'},
        {id: 2, genre: 'Comedia'},
        {id: 3, genre: 'Animação'}
      ]);
    });
};
