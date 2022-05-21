const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
// const { connectDB } = require('./config');
const schema = require('./bookSchemas');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const staticFiles = express.static(path.join(__dirname, './client/build'));
app.use(staticFiles);

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

app.use('/*', staticFiles);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at ${PORT}`);
});
