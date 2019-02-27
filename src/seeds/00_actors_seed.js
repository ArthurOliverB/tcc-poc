
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
        {id: 7, name: 'Ellen DeGeneres', bio: 'Apresentadora do proprio show!', birthdate: '1944'},
        {id: 8, name: 'Barry Sonnenfeld', bio: 'Barry Sonnenfeld é um diretor e ex-diretor de fotografia estadunidense.', birthdate: '1953'},
        {id: 9, name: 'Guel Arraes', bio: 'Miguel Arraes de Alencar Filho, conhecido como Guel Arraes, é um cineasta e diretor de televisão brasileiro', birthdate: '1953'},
        {id: 10, name: 'Andrew Stanton', bio: 'DescriçãoAndrew Christopher Stanton Jr. é um animador, roteirista, e ator de voz estado-unidense.', birthdate: '1953'},
        {id: 11, name: 'Lee Unkrich', bio: 'DescriçãoLee Edward Unkrich é um diretor e editor estadunidense.', birthdate: '1967'},
        {id: 12, name: 'Shane Black', bio: 'Shane Black é um roteirista, ator e diretor estadunidense, mais conhecido como o escritor do filme "Máquina Mortífera".', birthdate: '1961'},
        {id: 13, name: 'David Ayer', bio: 'David Ayer é um diretor, produtor e roteirista americano.', birthdate: '1968'},
        
        
      ]);
    });
};
