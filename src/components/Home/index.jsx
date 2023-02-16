import React from 'react';
import { collection } from '../../mockData/collection';
import Table from '../Generic/Table';
import { Wrap } from './style';

const Home = () => {
  return (
    <Wrap>
      <Table data={collection} />
    </Wrap>
  );
};

export default Home;
