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
  DollorWrap,
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
        <DollorWrap>
          $0.00
          <SearchIcon />
        </DollorWrap>
      </LeftSide>
    </Container>
  );
};

export default Header;
