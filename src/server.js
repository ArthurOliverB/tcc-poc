const app  = require('express')()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

app.use('/api', graphqlHTTP({
    schema, 
    graphiql: true
}))


app.listen(4000, () => console.log("Executando na porta 4000"))