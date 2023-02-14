import React from 'react';
import { collection } from '../../mockData/collection';
import Table from '../Generic/Table';
import { Container, Wrap } from './style';

const Home = () => {
  return (
    <Container>
      <Wrap>
        <Table data={collection} />
      </Wrap>
    </Container>
  );
};

export default Home;
