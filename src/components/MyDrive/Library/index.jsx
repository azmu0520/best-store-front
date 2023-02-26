import React from 'react';
import CSV from './CSV';
import Manual from './Manual';
import { Wrap } from './style';

const Library = () => {
  const items = [
    {
      key: '1',
      label: `Manual Entry`,
      children: <Manual />,
    },
    {
      key: '2',
      label: `CSV Import`,
      children: <CSV />,
    },
  ];
  return (
    <Wrap>
      <Wrap.Title>Add Item</Wrap.Title>
      <Wrap.AntTabs defaultActiveKey='1' items={items} />
    </Wrap>
  );
};

export default Library;
