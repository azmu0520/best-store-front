import React from "react";
import {
  Container,
  ChooseWrap,
  Arrow,
  LeftSide,
  ItemWrap,
  UserIcon,
  SearchIcon,
  KarzinkaIcon,
} from "./style";

const Header = (props) => {
  return (
    <Container>
      <ChooseWrap>
        <ChooseWrap.Item>
          EN <Arrow />
        </ChooseWrap.Item>
        <ChooseWrap.Item>
          USD <Arrow />
        </ChooseWrap.Item>
      </ChooseWrap>
      <LeftSide>
        <ItemWrap>
          <UserIcon /> My profile
        </ItemWrap>
        <ItemWrap padding>
          <KarzinkaIcon /> Items
        </ItemWrap>
        <ItemWrap>
          $0.00
          <SearchIcon />
        </ItemWrap>
      </LeftSide>
    </Container>
  );
};

export default Header;
