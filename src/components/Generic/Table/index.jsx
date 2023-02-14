import React from 'react';
import Card from '../Card';
import { Wrap } from './style';

const Table = ({ headTitle, data }) => {
  return (
    <Wrap>
      <Wrap.Thead>{headTitle}</Wrap.Thead>
      <Wrap.Tbody>
        {data?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Wrap.Tbody>
    </Wrap>
  );
};

export default Table;
