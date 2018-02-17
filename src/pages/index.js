import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import {description} from '../config/site'
import mediaQuery from '../config/mediaQueries'
import styled from 'styled-components'

import site from '../config/site'
import Splash from '../components/Splash'

const StyledContainer = Container.extend`
  text-align: center;
`

const StyledH2 = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  line-height: 1.4;

  @media (max-width: ${mediaQuery.small.max}) {
    font-size: 1rem;
  }
`

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Splash />
    <StyledContainer>
        <StyledH2>{description}</StyledH2>
    </StyledContainer>

  </div>
)

export default IndexPage
