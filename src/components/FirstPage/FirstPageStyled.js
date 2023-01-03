import styled from 'styled-components';
import img from '../../Images/Image.jpg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(transparent 70%, rgba(0, 0, 0, 0.9)),
    url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ContentWrap = styled.div`
width: 1440px;
margin: 0 165px 0;
margin-top: 50px;
`;
