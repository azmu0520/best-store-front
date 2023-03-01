import React, { useState } from "react";
import { Wrap, Body } from "./style";
import img from "../../../assets/images/no-image.png";

const Card = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <Wrap>
      <Wrap.ImageContainer>
        <Wrap.Image src={item.image || img} />
      </Wrap.ImageContainer>
      <Body>
        <Body.Title>
          {item.name} <div>edit</div>
        </Body.Title>
        <Body.Desc>{item.description}</Body.Desc>
        <Wrap.Footer>
          <Wrap.Like like={like} onClick={() => setLike(!like)} />
          {item.likes || "10"}
        </Wrap.Footer>
      </Body>
    </Wrap>
  );
};

export default Card;
