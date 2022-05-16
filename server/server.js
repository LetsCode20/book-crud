const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/bookSchemas');
const cors = require('cors');
dotenv.config();

const app = express();

const { connectDB } = require('./config/index');
connectDB();

app.use('*', cors());
app.use(
  '/graphql',
  cors(),
  graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
