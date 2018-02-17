import React from 'react'
import styled from 'styled-components'
import {green, orange, teal} from '../../config/colors'
import rippImg from './ripp.png'
import dmwImg from './dmw.svg'
import site from '../../config/site'
import Container from '../Container'

import StyledP from '../StyledP'
const SplashBg = styled.section`

`

const SplashDate = styled.div`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  letter-spacing: 0.06rem;
  line-height: 1.33;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
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

const Splash = () => (
  <SplashBg>

    {/* <SplashHeader>Denver Modernism Week <StyledYear>2018</StyledYear></SplashHeader> */}
    <Container>
      <img src={dmwImg} alt="Denver Modernism Week 2018" role="presentation" />
    </Container>

    <SplashDate>{site.date}</SplashDate>
    {/* <SplashBar>
      <Container>
        <SplashContent>{site.description}</SplashContent>
        <SplashImg src={rippImg} alt="rippHouse" role="presentation" />
      </Container>
    </SplashBar> */}

  </SplashBg>
)

export default Splash
