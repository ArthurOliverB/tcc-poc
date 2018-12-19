const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Movie {
        id: ID!
        name: String
        description: String
        year: String
        rating: Int
        cast: [Actor]
        genre: [Genre]
    }

    input MovieInput {
        name: String
        description: String
        year: String
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

    type Actor {
        id: ID!
        name: String
        bio: String
        birthdate: String
        movies: [Movie]
    }
    input ActorInput {
        name: String
        bio: String
        birthdate: String
        movieId: ID
    }

    type Query {
        genres: [Genre]
        movies: [Movie]
        actors:  [Actor]
        getMovie(id: ID!): Movie
        getGenre(id: ID!): Genre
        getActor(id: ID!): Actor
        getMoviesByGenre(id: ID!): [Movie]
    }

    type Mutation {
        createMovie(input: MovieInput): Movie
        createGenre(input: GenreInput): Genre
        createActor(input: ActorInput): Actor
        addCast(movieId: ID!, cast: [ID]!): Movie
        deleteMovie(id: ID!): String
    }
`   

module.exports = makeExecutableSchema({typeDefs, resolvers})