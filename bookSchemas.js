const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const BookModel = require('./models/Book.js');
const BookType = require('./graphql/TypeDefs/BooksType.js');

const bookQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      getAllBooks: {
        type: new GraphQLList(BookType),
        resolve: function () {
          const books = BookModel.find().exec();
          if (!books) {
            throw new Error('No Books exists');
          }
          return books;
        },
      },
      getBook: {
        type: BookType,
        args: {
          id: { name: '_id', type: GraphQLString },
        },
        resolve: function (root, { id }) {
          const bookDetails = BookModel.findById(id).exec();
          if (!bookDetails) {
            throw new Error(`No Book exists with this id ${id}`);
          }
          return bookDetails;
        },
      },
    };
  },
});

const bookMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: function () {
    return {
      addBook: {
        type: BookType,
        args: {
          isbn: { type: new GraphQLNonNull(GraphQLString) },
          title: { type: new GraphQLNonNull(GraphQLString) },
          author: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          published_year: { type: new GraphQLNonNull(GraphQLInt) },
          publisher: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: async function (root, params) {
          const bookModel = new BookModel(params);
          const newBook = await bookModel.save();
          if (!newBook) {
            throw new Error('No book to add!');
          }
          return newBook;
        },
      },
      updateBook: {
        type: BookType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString),
          },
          isbn: {
            type: new GraphQLNonNull(GraphQLString),
          },
          title: {
            type: new GraphQLNonNull(GraphQLString),
          },
          author: {
            type: new GraphQLNonNull(GraphQLString),
          },
          description: {
            type: new GraphQLNonNull(GraphQLString),
          },
          published_year: {
            type: new GraphQLNonNull(GraphQLInt),
          },
          publisher: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: async (root, params) => {
          const UpdatedBook = await BookModel.findByIdAndUpdate(
            params.id,
            params
          );
          if (!UpdatedBook) {
            throw new Error('Error');
          }
          return UpdatedBook;
        },
      },
      removeBook: {
        type: BookType,
        args: { id: { type: new GraphQLNonNull(GraphQLString) } },
        resolve: function (root, { id }) {
          const remBook = BookModel.findByIdAndRemove(id).exec();
          if (!remBook) {
            throw new Error(`You can't Remove Book id  ${id}`);
          }
          return remBook;
        },
      },
    };
  },
});

module.exports = new GraphQLSchema({
  query: bookQueryType,
  mutation: bookMutation,
});
