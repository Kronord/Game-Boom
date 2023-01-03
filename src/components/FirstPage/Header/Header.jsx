import React from 'react';
import {
  Wrap,
  LogoBox,
  Logo,
  LogoWord,
  MenuBtn,
  Menu,
  MenuObjOne,
  MenuObjTwo,
  MenuObjThree,
  DashBox,
  DecDashOne,
  DecDashTwo,
} from './HeaderStyled';

export default function Header() {
  return (
    <Wrap>
      <LogoBox>
        <Logo>
          Game <LogoWord>Boom</LogoWord>
        </Logo>
      </LogoBox>
      <MenuBtn>
        <MenuObjOne />
        <MenuObjTwo />
        <MenuObjThree />
        <Menu>Menu</Menu>
        <DashBox>
          <DecDashOne />
          <DecDashTwo />
        </DashBox>
      </MenuBtn>
    </Wrap>
  );
}
