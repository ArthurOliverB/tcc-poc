
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actors').del()
    .then(function () {

      return knex('actors').insert([
        {id: 1, name: 'Will Smith', bio: 'Will smith é muito famoso!', birthdate: '1964'},
        {id: 2, name: 'João Grilo', bio: 'Esse cara é muito engraçado!', birthdate: '1974'},
        {id: 3, name: 'Chicó', bio: 'Não sei, só sei que foi assim...', birthdate: '1974'},
        {id: 4, name: 'Tommy Lee Jones', bio: 'Sempre interpreta um velho rabugento!', birthdate: '1944'},
        {id: 5, name: 'Ryan Gosling', bio: 'Acho que ele fez Driver', birthdate: '1984'},
        {id: 6, name: 'Russell Crowe', bio: 'Se consagrou em Gladiador!', birthdate: '1964'},
        {id: 7, name: 'Ellen DeGeneres', bio: 'Apresentadora do proprio show!', birthdate: '1944'}
      ]);
    });
};
