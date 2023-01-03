import React from 'react';
import PrimaryButton from '../../StyledComponents/PrimaryButton';
import { Title, Text, Container } from './MainContentStyled';

export default function MainContent() {
  return (
    <Container>
      <Title>CUSTOM GAME DEVELOPMENT COMPANY</Title>
      <Text>
        Game-Boom specializes in bangladesh game devolopment service, AR/VR
        gaming and game art creation
      </Text>
      <PrimaryButton />
    </Container>
  );
}
