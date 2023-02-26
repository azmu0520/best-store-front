import React, { useState } from 'react';
import { Wrap } from './style';

const Manual = () => {
  const types = [
    {
      name: 'Book',
    },
    {
      name: 'Movie',
    },
    {
      name: 'Music',
    },
    {
      name: 'Video Game',
    },
  ];
  const [type, setType] = useState(types[0].name);
  return (
    <Wrap>
      <Wrap.Title>Select Collection</Wrap.Title>
      <Wrap.AntSelect
        defaultValue='lucy'
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'Yiminghe',
            label: 'yiminghe',
          },
          {
            value: 'disabled',
            label: 'Disabled',
          },
        ]}
      />
      <Wrap.Label>Choose the collection you're adding items to.</Wrap.Label>
      <Wrap.Title>Item Type</Wrap.Title>
      <Wrap.TypeCheckBoxes>
        {types.map(({ name }) => (
          <>
            <Wrap.Checkbox
              type='radio'
              id={name}
              name='types'
              onChange={() => setType(name)}
            />
            <Wrap.Label htmlFor={name}>{name}</Wrap.Label>
          </>
        ))}
      </Wrap.TypeCheckBoxes>
    </Wrap>
  );
};

export default Manual;
