
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, name: 'MIB', description: 'Dois caras em ternos pretos, acabandos com aliens', year: '2000', rating: 5,genre_id: 1},
        {id: 2, name: 'O auto da compadecida', description: 'As empreitadas de João Grilo e Chicó', year: '2004', rating: 5,genre_id: 2},
        {id: 3, name: 'Procurando Nemo', description: 'Marlin tenta encontrar seu filho perdido no oceano com a ajuda de dory', year: '2005', rating: 5,genre_id: 3},
        {id: 4, name: 'Dois caras legais', description: 'Dois detetives particulares se ajudam a resolver crimes em L.A', year: '2017', rating: 5,genre_id: 2},
        {id: 5, name: 'Bright', description: 'Will smith caçando monstros com a ajuda de um monstro', year: '2017', rating: 4,genre_id: 1},
        
      ]);
    });
};
