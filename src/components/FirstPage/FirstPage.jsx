import React from 'react';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';
import { Wrapper, ContentWrap } from './FirstPageStyled';

export default function FirstPage() {
  return (
    <Wrapper>
      <ContentWrap>
        <Header />
        <MainContent />
        <Footer />
      </ContentWrap>
    </Wrapper>
  );
}
