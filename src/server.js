const app  = require('express')()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')
const cors = require('cors')

app.use(cors())
app.use('/api', graphqlHTTP({
    schema, 
    graphiql: false
}))


app.listen(4000, () => console.log("Executando na porta 4000"))