const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { connectDB } = require('./config/index');
const schema = require('./bookSchemas');
dotenv.config();

const app = express();

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

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at ${PORT}`);
});
