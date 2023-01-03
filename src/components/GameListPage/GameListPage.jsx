import React, { Component } from 'react';
import { StyledSlider } from './GameListPage.styled';
import {
  Wrapper,
  Title,
  Text,
  TitleBox,
  PrevBtn,
  NextBtn,
  BtnBox,
  MainWrap,
  Image,
  ImgBox,
} from './GameListPage.styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import codImg from '../../Images/COD-infinite.jpg';
import brawlStarsImg from '../../Images/brawl-stars.jpg';
import crashImg from '../../Images/crash-bandicoot.jpg';
import jumanjiImg from '../../Images/JUMANJI-1.jpg';
import pubgImg from '../../Images/PUBG.jpg';
import shadowFightImg from '../../Images/Shadow-fight.jpg';

export default class GameListPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <MainWrap>
        <Wrapper>
          <TitleBox>
            <Title>What We Build</Title>
            <Text>Check our work and gives us feedback</Text>
          </TitleBox>
          <BtnBox>
            <PrevBtn type="button" onClick={this.previous}>
              <IoIosArrowBack
                style={{ width: '30px', height: '30px', fill: '#fff' }}
              />
            </PrevBtn>
            <NextBtn type="button" onClick={this.next}>
              <IoIosArrowForward
                style={{ width: '30px', height: '30px', fill: '#fff' }}
              />
            </NextBtn>
          </BtnBox>
        </Wrapper>
        <StyledSlider ref={c => (this.slider = c)} {...settings}>
          <ImgBox>
            <Image img={codImg} />
          </ImgBox>
          <ImgBox>
            <Image img={pubgImg}/>
          </ImgBox>
          <ImgBox>
            <Image img={brawlStarsImg}/>
          </ImgBox>
          <ImgBox>
            <Image img={shadowFightImg}/>
          </ImgBox>
          <ImgBox>
            <Image img={jumanjiImg}/>
          </ImgBox>
          <ImgBox>
            <Image img={crashImg}/>
          </ImgBox>
        </StyledSlider>
      </MainWrap>
    );
  }
}
