const db = require('../config/database')

module.exports = {
    Query: {
        async characters(_, args) {
            
            const limit = args.first ? args.first : 100
            const offset = args.offset ? args.offset : 0
            return await db('characters').limit(limit).offset(offset)
        },
        async movies(_, args) { 
            
            
            const limit = args.first ? args.first : 100
            const offset = args.offset ? args.offset : 0
            return await db('movies').limit(limit).offset(offset)
        },
        async actors(_, args) {
            
            const limit = args.first ? args.first : 100
            const offset = args.offset ? args.offset : 0
            return await db('actors').limit(limit).offset(offset)
        },
        async genres() {
            return await db('genres')
        },
        async directors() {
            const directors = await db('directors_movies')
                                .innerJoin('actors', 'directors_movies.director_id', 'actors.id')
            return directors
        },
        async getMovie(_, { id }) {
            return await db('movies').where({id}).first()
        },
        async getGenre(_, {id}) {
            const genero = await db('genres').where({id}).first()
            return genero
        },
        async getActor(_, {id}) {
            const result = await db('actors').where({id}).first()
            
            return result
        },
        async getDirector(_, {id}) {
            const result = await db('directors_movies')
                                .innerJoin('actors', 'directors_movies.director_id', 'actors.id')
                                .first()
            return result
        },
        async getMoviesByGenre(_, {id}) {
            const result = await db('genres').innerJoin('movies', 'genres.id', 'movies.genre_id').where('movies.genre_id', id)
            return result
        },
        async getMoviesByDirector(_, {id}) {
            const moviesIds = await db('directors_movies').where({movie_id: id})
            const idsOnly = moviesIds.map(movie =>movie.movie_id)
            
            return await db.from('movies').whereIn('id', idsOnly)
        }

    }, 
    Mutation: {
        async createMovie(_, {input}) {
            const result = await db('movies').insert({
                name: input.name,
                description: input.description,
                year: input.year,
                director_id: input.director_id,
                rating: input.rating,
                genre_id: input.genreId
            })

            const id = result[0]
            return await db('movies').where({id}).first()
        },
        async createGenre(_, {input}) {
            
            const result = await db('genres').insert({
                genre: input.genre
            })

            const id = result[0]
            const genero = await db('genres').where({id}).first()

            return genero
        },
        //(TODO)
        async createActor(_, {input}) {
            const id = await db('actors').insert({
                name: input.name,
                bio: input.bio,
                birthdate: input.birthdate
            })

            return await db('actors').where({id}).first()
        },
        
        async addCast(_, {movieId, cast}) {
            const newCast = cast.map(item => {
                return {movie_id: movieId, actor_id: item}
            })
            await db.batchInsert('movies_actors',newCast)
            
            return await db('movies').where({id: movieId}).first()
        },
        async deleteMovie(_, {id}) {
            await db('movies').delete().where({id})
            // const hasCast = await db('movies_actors').where({movie_id: id})
            return "Filme deletado com sucesso!"
        }
    },
    Movie: {
        async cast({id, actor_id}, {first}) {                        
            const limit = first ? first : 3 
            let result = await db.select('actors.id', 'actors.name', 'actors.bio', 'actors.birthdate', 'movies_actors.role')
                .from('actors')
                .innerJoin('movies_actors', 'actors.id', 'movies_actors.actor_id')
                .where({'movies_actors.movie_id': id}).limit(limit).offset(0)
            const response = result.map(actor => {
                if(actor_id) {
                    return ({...actor, movieId: id, actor_id})
                } else {
                    return ({...actor, movieId: id})
                }
            })    
            return response
        },
        async genre({id}) {
            // TODO: MOVIES_GENRES CRIAR TABELA
            const movie = await db('movies').where({id}).first()
            
            return await db('genres').where({id: movie.genre_id})
        }, 
        async director({id}) {
            
            const directorsIds = await db('directors_movies').where({movie_id: id})
            const idsOnly = directorsIds.map(director => director.director_id)
            const result = await db.from('actors').whereIn('id', idsOnly)
            
            return result
        }
    },
    Actor: {
        async movies({id}, {first}) {        
            const moviesIds = await db('movies_actors').where({actor_id: id})
            const idsOnly = moviesIds.map(movie =>movie.movie_id)
            
            const limit = first ? first : 5            
            const result = await db.from('movies').whereIn('id', idsOnly).limit(limit).offset(0)

            return result
        },
        async roles({id, movieId}) {
            let result = await db('movies_actors').where({actor_id: id})
            return result
        }
    }, 
    Director: {
        async movies({id}) { 
            const directorsIds = await db('directors_movies').where({director_id: id})
            const idsOnly = directorsIds.map(movie => movie.movie_id)
            
            
            return await db.from('movies').whereIn('id', idsOnly)
        }
    },
    Character: {
        async movies({movie_id}) {
            
            return await db('movies').where({id: movie_id})
        }
    }
}