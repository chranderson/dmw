import React from 'react'
import styled from 'styled-components'
import {green, orange, teal} from '../../config/colors'
import rippImg from './ripp.png'
import dudley from './4100-dudley-st.jpg'
import dmwImg from './dmw.svg'
import site from '../../config/site'
import Container from '../Container'

import mediaQuery from '../../config/mediaQueries'
import StyledP from '../StyledP'
const SplashWrap = styled.section`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${mediaQuery.small.max}px) {

    height: 100%;
    ${'' /* padding: 0; */}
  }
`

const SplashDate = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${orange};
  padding: 0.5rem 1rem;
  transform: translateY(-70%);
  ${'' /* margin-bottom: 2rem; */}
  font-size: 1.5rem;
  letter-spacing: 0.06rem;
  ${'' /* line-height: 1.33; */}
  text-align: center;
  text-transform: capitalize;
  ${'' /* width: 100%; */}


`

const SplashHeader = styled.h1`
  font-family: GothamRounded,sans-serif;
  font-size: 3.5rem;
  letter-spacing: 0.22rem;
  margin-bottom: 4rem;
  text-align: center;
  width: 100%;
`

const SplashContent = StyledP.extend`
  color: white;
  font-size: 1.5rem;
  margin: 0 2rem;
  flex: 1;
`
const SplashImg = styled.img`
  width: auto;
  height: 150px;
`
const SplashBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  background: ${green};
  padding: 2rem 0;
  text-align: right;
`

const StyledYear = styled.span`
  color: ${teal};
`

const SplashBg = styled.div`
  height: 350px;
  background-image: url(${dudley});
  background-size: cover;
  background-position: center;
  ${'' /* box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08); */}
  border-radius: 2px;

  @media (min-width: ${mediaQuery.large.min}px) {
    height: 60vh;
  }
`


const Splash = () => (
  <SplashWrap>
    <SplashBg />

    {/* <SplashHeader>Denver Modernism Week <StyledYear>2018</StyledYear></SplashHeader> */}
    {/* <img src={dudley} alt="Denver Modernism Week 2018" role="presentation" /> */}

      <SplashDate>{site.date}</SplashDate>

    {/* <SplashDate>{site.date}</SplashDate> */}
    {/* <SplashBar>
      <Container>
        <SplashContent>{site.description}</SplashContent>
        <SplashImg src={rippImg} alt="rippHouse" role="presentation" />
      </Container>
    </SplashBar> */}

  </SplashWrap>
)

export default Splash
