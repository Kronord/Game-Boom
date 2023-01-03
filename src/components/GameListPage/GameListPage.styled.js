import styled from 'styled-components';
import Slider from 'react-slick';

export const MainWrap = styled.div`
  background-color: #000;
  padding-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 190px;
  margin-bottom: 140px;
`;

export const TitleBox = styled.div`
  margin-left: 160px;
`;

export const Title = styled.h2`
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 58px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Text = styled.p`
  font-family: 'Circular Std';
  font-size: 26px;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
`;

export const BtnBox = styled.div`
  display: flex;
  margin-right: 165px;
`;

export const PrevBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #97bf034d;
  border: 1px solid #aade00;
  box-shadow: 0px 4px 50px rgba(151, 191, 3, 0.3);
  &:hover {
    background-color: #aade00;
  }
`;

export const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #97bf034d;
  border: 1px solid #aade00;
  box-shadow: 0px 4px 50px rgba(151, 191, 3, 0.3);
  &:hover {
    background-color: #aade00;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transform: skew(-20deg, 0);
`;

export const Image = styled.div`
  width: 250px;
  height: 450px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // transform: skew(40deg, 0);
`;

export const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
