import React from 'react';
import { Wrap } from './style';

const Card = ({
  item: { id, description, downloaded, like, comments, image },
}) => {
  return (
    <Wrap>
      <Wrap.Td>
        <Wrap.Image src={image} />
        <Wrap.Body></Wrap.Body>
      </Wrap.Td>
    </Wrap>
  );
};

export default Card;
