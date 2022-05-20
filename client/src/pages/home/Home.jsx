import React from 'react';
// Images
import GraphQLImg from '../../assets/images/GraphQL.png';
import ReactImg from '../../assets/images/React.png';
import ApolloClientImg from '../../assets/images/Apollo.png';
import NodeJsImg from '../../assets/images/NodeJS.png';
import MongoDBImg from '../../assets/images/MongoDB.png';
// Style
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <h1 className='homeTitle'>Welcome to Books CRUD</h1>
        <h3 className='homeDetails'>
          This Full Stack Web App created with Express, MongoDB, GraphQL, Apollo
          & React
        </h3>
        <p className='homeFunctions'>
          You can read, create, delete & update books
        </p>
        <div className='homeImages'>
          <img src={`${ReactImg}`} alt='react' className='homeImage' />
          <img src={`${GraphQLImg}`} alt='graphql' className='homeImage' />
          <img src={`${ApolloClientImg}`} alt='apollo' className='homeImage' />
          <img src={`${NodeJsImg}`} alt='nodejs' className='homeImage' />
          <img src={`${MongoDBImg}`} alt='mongodb' className='homeImage' />
        </div>
      </div>
    </div>
  );
};

export default Home;
