const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./bookSchemas');
const cors = require('cors');
dotenv.config();

const app = express();

const { connectDB } = require('./server/config/index');
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
