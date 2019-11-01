const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Character {
        id: ID!
        role: String!
        movies: [Movie]
    }
    type Movie {
        id: ID!
        name: String
        description: String
        year: String
        rating: Int
        cast(first: Int): [Actor]
        director: [Director]
        genre: [Genre]
    }

    input MovieInput {
        name: String
        description: String
        year: String
        director: ID!
        rating: Int
        genreId: ID!
    }

    type Genre {
        id: ID!
        genre: String
    }

    input GenreInput {
        genre: String
    } 

    type Director {
        id: ID!
        name: String
        bio: String
        birthdate: String
        movies: [Movie]
    }

    input DirectorInput {
        name: String
        bio: String
        birthdate: String
    }

    type Actor {
        id: ID!
        name: String
        bio: String
        birthdate: String
        roles: [Character]
        movies(first: Int): [Movie]
    }
    input ActorInput {
        name: String
        bio: String
        birthdate: String
        movieId: ID
    }

    type Query {
        genres(first: Int, offset: Int): [Genre]
        characters(first: Int, offset: Int): [Character]
        movies(first: Int, offset: Int): [Movie]
        actors(first: Int, offset: Int): [Actor]
        directors: [Director]
        getMovie(id: ID!): Movie
        getGenre(id: ID!): Genre
        getActor(id: ID!): Actor
        getDirector(id: ID!): Director
        getMoviesByGenre(id: ID!): [Movie]
        getMoviesByDirector(id: ID!): [Movie]
    }

    type Mutation {
        createMovie(input: MovieInput): Movie
        createGenre(input: GenreInput): Genre
        createActor(input: ActorInput): Actor
        createDirector(input: DirectorInput): Director
        addCast(movieId: ID!, cast: [ID]!): Movie
        deleteMovie(id: ID!): String
    }
`   

module.exports = makeExecutableSchema({typeDefs, resolvers})