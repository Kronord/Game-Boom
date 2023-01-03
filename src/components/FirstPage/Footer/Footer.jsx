import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { FooterWrap, Text, FooterLine } from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrap>
      <Text>scroll</Text>
      <FooterLine></FooterLine>
      <PulseLoader
        size={5}
        margin={5}
        color="#fff"
        cssOverride={{ transform: 'rotate(90deg)', marginBottom: "20px"}}
      />
    </FooterWrap>
  );
}
