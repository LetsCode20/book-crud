import React from 'react';
import ReactDOM from 'react-dom/client';
// Style
import './index.css';
// App JSX
import App from './App';
// React Router Dom
import { BrowserRouter } from 'react-router-dom';
// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
